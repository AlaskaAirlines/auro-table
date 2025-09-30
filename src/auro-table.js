// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// build the component class
export class AuroTable extends LitElement {
  constructor() {
    super();

    this.nowrap = false;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      columnHeaders: {
        type: Array,
        reflect: true,
      },
      componentData: {
        type: Array,
        reflect: true,
      },
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
      this.extractHeaders();
    }

    if (changedProperties.has("componentData")) {
      this.extractRows();
    }
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-table");
  }

  /**
   * @private
   * @returns { void }
   */
  extractHeaders() {
    if (this.columnHeaders) {
      const headerRow = this.shadowRoot.querySelector("thead tr");

      headerRow.innerHTML = "";

      this.columnHeaders.forEach((header) => {
        const th = document.createElement("th");
        th.className = "heading-2xs";

        th.innerHTML = header;
        headerRow.appendChild(th);
      });
    }
  }

  /**
   * @private
   * @returns { void }
   */
  extractRows() {
    const tableBody = this.shadowRoot.querySelector("tbody");
    tableBody.innerHTML = "";

    if (this.componentData && this.columnHeaders) {
      this.componentData.forEach((row) => {
        const tr = document.createElement("tr");

        this.columnHeaders.forEach((column) => {
          const td = document.createElement("td");
          const content = row[column] || "";
          td.innerHTML = content;
          tr.appendChild(td);
        });

        tableBody.appendChild(tr);
      });
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      nowrap: this.nowrap,
    };

    return html`
      <table class="body-default">
        <thead><tr></tr></thead>
        <tbody class="${classMap(classes)}">
        </tbody>
      </table>
    `;
  }
}
