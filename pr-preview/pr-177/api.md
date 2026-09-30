<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-table

The `auro-table` element supports two types of tables, either a generated table created by providing data for columns and rows via attributes, or by projecting your own custom table into the default slot of the component to be styled.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type    | Default | Description                                                  |
| ------------- | ------------- | --------- | ------- | ------- | ------------------------------------------------------------ |
| columnHeaders | columnHeaders |           | array   |         | An array of strings representing the table's column headers. |
| componentData | componentData |           | array   |         | An array of objects representing the table's data rows.      |
| nowrap        | nowrap        |           | boolean |         | When true, prevents the table from wrapping its content.     |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| (default) | Default slot for projecting a native `<table>` element. Only available when `columnHeaders` and `componentData` are not set. |
<!-- AURO-GENERATED-CONTENT:END -->

## Generated Table

In order to have the component generate your table for you, you can pass data to the `columnHeaders` and `componentData` attributes to define your column headers and cell data respectively.

### columnHeaders

This attribute takes an array of column headers to use, and accepts blank strings for empty columns. It does not support duplicate values, including empty strings, as each value is used as a key to project data into the table cells via the `componentData` attribute.

Example:
<pre class="language-javascript"><code class="language-javascript">["Column 1", "Column 2", "Column 3"]</code></pre>

### componentData

This attribute takes an array of objects, with each object representing a row with data defined for each cell by specifying the matching column-header value.

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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-attributes.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic-attributes.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table 
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
&gt;
&lt;/auro-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Projected Table

For more dynamic content, you can provide your own custom HTML5 `<table>` element inside the `auro-table` tag to be projected into the default slot and styled appropriately. The `auro-table` component will add any supporting classes needed for styling. Mutations to the table, such as adding and removing columns and cells, are supported.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-slot.html) -->
<!-- The below content is automatically added from ../apiExamples/basic-slot.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-slot.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic-slot.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;&lt;/th&gt;
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

## Property & Attribute Examples

### noWrap

The `nowrap` attribute, when applied, will prevent table content from word wrapping, i.e. all text content will be on a single line.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/nowrap.html) -->
<!-- The below content is automatically added from ../apiExamples/nowrap.html -->
<auro-table 
    nowrap
    columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
    componentData='[
      {"": "A very long task name that will not fit", "Monday": "5:00pm","Wednesday": "5:00pm" },
      {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
      {"": "Team meeting", "Wednesday": "10:00am" },
      {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
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
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"": "A very long task name that will not fit", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
&gt;&lt;/auro-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
​
:host {
  --ds-auro-table-alt-row-container-color: var(--ds-basic-color-surface-neutral-subtle, #{v.$ds-basic-color-surface-neutral-subtle});
  --ds-auro-table-border-color: var(--ds-basic-color-border-subtle, #{v.$ds-basic-color-border-subtle});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
