// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";
import { ChildItemService } from "./child-service";
import { classMap } from "lit/directives/class-map.js";


/**
 * Shows tabular data, either as a table generated from data you provide or as your own native `<table>` styled to match Auro.
 *
 * ## Key capabilities
 * - **Generated table**: Set `columnHeaders` and `componentData` to build the table from data.
 * - **Projected table**: Put a native `<table>` in the default slot to have it styled, including rows and cells you add or remove later.
 * - **Single-line content**: Set `nowrap` to keep table content from wrapping.
 *
 * ## Example
 * ```html
 * <auro-table columnHeaders='["Day","Class"]' componentData='[{"Day":"Monday","Class":"Dance"}]'></auro-table>
 * ```
 * @summary A table that shows data you provide or styles your own native table markup.
 * @customElement auro-table
 * @slot - Holds your own native `<table>`, which the component styles. Shown only when `columnHeaders` and `componentData` aren't both set to non-empty arrays.
 * @cssprop {Color} --ds-auro-table-alt-row-container-color - Background color of the even-numbered rows.
 * @cssprop {Color} --ds-auro-table-border-color - Color of the line below the table header.
 */
export class AuroTable extends LitElement {

  /**
   * @property {string} tableStylesTextContent - Combined CSS text content for table styles and design tokens.
   * @static
   * @readonly
   * @private
   */
  static #tableStylesTextContent = `${styleCss.cssText} ${tokensCss.cssText}`;

  /**
   * @private
   */
  #runtimeUtils = new AuroLibraryRuntimeUtils();

  /**
   * @property {MutationObserver} #tableObserver - Observer to watch for mutations in the table element.
   */
  #tableObserver = null;

  /**
   * @property {Ref} #tableTagRef - Reference to the table element.
   */
  #tableTagRef = createRef();
  get #tableTag() { return this.#tableTagRef.value; }

  /**
   * @property {Ref} #tableHeaderRef - Reference to the table header element.
   */
  #tableHeaderRef = createRef();
  get #tableHeader() { return this.#tableHeaderRef.value; }

  /**
   * @property {Ref} #tableBodyRef - Reference to the table body element.
   */
  #tableBodyRef = createRef();
  get #tableBody() { return this.#tableBodyRef.value; }

