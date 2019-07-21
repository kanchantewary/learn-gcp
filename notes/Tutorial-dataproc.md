# Using pig and hive in dataproc
- create dataproc cluster
```
gcloud dataproc clusters create cluster-dataproc --bucket qwiklabs-gcp-41107ebedf37c76a --region us-central1 --subnet default --zone "" --master-machine-type n1-standard-2 --master-boot-disk-size 100 --num-workers 3 --worker-machine-type n1-standard-1 --worker-boot-disk-size 50 --image-version 1.3-deb9 --scopes 'https://www.googleapis.com/auth/cloud-platform' --tags hadoopaccess --project qwiklabs-gcp-41107ebedf37c76a
```
- create firewall rule
```
gcloud compute --project=qwiklabs-gcp-gcpd-a7c5fa238dff firewall-rules create allow-hadoop-test --direction=INGRESS --priority=1000 --network=default --action=ALLOW --rules=tcp:9870,tcp:8088 --source-ranges=42.110.149.225/32 --target-tags=hadoopaccess
```
- create table in hive
```
# In the Master Node SSH terminal window.
cd
cp -r /training .
ls

ls
cd training/training-data-analyst/courses/unstructured
ls pet*.*

cat pet-details.txt

hadoop fs -mkdir /pet-details
hadoop fs -put pet-details.txt /pet-details

hive

CREATE DATABASE pets;
USE pets;

CREATE TABLE details (Type String, Name String, Breed String, Color String, Weight Int) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',';
SHOW TABLES;
DESCRIBE pets.details;

load data INPATH '/pet-details/pet-details.txt' OVERWRITE INTO TABLE details;

SELECT * FROM pets.details;

```
- copy source file to hdfs
- load data in hive table
- run a pig script
```
cat pet-details.pig
hadoop fs -put pet-details.txt /pet-details
pig < pet-details.pig

cd
mkdir output
cd output
hadoop fs -get /GroupedByType/part* .

cat part-r-00000

```
