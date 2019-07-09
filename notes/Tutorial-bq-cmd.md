# BigQuery Command Line tutorial
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
-show metadata
```
bq show --format=prettyjson BQML_BIRTHWEIGHT

--add label
```
bq update --set_label department:shipping --set_label cost_center:logistics mydataset
```
