<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component example code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Table

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
Shows tabular data in a table that follows Auro styling. Generate the table from data you provide, or put your own native `<table>` inside `auro-table`.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
Use `auro-table` to show tabular data, such as a schedule or a comparison, either from data you provide or from your own native `<table>`.
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-table/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-table/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-table?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-table)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-table?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

<pre class="language-shell"><code class="language-shell">$ npm i @aurodesignsystem/auro-table</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Import the component in each project that uses `<auro-table>`.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

<pre class="language-js"><code class="language-js">import "@aurodesignsystem/auro-table";</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
If your project can't process JS assets, use the pre-processed assets. Legacy browsers, such as IE11, aren't supported.

<pre class="language-html"><code class="language-html">&lt;script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-table@latest/+esm"&gt;&lt;/script&gt;</code></pre>

<!-- AURO-GENERATED-CONTENT:END -->

## Basic example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-table 
  columnHeaders='["Activity","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]' 
  componentData='[
    {"Activity": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"Activity": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"Activity": "Team meeting", "Wednesday": "10:00am" },
    {"Activity": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'
&gt;
&lt;/auro-table&gt;
&#10;&lt;auro-table&gt;
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

## Custom component registration for version management

Every Auro component has two key parts: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

Installing the component as described in the Install section imports the class and registers the component globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), register the class manually under a custom element name to avoid conflicts.

To do this, import only the component class and call the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

<pre class="language-js"><code class="language-js">// Import the class only
import { AuroTable } from '@aurodesignsystem/auro-table/class';
// Register with a custom name if desired
AuroTable.register('custom-table');</code></pre>

This creates a new custom element, `<custom-table>`, that behaves like `<auro-table>`, so both can coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
<!-- The below content is automatically added from ./apiExamples/custom.html -->
<custom-table>
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
</custom-table>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

<pre class="language-html"><code class="language-html">&lt;custom-table&gt;
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
&lt;/custom-table&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
