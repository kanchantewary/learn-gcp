# Big Query

# Resources
https://www.oreilly.com/library/view/google-bigquery-the/9781492044451/
https://www.oreilly.com/library/view/google-bigquery-analytics/9781118824795/

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
- standard SQL is supported
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
