/* eslint-disable no-console */
/* eslint-disable no-debugger */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit/directives/class-map.js';

// Import touch detection lib
import styleCss from "./style-css.js";

// build the component class
export class AuroTable extends LitElement {
  constructor() {
    super();
    this.nowrap = false;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      columnHeaders:  { type: Array},
      componentData:  { type: Array },
      nowrap:         { type: Boolean }
    };
  }

  static get styles() {
    return [styleCss];
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

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-table")) {
  customElements.define("auro-table", AuroTable);
}
