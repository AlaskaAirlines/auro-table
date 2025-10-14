# auro-table

### Properties & Attributes

| Properties    | Attributes    | Type    | Default | Description                                                  |
| ------------- | ------------- | ------- | ------- | ------------------------------------------------------------ |
| columnHeaders | columnHeaders | array   |         | An array of strings representing the table's column headers. |
| componentData | componentData | array   |         | An array of objects representing the table's data rows.      |
| nowrap        | nowrap        | boolean | false   | When true, prevents the table from wrapping its content.     |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| (default) | Default slot for projecting a native `<table>` element. Only available when `columnHeaders` and `componentData` are not set. |