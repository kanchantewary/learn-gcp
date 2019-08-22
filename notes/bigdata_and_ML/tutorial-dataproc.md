- log into gcloud 
gcloud auth login
- create dataproc cluster named spark-test, located in us-central1, no zone preference, 1 master and two worker nodes
gcloud dataproc clusters create spark-test --region us-central1 --subnet default --zone "" --master-machine-type n1-standard-1 --master-boot-disk-size 500 --num-workers 2 --worker-machine-type n1-standard-1 --worker-boot-disk-size 500 --image-version 1.4-ubuntu18 --project chromatic-being-242810
- describe the cluster
gcloud dataproc clusters --region us-central1 describe spark-test
- run a job in the cluster
gcloud dataproc jobs --region us-central1 submit pyspark --cluster spark-test /home/user/workarea/projects/learn-pyspark/jobs/01_sparksession_practice.py
- create a bucket
gsutil mb -c regional -l us-central1 gs://ktewary-spark-work
- copy a local file to the bucket
gsutil cp /home/user/workarea/projects/learn-pyspark/data/source/names.txt  gs://ktewary-spark-work
- delete the cluster
gcloud dataproc clusters --region us-central1 delete spark-test

# coursera-gcp-qwiklab - Recommend Products using ML with Cloud SQL and Dataproc

- Create Cloud SQL instance from console
- open cloud shell and connect to the mysql instance
gcloud sql connect rentals --user=root --quiet
- show databases;
- run the following
```
CREATE DATABASE IF NOT EXISTS recommendation_spark;

USE recommendation_spark;

DROP TABLE IF EXISTS Recommendation;
DROP TABLE IF EXISTS Rating;
DROP TABLE IF EXISTS Accommodation;

CREATE TABLE IF NOT EXISTS Accommodation
(
  id varchar(255),
  title varchar(255),
  location varchar(255),
  price int,
  rooms int,
  rating float,
  type varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE  IF NOT EXISTS Rating
(
  userId varchar(255),
  accoId varchar(255),
  rating int,
  PRIMARY KEY(accoId, userId),
  FOREIGN KEY (accoId) 
    REFERENCES Accommodation(id)
);

CREATE TABLE  IF NOT EXISTS Recommendation
(
  userId varchar(255),
  accoId varchar(255),
  prediction float,
  PRIMARY KEY(userId, accoId),
  FOREIGN KEY (accoId) 
    REFERENCES Accommodation(id)
);

SHOW DATABASES;
```
- change database
```
USE recommendation_spark;
SHOW TABLES;
```

- import data in cloud sql using command line (learn the steps and add here)
- run few queries
- What's the average review of our accommodations?

SELECT 
    COUNT(userId) AS num_ratings,
    COUNT(DISTINCT userId) AS distinct_user_ratings,
    MIN(rating) AS worst_rating,
    MAX(rating) AS best_rating,
    AVG(rating) AS avg_rating
FROM Rating;

- In machine learning, we will need a rich history of user preferences for the model to learn from. Run the below query to see which users have provided the most ratings

SELECT 
    userId,
    COUNT(rating) AS num_ratings
FROM Rating 
GROUP BY userId
ORDER BY num_ratings DESC;

https://storage.googleapis.com/cloud-training/bdml/v2.0/data/accommodation.csv
https://storage.googleapis.com/cloud-training/bdml/v2.0/data/rating.csv


- Generating housing recommendations with Machine Learning using Cloud Dataproc

gcloud dataproc clusters create rentals --subnet default --zone us-central1-a --master-machine-type n1-standard-2 --master-boot-disk-size 500 --num-workers 2 --worker-machine-type n1-standard-2 --worker-boot-disk-size 500 --image-version 1.3-deb9 --project qwiklabs-gcp-79fd51fd0bf4e006

-- patching cloud sql
???

echo "Authorizing Cloud Dataproc to connect with Cloud SQL"
CLUSTER=rentals
CLOUDSQL=rentals
ZONE=us-central1-a
NWORKERS=2

machines="$CLUSTER-m"
for w in `seq 0 $(($NWORKERS - 1))`; do
   machines="$machines $CLUSTER-w-$w"
done

echo "Machines to authorize: $machines in $ZONE ... finding their IP addresses"
ips=""
for machine in $machines; do
    IP_ADDRESS=$(gcloud compute instances describe $machine --zone=$ZONE --format='value(networkInterfaces.accessConfigs[].natIP)' | sed "s/\[u'//g" | sed "s/'\]//g" )/32
    echo "IP address of $machine is $IP_ADDRESS"
    if [ -z  $ips ]; then
       ips=$IP_ADDRESS
    else
       ips="$ips,$IP_ADDRESS"
    fi
done

echo "Authorizing [$ips] to access cloudsql=$CLOUDSQL"
gcloud sql instances patch $CLOUDSQL --authorized-networks $ips

-- copy the ML code

gsutil cp gs://cloud-training/bdml/v2.0/model/train_and_apply.py train_and_apply.py
cloudshell edit train_and_apply.py

USE recommendation_spark;

SELECT COUNT(*) AS count FROM Recommendation;


SELECT 
    r.userid, 
    r.accoid, 
    r.prediction, 
    a.title, 
    a.location, 
    a.price, 
    a.rooms, 
    a.rating, 
    a.type 
FROM Recommendation as r 
JOIN Accommodation as a 
ON r.accoid = a.id 
WHERE r.userid = 10;
