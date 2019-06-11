# Data store
documented oriented storage in no-sql database
similar to mongodb
stores document data like xml, html,json, key-value structure
fast lookup on keys is most common use-case
query execution time depends on size of returned result set, and not the size of total dataset

## Compare with RDBMS
Table -> Kind
Row -> Entity
Column -> Property
Primary Key -> Key

joins are not supported
perfect index
updates are slow, lookups are fast
multi-tenancy - name spaces
## Consistency
strong
eventual
