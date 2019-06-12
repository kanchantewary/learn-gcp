# Big Query
rdbms - schema on write
hive - schema on read
semantic equivalent of Hive
it is an enterprise data warehouse
fully managed, no server need to be deployed
can be accessed using console, rest APIs, client sdks
dataset = set of tables and views
tables must belong to a dataset. a dataset must belong to a project
tables would have row and columns, 
managed tables (native tables)
external hive tables
views
auto-detecting schema
data ingestion can be done through batch or streaming
data formats supported
csv, json, avro, cloud datastore backups
partitioning

## querying
interactive queries
- daily usage
- concurrent usage
views - logical, not materialized
authorized views - 1000 per dataset limit
row-level permissions
partitioned tables
- partitions are automatically (dynamic) created by bigquery, based pn pseudo column
- partition decorator
query plan explanation is available
- slots

