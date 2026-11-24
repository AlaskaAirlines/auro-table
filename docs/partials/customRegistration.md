```js
// Import the class only
import { AuroTable } from '@aurodesignsystem/auro-table/class';
// Register with a custom name if desired
AuroTable.register('custom-table');
```

This creates a new custom element, `<custom-table>`, that behaves like `<auro-table>`, so both can coexist on the same page without interfering with each other.