  /**
   * Classes to be applied to different table elements referenced by tag name.
   * @type {Record<string, string[]>}
   */
  #elementClasses = {
    'TABLE': ['body-default'],
    'TH': ['heading-2xs'],
    // 'TD': [], // No specific classes for TD as per current requirements
    // 'TR': [], // No specific classes for TR as per current requirements
    // 'THEAD': [], // No specific classes for THEAD as per current requirements
    // 'TBODY': [] // No specific classes for TBODY as per current requirements
  }

  /**
   * Called when items are added to a table tag collection. Adds the classes for that tag to each new item.
   * Subscribed to each `ChildItemService` in `#tagCollections`.
   * @param {{addedItems: HTMLElement[]}} detail - The change details from `ChildItemService`.
   * @private
   */
  collectionUpdated = ({addedItems}) => {
    if (addedItems?.length) {
      const itemType = addedItems[0].tagName;
      if (!itemType) return;
      const itemClasses = this.#elementClasses[itemType];
      if (itemClasses) addedItems.forEach((item) => item.classList.add(...itemClasses));
    }
  };

  /**
   * Creates a `ChildItemService` for each relevant table tag to manage collections of those elements.
   * To create a collection for a new tag, add it to the tag list in `#tagCollections`.
   * @type {Object<string, ChildItemService>}
   * @private
   */
  #tagCollections = ['TH', 'TD', 'TR', 'THEAD', 'TBODY', 'TABLE']
    .reduce((collections, tag) => {
      collections[tag] = new ChildItemService({ callback: this.collectionUpdated });
      return collections;
    }, {});

  /**
   * Gets the class map for a tag, based on `#elementClasses`.
   * @param {HTMLElement.tagName} tag - The tag name to look up, in any case.
   * @returns {Object} The class map for use with lit's `classMap` directive.
   * @private
   */
  #classMapFor(tag) {
    const normalizedTag = tag?.toUpperCase();
    return this.#elementClasses[normalizedTag]?.reduce((acc, className) => {
      acc[className] = true;
      return acc;
    }, {}) || {};
  }

  constructor() {
    super();

    this._initializeDefaults();
  }

  /**
   * Sets the default values for the component's properties.
   * @private
   */
  _initializeDefaults() {
    this.nowrap = false;
  }

  static get properties() {
    return {

      /**
       * Sets the column headers for a generated table, as an array of strings. Each header must be unique, including blank ones, because it's also the key that matches cells in `componentData`. The table is generated only when `componentData` is also set. Security: headers are inserted as HTML, without sanitization, so don't pass untrusted input, because it can run code in your page.
       * @type {string[]}
       */
      columnHeaders: {
        attribute: "columnheaders",
        type: Array,
        reflect: true
      },

      /**
       * Sets the rows of a generated table, as an array of objects. Each object is one row, with `columnHeaders` values as keys and the cell content as values, and a missing key leaves its cell empty. The table is generated only when `columnHeaders` is also set. Security: cell content is inserted as HTML, without sanitization, so don't pass untrusted input, because it can run code in your page.
       * @type {Record<string, string>[]}
       */
      componentData: {
        attribute: "componentdata",
        type: Array,
        reflect: true
      },

      /**
       * Keeps table content on a single line instead of wrapping it. Applies to both generated and projected tables.
       */
      nowrap: {
        type: Boolean,
        reflect: true
      },
    };
  }

  static get styles() {
    return [styleCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-table"] - The tag name to register the element under.
   *
   * @example
   * AuroTable.register("custom-table") // Registers the element as <custom-table>
   *
   */
  static register(name = "auro-table") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTable);
  }

  updated(changedProperties) {
    if (changedProperties.has("columnHeaders")) {
      this.#extractHeaders();
    }

    if (changedProperties.has("componentData")) {
      this.#extractRows();
    }
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.#runtimeUtils.handleComponentTagRename(this, "auro-table");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    
    if (this.#tableObserver) {
      this.#tableObserver.disconnect();
    }
  }

  /**
   * ATTRIBUTE TABLE RENDERING LOGIC
   */

  /**
   * Extracts headers from the `columnHeaders` property and populates the table header.
   * @returns { void }
   * @private
   */
  #extractHeaders() {
    if (this.columnHeaders) {

      if (!this.#tableHeader) {
        console.warn("auro-table: #tableHeader is null or undefined in #extractHeaders(). This may indicate a rendering or initialization issue.");
        return;
      }
      
      this.#tableHeader.innerHTML = "";

      const tableHeaderRow = document.createElement("tr");
      this.#tableHeader.appendChild(tableHeaderRow);

      this.columnHeaders.forEach((header) => {
        const th = document.createElement("th");
        th.classList.add(...this.#elementClasses.TH);

        th.innerHTML = header;
        tableHeaderRow.appendChild(th);
      });
    }
  }

  /**
   * Extracts rows from the `componentData` property and populates the table body.
   * @returns { void }
   * @private
   */
  #extractRows() {
    if (!this.#tableBody) {
      console.error("auro-table: #tableBody is missing. Unable to extract rows.");
      return;
    }

    // Clear existing table body content
    this.#tableBody.innerHTML = "";

    if (this.componentData && this.columnHeaders) {

      // Use DocumentFragment for better performance
      const fragment = document.createDocumentFragment();

      // Create rows and cells
      this.componentData.forEach((row) => {
        const tr = document.createElement("tr");

        this.columnHeaders.forEach((column) => {
          const td = document.createElement("td");
          const content = row[column] || "";
          td.innerHTML = content;
          tr.appendChild(td);
        });

        // Append the row to the fragment
        fragment.appendChild(tr);
      });

      // Single DOM insertion via fragment
      this.#tableBody.appendChild(fragment);
    }
  }

  /**
   * SLOTTED TABLE LOGIC
   */

  /**
   * Observes mutations to the table element and adds or removes elements from collections accordingly.
   * @param {HTMLTableElement} table - The slotted table to observe.
   * @private
   */
  #observeTableMutations(table) {
    if (this.#tableObserver) {
      this.#tableObserver.disconnect();
    }

    this.#tableObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.#tagCollections[node.tagName]?.add(node);
          }
        });
        mutation.removedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.#tagCollections[node.tagName]?.remove(node);
          }
        });
      }
    });

    this.#tableObserver.observe(table, { childList: true, subtree: true });
  };

  /**
   * Extracts relevant elements from a slotted table and adds them to collections for tracking.
   * @param {HTMLTableElement} table - The slotted table to read elements from.
   * @private
   */
  #extractElementsFromSlottedTable(table) {
    const headers = table.querySelectorAll("th");
    const dataCells = table.querySelectorAll("td");
    const rows = table.querySelectorAll("tr");
    const theads = table.querySelectorAll("thead");
    const tbodys = table.querySelectorAll("tbody");

    [...headers, ...dataCells, ...rows, ...theads, ...tbodys, table].forEach((item) => this.#tagCollections[item.tagName]?.add(item));
  }

  /**
   * Binds the component to a slotted table element.
   * This includes extracting existing elements and observing for mutations.
   * @param {HTMLTableElement} table - The slotted table to bind to.
   * @private
   */
  #bindToSlottedTable(table) {

    this.#extractElementsFromSlottedTable(table);
    this.#observeTableMutations(table);
  }

  /**
   * Injects styles into the slotted table.
   * @param {HTMLTableElement} table - The slotted table to inject styles into.
   * @returns { void }
   * @private
   */
  #injectStylesIntoSlottedTable(table) {

    // Remove existing style tag to prevent duplicates
    const existingStyleTag = table.querySelector(".auro-table--injected-styles");
    if (existingStyleTag) return;

    // Create a new style tag with the desired styles
    const styleTag = document.createElement("style");
    styleTag.classList.add("auro-table--injected-styles");
    styleTag.textContent = AuroTable.#tableStylesTextContent;
    table.prepend(styleTag);
  }

  /**
   * Called when elements are projected into the default slot.
   * @returns { void }
   * @private
   */
  #handleExternalTableSlotChange() {

    // Get the slotted table element
    const slot = this.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true });
    const slottedTable = assignedNodes
      .filter(node => node.nodeType === Node.ELEMENT_NODE)
      .find(node => node.nodeName === "TABLE");

    if (slottedTable) {
      this.#bindToSlottedTable(slottedTable);
      this.#injectStylesIntoSlottedTable(slottedTable);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return this.columnHeaders?.length && this.componentData?.length

      ? html`
        <table ${ref(this.#tableTagRef)} class=${classMap(this.#classMapFor('TABLE'))}>
          <thead ${ref(this.#tableHeaderRef)}>
          </thead>
          <tbody ${ref(this.#tableBodyRef)}>
          </tbody>
        </table>
      `
      : html`
      <slot @slotchange=${this.#handleExternalTableSlotChange}></slot>
    `;
  }
}
