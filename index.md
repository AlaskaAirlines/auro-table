<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
Shows tabular data in a table that follows Auro styling. Generate the table from data you provide, or put your own native `<table>` inside `auro-table`.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `auro-table` to show tabular data, such as a schedule or a comparison, either from data you provide or from your own native `<table>`.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Generated table

To have the component generate your table, set the `columnHeaders` and `componentData` attributes to define the column headers and the cell data.

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

### Projected table

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
 