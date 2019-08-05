# Big Query
## Usage
- highly scalable enterprise data warehouse

## Architecture
- https://panoply.io/data-warehouse-guide/bigquery-architecture/
- Dremel
- Colossus - Distributed Storage
- Borg - Compute
- Jupiter networking infrastructure
- Capacitor — the storage format in BigQuery
- BI engine
- build a data lake

## bq command line tool
- bq load - load data into a table, supported formats are avro, json, csv, orc, parquet, cloud datastore exports
- bq head - displays rows in a table
- bq query -  creates a query job that runs the supplied SQL query
- bq mk - creates a dataset, table, view, or transfer configuration.
- bq mkdef - 
- bq extract - used to export table data to Google Cloud Storage
- bq insert - insert rows of newline-delimited JSON formatted data using the streaming buffer
- bq update - updates a dataset, table, view, model, or transfer configuration.
- bq ls - lists objects in a collection. Objects can be jobs, datasets, tables, views. collection can be a dataset or a project.
- bq ls -j myproject
- bq partition - used to convert date-named tables (ending in [YYYYmmdd]) into partitioned tables.
- bq rm - deletes a dataset, table, view, model, or transfer configuration.
- bq show - displays information about an object.
- bq wait - waits some number of seconds for a job to finish.
- bq cancel - used to cancel jobs
- bq cp - used to copy tables
## Data types
## Bigquery data transfer service
## Geo-spatial analysis
## analytic functions
## user defined functions
## machine learning
# Comparison with other products
- major other products are AWS redshift, snowflake (has strategic partnership with gcp), Azure SQL datawarehouse, AWS Athena
- https://www.analyticsindiamag.com/redshift-vs-bigquery-what-are-the-factors-to-consider-before-choosing-a-data-warehouse/
- https://blog.panoply.io/a-full-comparison-of-redshift-and-bigquery
- https://www.mindtree.com/blog/performance-comparison-aws-athena-and-google-bigquery
- https://fivetran.com/blog/warehouse-benchmark
# Resources
- https://www.oreilly.com/library/view/google-bigquery-the/9781492044451/
- https://www.oreilly.com/library/view/google-bigquery-analytics/9781118824795/
- [SQL reference] (https://cloud.google.com/bigquery/docs/reference/standard-sql/)
- https://medium.com/@hoffa/the-top-weekend-languages-according-to-githubs-code-6022ea2e33e8#.8oj2rp804
- https://youtu.be/KL_i5XZIaJg
- https://code.google.com/archive/p/google-bigquery-tools/wikis/GettingStartedwithBigQueryViaTheCommandLine.wiki
- https://cloud.google.com/blog/products/gcp/inside-capacitor-bigquerys-next-generation-columnar-storage-format
- https://cloud.google.com/solutions/build-a-data-lake-on-gcp
- https://cloud.google.com/blog/products/gcp/bigquery-under-the-hood
## quick notes
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
- pay for usage only, storage cost is similar to cloud storage. other benefits are durability, immutable audit logs, 
- can be shared across organisation silos, hence collaboration becomes much easier
- bigquery storage is columnar, each column is stored in a separate, compressed, encrypted file that is replicated 3+ times. 
- TABLE_DATE_RANGE, useful when multiple tables having similar pattern is used inside a query
- bigquery.samples

Bigquery architecture
Capacitor files – distributed storage, durable, encrypted at rest	
Storage sets – grouped set of capacitor files
All or nothing – while loading data
Snapshot isolation
Encryption – PII, tink library
New features
Persistent UDF
scripting


## datasets
- Colocate your BigQuery dataset and your external data source
- Moving BigQuery data between locations

## tables
tables with native storage, tables with external storage, views
partitioned tables
- partitions are automatically (dynamic) created by bigquery, based pn pseudo column
- partition decorator

## querying
interactive queries
- daily usage
- concurrent usage
views - logical, not materialized
authorized views - 1000 per dataset limit
row-level permissions
query plan explanation is available
- slots
- standard SQL is supported
  - INT64 (8 BYTES)
  - NUMERIC (16 BYTES) - Decimal values with 38 decimal digits of precision and 9 decimal digits of scale.
  - FLOAT64 (8 BYTES)
  - BOOL, STRING (Variable-length character (Unicode) data, UTF-8)
  - BYTES (variable length binary data)
  - DATE
  - DATETIME
  - TIME
  - TIMESTAMP - timezone can be specified, contrary to datetime. When a time zone is not explicitly specified, the default time zone, UTC. format is continent/[region/]city e.g. America/Argentina/Buenos_Aires
  - ARRAY
  - STRUCT
  - GEOGRAPHY
- [arrays](https://cloud.google.com/bigquery/docs/reference/standard-sql/arrays)
  - ordered list consisting of zero or more values of the same data type
  - You can construct arrays of simple data types, such as INT64, and complex data types, such as STRUCTs.
  - array of arrays is not supported
  - use following to construct arrays:
  ```
  SELECT [1, 2, 3] as numbers;
  SELECT ["apple", "pear", "orange"] as fruit;
  SELECT [true, false, true] as booleans;
  SELECT ARRAY<FLOAT64>[1, 2, 3] as floats;
  SELECT GENERATE_ARRAY(11, 33, 2) AS odds;
  SELECT GENERATE_ARRAY(21, 14, -1) AS countdown;
  SELECT GENERATE_DATE_ARRAY('2017-11-21', '2017-12-31', INTERVAL 1 WEEK) AS date_array;
  # create array from subquery
  WITH sequences AS
  (SELECT [0, 1, 1, 2, 3, 5] AS some_numbers
  UNION ALL SELECT [2, 4, 8, 16, 32] AS some_numbers
  UNION ALL SELECT [5, 10] AS some_numbers)
  SELECT some_numbers,
  ARRAY(SELECT x * 2
        FROM UNNEST(some_numbers) AS x) AS doubled
  FROM sequences;
  # create array from a set of rows using ARRAY_AGG:
  WITH fruits AS
  (SELECT "apple" AS fruit
   UNION ALL SELECT "pear" AS fruit
   UNION ALL SELECT "banana" AS fruit)
  SELECT ARRAY_AGG(fruit ORDER BY fruit) AS fruit_basket
  FROM fruits;
  # using array_concat 
  WITH aggregate_example AS
  (SELECT [1,2] AS numbers
   UNION ALL SELECT [3,4] AS numbers
   UNION ALL SELECT [5, 6] AS numbers)
  SELECT ARRAY_CONCAT_AGG(numbers) AS count_to_six_agg
  FROM aggregate_example;
  # concatenate string type array:
  WITH greetings AS
  (SELECT ["Hello", "World"] AS greeting)
  SELECT ARRAY_TO_STRING(greeting, " ") AS greetings
  FROM greetings;
  ```
  - access array elements
    - OFFSET - zero based indexes
    - ORDINAL - one based indexes
    - ARRAY_LENGTH()
    - Flattening arrays - use UNNEST
- Notes from documentation
```
# If you begin a function with the SAFE. prefix, it will return NULL instead of an error.
SAFE.function_name()
SELECT SAFE.SUBSTR('foo', 0, -2) AS safe_output UNION ALL
SELECT SAFE.SUBSTR('bar', 0, 2) AS safe_output;

# create a table
bq load --source_format=NEWLINE_DELIMITED_JSON $DEVSHELL_PROJECT_ID:cpb101_flight_data.flights_2014 gs://cloud-training/CPB200/BQ/lab4/domestic_2014_flights_*.json ./schema_flight_performance.json
# list tables
bq ls $DEVSHELL_PROJECT_ID:cpb101_flight_data
# export from a table to gcp bucket
bq extract cpb101_flight_data.AIRPORTS gs://$BUCKET/bq/airports2.csv
```

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

# BigQuery ML
- enables users to create and execute machine learning models in BigQuery using standard SQL queries
- available from web UI, bq command line, rest API, external tools e.g. jupyter or BI platforms
- supported model types
  - linear regression for forecasting
  - Binary logistic regression for classification
  - Multiclass logistic regression for classification
  - K-means clustering for data segmentation
 - BigQuery ML models are stored in BigQuery datasets like tables and views. When you create and use models in BigQuery ML, your charges are based on how much data is used to train a model and on the queries you run against the data.
 - common commands
  - (CREATE MODEL)[https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create]
  - EVALUATE
  - PREDICT

# use with google sheets
https://cloud.google.com/blog/products/g-suite/connecting-bigquery-and-google-sheets-to-help-with-hefty-data-analysis


## Best Practices
- Controlling Costs- Queries are billed according to the number of bytes read. 
  - Query only the columns that you need, avoid select \*. Or, SELECT * EXCEPT to exclude one or more columns from the results.
  - Applying a LIMIT clause to a SELECT * query does not affect the amount of data read. You are billed for reading all bytes in the entire table, and the query counts against your free tier quota.
  - If you are experimenting with or exploring your data, you can use table preview options to view data for free and without affecting quotas. In the CLI, use the bq head command and specify the number of rows to preview.
  - Price your queries before running them, using The query validator in the GCP Console or the classic web UI or --dry_run flag in the CLI
  - You can limit the number of bytes billed for a query using the maximum bytes billed setting. When you set maximum bytes billed, if the query will read bytes beyond the limit, the query fails without incurring a charge. In the CLI, use bq query command with the --maximum_bytes_billed flag.
  - If possible, partition your BigQuery tables by date. Partitioning your tables allows you to query relevant subsets of data which improves performance and reduces costs.
  - If possible, materialize your query results in stages. If you create a large, multi-stage query, each time you run it, BigQuery reads all the data that is required by the query. You are billed for all the data that is read each time the query is run. Instead, break your query into stages where each stage materializes the query results by writing them to a destination table. Querying the smaller destination table reduces the amount of data that is read and lowers costs. The cost of storing the materialized results is much less than the cost of processing large amounts of data.
  - Keeping large result sets in BigQuery storage has a cost. If you don't need permanent access to the results, use the default table expiration to automatically delete the data for you.
  - There is no charge for loading data into BigQuery. There is a charge, however, for streaming data into BigQuery. Unless your data must be immediately available, load your data rather than streaming it.
- optimize performance
  - To optimize the performance of BigQuery queries, it helps to understand the key drivers of query speed. The time taken for a query to complete depends on how much data is read from storage, how that data is organized, how many stages your query requires, how parallelizable those stages are, how much data is processed at each stage, and how computationally expensive each of the stages is.
  - 
# Data Transfer
- https://cloud.google.com/bigquery/docs/transfer-service-overview

# Google Cloud Client library
The Google Cloud Client Library for BigQuery is the recommended option for accessing BigQuery programmatically.
pip install google-cloud-bigquery
- https://github.com/GoogleCloudPlatform/bigquery-oreilly-book/blob/master/05_devel/bigquery_cloud_client.ipynb
