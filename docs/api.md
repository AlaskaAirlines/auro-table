# Table API

| Attribute | Value type | Description |
|----|----|----|
| columnHeaders | array | An array of strings that are the keys to the column data. eg.`["Key1","Key2"]` |
| componentData | array | An array of Key/Value pair objects where they keys match an element in the columnHeader attribute. eg. `[{"Key1":"Value1", "Key2":"Value2"}` ] |
| nowrap | boolean | Sets content within the `<tbody>` to not wrap |
| `<slot>` | string | Component will display string if data is not loaded, or data description wanted for SEO
