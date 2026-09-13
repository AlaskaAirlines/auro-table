<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
Use the `auro-table` custom element to illustrate tabular data or content. The auro-table element is responsive, with a flexible layout and an easy-to-use JSON API. Alternatively, an HTML5 `<table>` may be used inside of the tag to create more dynamic tabular data.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-table>` element should be used in situations where users may:

* Show static or dynamic tabular data or content
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Generated Table

In order to have the component generate your table for you, you can pass data to the `columnHeaders` and `componentData` attributes to define your column headers and cell data respectively.

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

### Projected Table

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
 