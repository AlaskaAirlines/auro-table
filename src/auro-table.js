// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import styleCss from "./style-css.js";
import tokensCss from "./tokens-css.js";

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
      columnHeaders:  { type: Array },
      componentData:  { type: Array },
      nowrap:         { type: Boolean }
    };
  }

  static get styles() {
    return [
      styleCss,
      tokensCss
    ];
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

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-table');
  }

  /**
   * @private
   * @param { Array } columns - Titles for column headers.
   * @param { Array } data - TD content.
   * @returns { void }
   */
  extractRows(columns, data) {
    const rows = [];

    data.forEach((index) => {
      const row = [];

      columns.forEach((column) => {
        row.push(index[column]);
      });

      rows.push(row);
    });

    return rows;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'nowrap': this.nowrap,
    };

    if (this.columnHeaders && this.componentData) {
      return html`
        <table>
          <thead>
            <tr>
              ${this.columnHeaders.map((header) => html`
                <th>${header}</th>
              `)}
            </tr>
          </thead>
          <tbody class="${classMap(classes)}">
            ${this.extractRows(this.columnHeaders, this.componentData).map((row) => html`
              <tr>
                ${row.map((data) => html`
                  <td>${data}</td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      `;
    }

    return html``;
  }
}
