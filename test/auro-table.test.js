/* eslint-disable no-console */
/* eslint-disable lit/attribute-value-entities */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered.js";

// Global component tests
describe("auro-table", () => {

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

// Attribute table tests
describe("auro-table attributes", () => {
  it("does not render a slot when attributes are supplied", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key2": "value2", "key3": "value3" },
        { "key1": "value1a", "key2": "value2a", "key3": "value3a" }
      ]'></auro-table>
    `);

    const slot = el.shadowRoot.querySelector("slot");
    expect(slot).to.be.null;
  });

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

  it("has type theming classes correctly applied", async () => {
    const el = await fixture(html`
      <auro-table columnHeaders='["key1","key2","key3"]'
        componentData='[
        { "key1": "value1", "key3": "value3" },
        { "key1": "value1a", "key2": "value2", "key3": "value3a" }
      ]'></auro-table>
    `);

    const table = el.shadowRoot.querySelector("table");

    expect(tableHasCorrectClasses(table)).to.be.true;
  });
});

// Custom table tests
describe("auro-table custom table", () => {

  it("renders a slot when no attributes are supplied", async () => {
    const el = await fixture(html`<auro-table></auro-table>`);
    const slot = el.shadowRoot.querySelector("slot");

    expect(slot).to.exist;
  });

  it("does not render a table when no attributes are supplied", async () => {
    const el = await fixture(html`<auro-table></auro-table>`);
    const table = el.shadowRoot.querySelector("table");
    
    expect(table).to.be.null;
  });

  it("renders a custom table via slot", async () => {
    const el = await fixture(html`
      <auro-table>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Value 1</td>
            </tr>
          </tbody>
        </table>
      </auro-table>
    `);

    const slot = el.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true });
    const slottedTable = assignedNodes.find(node => node.nodeName === "TABLE");
    const slottedTableHeader = slottedTable.querySelectorAll("th");
    const slottedTableData = slottedTable.querySelectorAll("td");

    expect(slottedTable).to.exist;
    expect(slottedTableHeader.length).to.equal(1);
    expect(slottedTableData.length).to.equal(1);
  });

  it("has type theming classes correctly applied to a slotted table", async () => {
    const el = await fixture(html`
      <auro-table>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Value 1</td>
            </tr>
          </tbody>
        </table>
      </auro-table>
    `);

    const slot = el.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true });
    const slottedTable = assignedNodes.find(node => node.nodeName === "TABLE");

    expect(tableHasCorrectClasses(slottedTable)).to.be.true;
  });

  it("injects stylesheet into projected table", async () => {
    const el = await fixture(html`
      <auro-table>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Value 1</td>
            </tr>
          </tbody>
        </table>
      </auro-table>
    `);

    const slot = el.shadowRoot.querySelector("slot");
    const assignedNodes = slot.assignedNodes({ flatten: true });
    const slottedTable = assignedNodes.find(node => node.nodeName === "TABLE");

    const tableStyleTag = slottedTable.querySelector("style");
    await expect (tableStyleTag).to.exist;
  });



  it("does not crash for empty", async () => {
    const el = await fixture(html`
      <auro-table>
      </auro-table>
    `);

    expect(el).to.not.be.an("undefined");
  });

  it("does not inject duplicate style tags on repeated slot changes", async () => {

    const tableContent = `
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
          </tr>
        </tbody>
      </table>
    `
    // Initial render
    const el = await fixture(html`
      <auro-table>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Value 1</td>
            </tr>
          </tbody>
        </table>
      </auro-table>
    `);

    const slot = el.shadowRoot.querySelector("slot");
    let assignedNodes = slot.assignedNodes({ flatten: true });
    let slottedTable = assignedNodes.find(node => node.nodeName === "TABLE");

    // Check initial style tag count
    let styleTags = slottedTable.querySelectorAll("style");
    expect(styleTags.length).to.equal(1);

    // Simulate slot change by removing and re-adding the table
    el.innerHTML = "";
    await el.updateComplete;
    el.innerHTML = tableContent;
    await el.updateComplete;

    assignedNodes = slot.assignedNodes({ flatten: true });
    slottedTable = assignedNodes.find(node => node.nodeName === "TABLE");

    styleTags = slottedTable.querySelectorAll("style");
    expect(styleTags.length).to.equal(1);
  });
});


/**
 * Checks if the table has the correct classes applied.
 * @param {HTMLTableElement} table 
 * @returns {boolean} True if the table has the correct classes, false otherwise.
 */
const tableHasCorrectClasses = (table) => {

  // Check table for correct class
  if (!table.classList.contains("body-default")) return false;

  // Check each header for correct class
  const headers = Array.from(table.querySelectorAll("th") || []);
  const headersFail = headers.map(header => header.classList.contains("heading-2xs")).includes(false);
  if (headersFail) return false;

  // If all checks are passed, return true
  return true;
};
