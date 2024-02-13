import { AuroTable } from './src/auro-table.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-table') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroTable {});
  }
}

export { registerComponent }
