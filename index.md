<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `../docs/partials/index.md`
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
Use the `auro-table` custom element to illustrate tabular data or content. The auro-table element is responsive, with a flexible layout and an easy-to-use JSON API.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-table>` element should be used in situations where users may:

* Show static or dynamic tabular data or content
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

The `auro-table` component supports two methods of table generation, either via data provided by attributes, or by projecting your own custom table into the component to be styled.

### Attribute Data Table

In order to have the component generate your table for you, you can pass data to the `columnHeaders` and `componentData` attributes to define your column headers and cell data respectively.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic_attributes.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic_attributes.html -->
  <auro-table 
    columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
    componentData='[
      {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
      {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
      {"": "Team meeting", "Wednesday": "10:00am" },
      {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]'
  >
  </auro-table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic_attributes.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic_attributes.html -->

```html
<auro-table 
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
>
</auro-table>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Custom Table

Alternatively, you can simply provide your own table inside the `auro-table` tag and fill it with whatever content you like and it will be styled appropriately.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic_slot.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic_slot.html -->
  <auro-table>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dance class</td>
          <td>5:00pm</td>
          <td></td>
          <td>5:00pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Night classes</td>
          <td></td>
          <td></td>
          <td></td>
          <td>7:00pm</td>
          <td>7:00pm</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Team meeting</td>
          <td></td>
          <td></td>
          <td>10:00am</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Morning workout</td>
          <td>8:00am</td>
          <td>8:00am</td>
          <td>8:00am</td>
          <td>8:00am</td>
          <td>8:00am</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </auro-table>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic_slot.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic_slot.html -->

```html
<auro-table>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dance class</td>
        <td>5:00pm</td>
        <td></td>
        <td>5:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Night classes</td>
        <td></td>
        <td></td>
        <td></td>
        <td>7:00pm</td>
        <td>7:00pm</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Team meeting</td>
        <td></td>
        <td></td>
        <td>10:00am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Morning workout</td>
        <td>8:00am</td>
        <td>8:00am</td>
        <td>8:00am</td>
        <td>8:00am</td>
        <td>8:00am</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
    ]'>
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
  ]'>
</custom-table>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
