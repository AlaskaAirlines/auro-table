# auro-table

Shows tabular data, either as a table generated from data you provide or as your own native `<table>` styled to match Auro.

## Key capabilities
- **Generated table**: Set `columnHeaders` and `componentData` to build the table from data.
- **Projected table**: Put a native `<table>` in the default slot to have it styled, including rows and cells you add or remove later.
- **Single-line content**: Set `nowrap` to keep table content from wrapping.

## Example
```html
<auro-table columnHeaders='["Day","Class"]' componentData='[{"Day":"Monday","Class":"Dance"}]'></auro-table>
```

### Properties and attributes

| Properties    | Attributes    | Modifiers | Type                     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | ------------- | --------- | ------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| columnHeaders | columnheaders |           | string[]                 |         | Sets the column headers for a generated table, as an array of strings. Each header must be unique, including blank ones, because it's also the key that matches cells in `componentData`. The table is generated only when `componentData` is also set. Security: headers are inserted as HTML, without sanitization, so don't pass untrusted input, because it can run code in your page.            |
| componentData | componentdata |           | Record<string, string>[] |         | Sets the rows of a generated table, as an array of objects. Each object is one row, with `columnHeaders` values as keys and the cell content as values, and a missing key leaves its cell empty. The table is generated only when `columnHeaders` is also set. Security: cell content is inserted as HTML, without sanitization, so don't pass untrusted input, because it can run code in your page. |
| nowrap        | nowrap        |           | boolean                  |         | Keeps table content on a single line instead of wrapping it. Applies to both generated and projected tables.                                                                                                                                                                                                                                                                                          |

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