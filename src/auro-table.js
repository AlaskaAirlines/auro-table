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
 * The AuroTable component provides two distinct functionalities for rendering and managing HTML tables:
 *
 * 1. **Data-driven Table Rendering**:
 *    - When the `columnHeaders` and `componentData` properties are set, the component generates a table structure internally.
 *    - Table headers are created from `columnHeaders`, and rows are populated from `componentData`.
 *
 * 2. **Slotted Table**:
 *    - When a native `<table>` element is projected into the component's default slot, AuroTable enhances it by:
 *      - Injecting design system styles directly into the table.
 *      - Tracking and managing child elements (TH, TD, TR, THEAD, TBODY, TABLE) using internal collections.
 *      - Observing DOM mutations to dynamically update collections and apply appropriate classes.
 *    - This mode allows developers to use their own table markup while benefiting from AuroTable's styling and child management features.
 * @slot - Default slot for projecting a native `<table>` element. Only available when `columnHeaders` and `componentData` are not set.
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
   * @property {Object} #elementClasses - Classes to be applied to different table elements referenced by tag name.
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
   * Handles the addition of new elements to the table.
   * Callback function for ChildItemService subscriptions contained in tagCollections.
   * @param {NodeList} addedNodes
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
   * Creates a ChildItemService for each relevant table tag to manage collections of those elements.
   * To create a collection for a new tag, add it to the tagCollections array.
   * @type {Object<string, ChildItemService>}
   * @private
   */
  #tagCollections = ['TH', 'TD', 'TR', 'THEAD', 'TBODY', 'TABLE']
    .reduce((collections, tag) => {
      collections[tag] = new ChildItemService({ callback: this.collectionUpdated });
      return collections;
    }, {});

  /**
   * Gets the class map based on this.#elementClasses for a given tag.
   * @param {HTMLElement.tagName} tag 
   * @returns {Object} - Class map for use with lit's classMap directive.
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

    this.nowrap = false;
  }

  static get properties() {
    return {

      /**
       * An array of strings representing the table's column headers.
       */
      columnHeaders: {
        type: Array,
        reflect: true,
      },

      /**
       * An array of objects representing the table's data rows.
       */
      componentData: {
        type: Array,
        reflect: true,
      },

      /**
       * When true, prevents the table from wrapping its content.
       */
      nowrap: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [styleCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-table"] - The name of element that you want to register to.
   *
   * @example
   * AuroTable.register("custom-table") // this will register this element to <custom-table/>
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
   * Extracts headers from the columnHeaders property and populates the table header.
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
   * Extracts rows from the componentData property and populates the table body.
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
   * @param {HTMLTableElement} table
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
   * @param {HTMLTableElement} table
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
   * @param {HTMLTableElement} table
   * @private
   */
  #bindToSlottedTable(table) {

    this.#extractElementsFromSlottedTable(table);
    this.#observeTableMutations(table);
  }

  /**
   * Injects styles into the slotted table.
   * @param {HTMLTableElement} table
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
   * Handles when elements are projected into the default slot
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
