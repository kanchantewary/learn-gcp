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

# coursera/qwiklabs
- use console to query a public dataset (usa names)
- create a dataset, create a empty table and/or upload a local file into the table (baby names). note that file format should be specified
- supported file types: csv, avro, parquet, json, ORC
- supported table types: native and external
- write modes - write if empty/overwrite/append
- error threshold can be defined in advanced options
- dataset can be shared across (define IAM roles)
- bigquery can be accessed from UI(console), command line, 3rd party tools or REST API calls
- standard roles: 
  - owner
  - editor
  - viewer
  - bigquery admin
  - bigquery data owner
  - bigquery data editor
  - bigquery user

- how does bigquery work: fast sql engine (bigquery query service) +storage service (bigquery storage service)
- project>dataset>tables
- bigquery connectors to other gcp services e.g. dataproc, dataflow

# BQML
https://cloud.google.com/bigquery-ml/docs/bigqueryml-intro

# use with google sheets
https://cloud.google.com/blog/products/g-suite/connecting-bigquery-and-google-sheets-to-help-with-hefty-data-analysis
