# BigQuery Command Line tutorial
- Reference
https://codelabs.developers.google.com/

-log in
```
gcloud auth list
gcloud config set project <PROJECT_ID>
```
- creating a dataset
```
bq --location=US mk -d \
--default_table_expiration 3600 \
--description "This is my dataset." \
mydataset
```
- listing a dataset
```
bq ls --format=pretty
bq ls -a
bq ls --format=prettyjson --project_id chromatic-being-242810
```
- show metadata
```
bq show --format=prettyjson BQML_BIRTHWEIGHT
```
- add label
```
bq update --set_label department:shipping --set_label cost_center:logistics mydataset
```
- create a table
```
bq mk -t --expiration 3600 --description "This is my table" --label organization:development mydataset.mytable qtr:STRING,sales:FLOAT,year:STRING
#create a table using schema stored in a local json file
bq mk --table --expiration 3600 --description "This is my table" --label organization:development myotherproject:mydataset.mytable /tmp/myschema.json
#create table from a query result
bq query \
--destination_table mydataset.mytable \
--use_legacy_sql=false \
'SELECT
  name,
  number
FROM
  `bigquery-public-data`.usa_names.usa_1910_current
WHERE
  gender = "M"
ORDER BY
  number DESC'
  ```
  - loading a csv file
  ```
  bq load \
    --source_format=CSV \
    --skip_leading_rows=1 \
    bq_load_codelab.customer_transactions \
    ./customer_transactions.csv \
    id:string,zip:string,ttime:timestamp,amount:numeric,fdbk:float,sku:string
  ```
  - view table properties
  ```
  bq show bq_load_codelab.customer_transactions
  ```
  - query a table
  ```
  bq query --nouse_legacy_sql '
SELECT SUM(c.amount) AS amount_total, z.state_code AS state_code
FROM `bq_load_codelab.customer_transactions` c
JOIN `bigquery-public-data.utility_us.zipcode_area` z
ON c.zip = z.zipcode
GROUP BY state_code
'
```
- delete a dataset
```
bq rm -r bq_load_codelab
```
  
