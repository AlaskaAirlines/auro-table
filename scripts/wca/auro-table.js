
import { AuroTable } from '../../src/auro-table.js';

/**
 */
class AuroTableWCA extends AuroTable {}

if (!customElements.get("auro-table")) {
  customElements.define("auro-table", AuroTableWCA);
}
