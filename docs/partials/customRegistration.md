```js
// Import the class only
import { AuroTable } from '@aurodesignsystem/auro-table/class';

// Register with a custom name if desired
AuroTable.register('custom-table');
```

This will create a new custom element `<custom-table>` that behaves exactly like `<auro-table>`, allowing both to coexist on the same page without interfering with each other.