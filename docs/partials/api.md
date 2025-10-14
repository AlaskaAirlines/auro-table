<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

The `auro-table` component supports two methods of table generation, either via data provided by attributes, or by projecting your own custom table into the component to be styled.

### Attribute Data Table

In order to have the component generate your table for you, you can pass data to the `column-headers` and `component-data` attributes to define your column headers and cell data respectively.

#### Attribute Definitions

##### `column-headers`
This attribute takes an array of column headers to use, and accepts blank strings for empty columns. It does not support duplicate values, including empty strings, as each value is used as a key to project data into the table cells via the `component-data` attribute.

Example:
```javascript
["Column 1", "Column 2", "Column 3"]
```

##### `component-data`
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
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic_attributes.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic_attributes.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Custom Table

Alternatively, you can simply provide your own table into the `auro-table` tag and fill it with whatever content you like and it will be styled appropriately.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic_slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic_slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### noWrap

The `nowrap` attribute, when applied, will prevent table content from word wrapping, i.e. all text content will be on a single line.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/nowrap.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/nowrap.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
