<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `../docs/partials/index.md`
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
Use the `auro-table` custom element to illustrate non-dynamic tabular data. The auro-table element is responsive, with a flexible layout and an easy-to-use JSON API.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-table>` element should be used in situations where users may:

* Show static tabular data
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
  <auro-table
    columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]'
    componentData='[
    {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]'>My morning schedule
  </auro-table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

```html
<auro-table
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]'
  componentData='[
  {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
  {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
  {"": "Team meeting", "Wednesday": "10:00am" },
  {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'>My morning schedule
</auro-table>
```
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

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-table` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroTable.register(name)` method and pass in a unique name.

```js
import { AuroTable } from '@aurodesignsystem/auro-table/class'

AuroTable.register('custom-table');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-table` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customTable.html) -->
  <!-- The below content is automatically added from ../apiExamples/customTable.html -->
  <custom-table
    columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]'
    componentData='[
    {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]'>My morning schedule
  </custom-table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customTable.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/customTable.html -->

```html
<custom-table
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]'
  componentData='[
  {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
  {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
  {"": "Team meeting", "Wednesday": "10:00am" },
  {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'>My morning schedule
</custom-table>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
