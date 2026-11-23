<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Generated table

To have the component generate your table, set the `columnHeaders` and `componentData` attributes to define the column headers and the cell data.

### columnHeaders

This attribute takes an array of column headers to use, and accepts blank strings for empty columns. It does not support duplicate values, including empty strings, as each value is used as a key to project data into the table cells via the `componentData` attribute.

Example:
```javascript
["Column 1", "Column 2", "Column 3"]
```

### componentData

This attribute takes an array of objects, with each object representing a row with data defined for each cell by specifying the matching column-header value.

Example:
```javascript
[
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
]
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-attributes.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-attributes.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Projected table

For more dynamic content, put your own native `<table>` element inside the `auro-table` tag. The table is projected into the default slot and styled. The component adds the classes it needs to style your table, and it keeps styling columns and cells you add or remove later.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### `nowrap`

The `nowrap` attribute keeps table content on a single line instead of wrapping it.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/nowrap.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/nowrap.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
