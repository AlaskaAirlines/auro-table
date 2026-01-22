# auro-table


The `auro-table` element supports two types of tables, either a generated table created by providing data for columns and rows via attributes, or by projecting your own custom table into the default slot of the component to be styled.

### Properties & Attributes

| Properties    | Attributes    | Modifiers | Type    | Default | Description                                                  |
| ------------- | ------------- | --------- | ------- | ------- | ------------------------------------------------------------ |
| columnHeaders | columnHeaders |           | array   |         | An array of strings representing the table's column headers. |
| componentData | componentData |           | array   |         | An array of objects representing the table's data rows.      |
| nowrap        | nowrap        |           | boolean |         | When true, prevents the table from wrapping its content.     |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| (default) | Default slot for projecting a native `<table>` element. Only available when `columnHeaders` and `componentData` are not set. |