<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Table
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Use cases
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Examples

### Generated table

To have the component generate your table, set the `columnHeaders` and `componentData` attributes to define the column headers and the cell data.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-attributes.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-attributes.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Projected table

For more dynamic content, put your own native `<table>` element inside the `auro-table` tag. The table is projected into the default slot and styled. The component adds the classes it needs to style your table, and it keeps styling columns and cells you add or remove later.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic-slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 