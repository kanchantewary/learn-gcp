# Create a Streaming Data Pipeline for a Real-Time Dashboard with Cloud Dataflow
- Following two APIs should be enabled
  - Google Cloud Pub/Sub API
  - Dataflow API
- Create a Cloud Pub/Sub Topic
- create a new BigQuery dataset
```
bq mk taxirides
bq mk \
--time_partitioning_field timestamp \
--schema ride_id:string,point_idx:integer,latitude:float,longitude:float,\
timestamp:timestamp,meter_reading:float,meter_increment:float,ride_status:string,\
passenger_count:integer -t taxirides.realtime
```
- Create a Cloud Storage Bucket
- Set up a Cloud Dataflow Pipeline
  - pip install --upgrade virtualenv
  - virtualenv env
  - source env/bin/activate
  - pip install --quiet apache-beam[gcp]
  - gsutil mb \
    gs://qwiklabs-gcp-08b73228864a743b
  - python -m \
    apache_beam.examples.wordcount \
    --project \
    qwiklabs-gcp-08b73228864a743b \
    --runner DataflowRunner \
    --temp_location \
    gs://qwiklabs-gcp-08b73228864a743b/temp \
    --output \
    gs://qwiklabs-gcp-08b73228864a743b/results/output \
    --job_name dataflow-intro
    
- project is the GCP project.
- runner is the specific execution engine to use to run your pipeline. The DataflowRunner uses the Dataflow Service as the execution engine.
- temp_location is the storage bucket Cloud Dataflow will use for the binaries and other data for running your pipeline. This location can be shared across multiple jobs.
- output is the bucket used by the WordCount example to store the job results.
- job_name is a user-given unique identifier. Only one job may execute with the same name.


- CREATE JOB FROM TEMPLATE.
Enter streaming-taxi-pipeline as the Job name for your Cloud Dataflow job.
Under Cloud Dataflow template, select the Cloud Pub/Sub Topic to BigQuery template.
Under Cloud Pub/Sub input topic, enter projects/pubsub-public-data/topics/taxirides-realtime
Under BigQuery output table, enter <myprojectid>:taxirides.realtime
Note: there is a colon : between the project and dataset name and a dot . between the dataset and table name
Under Temporary Location, enter gs://<mybucket>/tmp/
Click the Run job button.


- Analyze the Taxi Data Using BigQuery
  - SELECT * FROM taxirides.realtime LIMIT 10
  
- Perform aggregations on the stream for reporting
```

WITH streaming_data AS (

SELECT
  timestamp,
  TIMESTAMP_TRUNC(timestamp, HOUR, 'UTC') AS hour,
  TIMESTAMP_TRUNC(timestamp, MINUTE, 'UTC') AS minute,
  TIMESTAMP_TRUNC(timestamp, SECOND, 'UTC') AS second,
  ride_id,
  latitude, 
  longitude,
  meter_reading,
  ride_status,
  passenger_count
FROM
  taxirides.realtime
WHERE ride_status = 'dropoff'
ORDER BY timestamp DESC
LIMIT 100000

)

# calculate aggregations on stream for reporting:
SELECT 
 ROW_NUMBER() OVER() AS dashboard_sort,
 minute,
 COUNT(DISTINCT ride_id) AS total_rides,
 SUM(meter_reading) AS total_revenue,
 SUM(passenger_count) AS total_passengers
FROM streaming_data
GROUP BY minute, timestamp
```
- Create a Real-Time Dashboard
```
Click Explore in Data Studio

Specify the below settings:

Chart type: vertical bar
Dimension: dashboard_sort
Hierarchy: dashboard_sort
Metric: SUM() total_rides, SUM() total_passengers, SUM() total_revenue
Sort: dashboard_sort Ascending (latest rides first)
```














