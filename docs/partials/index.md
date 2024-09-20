<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## React and Svelte support

```js
const headers=JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]);
const data=JSON.stringify([
  {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
  {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
  {"": "Team meeting", "Wednesday": "10:00am" },
  {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
])

<auro-table nowrap columnHeaders={headers} componentData={data}>Default text</auro-table>
```

Having a closing statement about your example helps to really complete the thought with your reader.

## WC Style Sheets support

For use cases where the general design of the Auro Table is needed, but the component is unseable, please use the [.auro_table](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_table) styles from the Web Core Style Sheets library.

```html
<table class="auro_table">
  <thead>
    <tr>
      <th>The table header</th>
      <th>The table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
  </tbody>
</table>
```

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-table` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import { AuroTable } from './src/auro-table.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-table', AuroTable);
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-table` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customTable.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customTable.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
