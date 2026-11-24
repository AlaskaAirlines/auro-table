<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Generated table

To have the component generate your table, set the `columnHeaders` and `componentData` attributes to define the column headers and the cell data.

### `columnHeaders`

Sets the column headers, as an array of strings. Blank strings are allowed for empty columns, but duplicates aren't, including blank ones, because each header is also the key that matches cells in `componentData`.

Security: headers are inserted as HTML, without sanitization. Don't pass untrusted input, because it can run code in your page.

Example:
```javascript
["Column 1", "Column 2", "Column 3"]
```

### `componentData`

Sets the rows, as an array of objects. Each object is one row, with a key for each column header and the cell content as its value. A missing key leaves its cell empty.

Security: cell content is inserted as HTML, without sanitization. Don't pass untrusted input, because it can run code in your page.

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
