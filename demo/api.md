<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-table

## Properties

| Property        | Attribute       | Type      | Default |
|-----------------|-----------------|-----------|---------|
| [columnHeaders](#columnHeaders) | `columnHeaders` | `array`   |         |
| [componentData](#componentData) | `componentData` | `array`   |         |
| [nowrap](#nowrap)        | `nowrap`        | `boolean` | false   |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Attribute Examples

#### columnHeaders

The `columnHeaders` attribute is used to provide the column header content for the table.

</auro-accordion>

#### componentData

The `componentData` attribute is used to provide the table TD content for the table.

#### noWrap

The `nowrap` attribute, when applied, will prevent table content from word wrapping, i.e. all text content will be on a single line.

</auro-accordion>

## Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska";

:host {
  --ds-auro-table-alt-row-container-color: var(--ds-advanced-color-shared-background-muted, #{$ds-advanced-color-shared-background-muted});
  --ds-auro-table-border-color: var(--ds-basic-color-border-subtle, #{$ds-basic-color-border-subtle});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
