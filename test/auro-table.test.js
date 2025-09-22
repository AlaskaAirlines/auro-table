/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { expect, fixture, html } from "@open-wc/testing";
import "../index.js";

describe("auro-table", () => {
  it("tests the table renders two rows with 3 columns", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key2": "value2", "key3": "value3" },
        { "key1": "value1a", "key2": "value2a", "key3": "value3a" }
      ]'></auro-table>
    `);

    const table = el.shadowRoot.querySelector("table");
    const rows = table.querySelectorAll("tr");
    const columns = rows[1].querySelectorAll("td");

    expect(columns.length).to.equal(3);
    expect(rows.length).to.equal(3);
  });

  it("tests the data with missing source data still renders", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key2": "value2", "key3": "value3" },
        { "key1": "value1a", "key3": "value3a" }
      ]'></auro-table>
    `);

    const table = el.shadowRoot.querySelector("table");
    const rows = table.querySelectorAll("tr");
    const columns = rows[1].querySelectorAll("td");
    const details = table.querySelectorAll("td");

    expect(columns.length).to.equal(3);
    expect(details.length).to.equal(6);
  });

  it("tests the data with first record having less columns", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key3": "value3" },
        { "key1": "value1a", "key2": "value2", "key3": "value3a" }
      ]'></auro-table>
    `);

    const table = el.shadowRoot.querySelector("table");
    const rows = table.querySelectorAll("tr");
    const columns = rows[1].querySelectorAll("td");
    const details = table.querySelectorAll("td");

    expect(columns.length).to.equal(3);
    expect(details.length).to.equal(6);
  });

  it("auro-table is accessible", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key2": "value2", "key3": "value3" },
        { "key1": "value1a", "key2": "value2a", "key3": "value3a" }
      ]'></auro-table>
    `);

    await expect(el).to.be.accessible();
  });

  it("does not crash for empty", async () => {
    const el = await fixture(html`
      <auro-table>
      </auro-table>
    `);

    expect(el).to.not.be.an("undefined");
  });

  it("auro-table custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-table"));

    await expect(el).to.be.true;
  });
});
