import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-table.js';

describe('auro-table', () => {
  it('sets the CSS class on auro-table > div element', async () => {
    const el = await fixture(html`
      <auro-table cssclass="testClass"></auro-table>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-table is accessible', async () => {
    const el = await fixture(html`
      <auro-table cssclass="testClass"></auro-table>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-table custom element is defined', async () => {
    const el = await !!customElements.get("auro-table");

    await expect(el).to.be.true;
  });
});
