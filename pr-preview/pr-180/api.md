<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-table

Shows tabular data, either as a table generated from data you provide or as your own native `<table>` styled to match Auro.

## Key capabilities
- **Generated table**: Set `columnHeaders` and `componentData` to build the table from data.
- **Projected table**: Put a native `<table>` in the default slot to have it styled, including rows and cells you add or remove later.
- **Single-line content**: Set `nowrap` to keep table content from wrapping.

## Example
<pre class="language-html"><code class="language-html">&lt;auro-table columnHeaders='["Day","Class"]' componentData='[{"Day":"Monday","Class":"Dance"}]'&gt;&lt;/auro-table&gt;</code></pre>

### Properties and attributes

| Properties    | Attributes    | Modifiers | Type                     | Default | Description                                                                                                                                                                                                                                                    |
| ------------- | ------------- | --------- | ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| columnHeaders | columnheaders |           | string[]                 |         | Sets the column headers for a generated table, as an array of strings. Each header must be unique, including blank ones, because it's also the key that matches cells in `componentData`. The table is generated only when `componentData` is also set.        |
| componentData | componentdata |           | Record<string, string>[] |         | Sets the rows of a generated table, as an array of objects. Each object is one row, with `columnHeaders` values as keys and the cell content as values, and a missing key leaves its cell empty. The table is generated only when `columnHeaders` is also set. |
| nowrap        | nowrap        |           | boolean                  |         | Keeps table content on a single line instead of wrapping it. Applies to both generated and projected tables.                                                                                                                                                   |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| (default) | Holds your own native `<table>`, which the component styles. Shown only when `columnHeaders` and `componentData` aren't both set to non-empty arrays. |

### CSS custom properties

| Name                                    | Description                                 |
| --------------------------------------- | ------------------------------------------- |
| --ds-auro-table-alt-row-container-color | Background color of the even-numbered rows. |
| --ds-auro-table-border-color            | Color of the line below the table header.   |
<!-- AURO-GENERATED-CONTENT:END -->

## Generated table

To have the component generate your table, set the `columnHeaders` and `componentData` attributes to define the column headers and the cell data.

### `columnHeaders`

Sets the column headers, as an array of strings. Blank strings are allowed for empty columns, but duplicates aren't, including blank ones, because each header is also the key that matches cells in `componentData`.

Example:
<pre class="language-javascript"><code class="language-javascript">["Column 1", "Column 2", "Column 3"]</code></pre>

### `componentData`

Sets the rows, as an array of objects. Each object is one row, with a key for each column header and the cell content as its value. A missing key leaves its cell empty.

Example:
<pre class="language-javascript"><code class="language-javascript">[
  {
    "Column 1": "Column 1 Row 1 Value",
    "Column 2": "Column 2 Row 1 Value",
    "Column 3": "Column 3 Row 1 Value"
  },
  {
    "Column 1": "Column 1 Row 2 Value",
    "Column 2": "Column 2 Row 2 Value",
    "Column 3": "Column 3 Row 2 Value"
  }
]</code></pre>

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-attributes.html) -->
<!-- The below content is automatically added from ../apiExamples/basic-attributes.html -->
<auro-table 
    columnHeaders='["Activity","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
    componentData='[
      {"Activity": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
      {"Activity": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
      {"Activity": "Team meeting", "Wednesday": "10:00am" },
      {"Activity": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]'
  >
</auro-table>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-attributes.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic-attributes.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table 
  columnHeaders='["Activity","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"Activity": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"Activity": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"Activity": "Team meeting", "Wednesday": "10:00am" },
    {"Activity": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
&gt;
&lt;/auro-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Projected table

For more dynamic content, put your own native `<table>` element inside the `auro-table` tag. The table is projected into the default slot and styled. The component adds the classes it needs to style your table, and it keeps styling columns and cells you add or remove later.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-slot.html) -->
<!-- The below content is automatically added from ../apiExamples/basic-slot.html -->
<auro-table>
<table>
<thead>
<tr>
<th>Activity</th>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-slot.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic-slot.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Activity&lt;/th&gt;
        &lt;th&gt;Monday&lt;/th&gt;
        &lt;th&gt;Tuesday&lt;/th&gt;
        &lt;th&gt;Wednesday&lt;/th&gt;
        &lt;th&gt;Thursday&lt;/th&gt;
        &lt;th&gt;Friday&lt;/th&gt;
        &lt;th&gt;Saturday&lt;/th&gt;
        &lt;th&gt;Sunday&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dance class&lt;/td&gt;
        &lt;td&gt;5:00pm&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;5:00pm&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Night classes&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;7:00pm&lt;/td&gt;
        &lt;td&gt;7:00pm&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Team meeting&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;10:00am&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Morning workout&lt;/td&gt;
        &lt;td&gt;8:00am&lt;/td&gt;
        &lt;td&gt;8:00am&lt;/td&gt;
        &lt;td&gt;8:00am&lt;/td&gt;
        &lt;td&gt;8:00am&lt;/td&gt;
        &lt;td&gt;8:00am&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/auro-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### `nowrap`

The `nowrap` attribute keeps table content on a single line instead of wrapping it.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/nowrap.html) -->
<!-- The below content is automatically added from ../apiExamples/nowrap.html -->
<auro-table 
    nowrap
    columnHeaders='["Activity","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
    componentData='[
      {"Activity": "A very long task name that stays on one line", "Monday": "5:00pm","Wednesday": "5:00pm" },
      {"Activity": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
      {"Activity": "Team meeting", "Wednesday": "10:00am" },
      {"Activity": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
    ]'
  ></auro-table>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/nowrap.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/nowrap.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table 
  nowrap
  columnHeaders='["Activity","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"Activity": "A very long task name that stays on one line", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"Activity": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"Activity": "Team meeting", "Wednesday": "10:00am" },
    {"Activity": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
&gt;&lt;/auro-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-table-alt-row-container-color: var(--ds-basic-color-surface-neutral-subtle, #{v.$ds-basic-color-surface-neutral-subtle});
  --ds-auro-table-border-color: var(--ds-basic-color-border-subtle, #{v.$ds-basic-color-border-subtle});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
