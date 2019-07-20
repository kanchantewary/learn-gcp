# Dataproc

## Resources
https://youtu.be/2ksD7udWFys
https://cloud.google.com/blog/products/data-analytics/flexible-way-deploy-apache-hive-cloud-dataproc

## notes
- managed yarn service, supports hadoop, spark, pig, hive etc. (what more?). ssh into cluster to run jobs.
- connectors to bigquery, cloud storage, bigtable
- no ops, create cluster, use it, turn it off
- existing hadoop code can be moved to cloud
- built using compute engine VMs - at least 1 master and 2 workers
- use custom machine types to closely match the requirements of a job
- specify scripts from github or cloud storage
- storage should not be in the cluster, rather using cloud storage (GCS) or bigtable or bigquery. such off-cluster storage enables us to shut down the cluster as soon as the job is complete, and reduces the cost. GCS itself is cheaper than persistent disk storage.
- do not use HDFS for storage, use cloud storage instead
- use initialization scripts
- migration method
  - copy data to gcs
  - update the file prefix (hdfs to gs)
  - determine machine type. create dataproc cluster
  - run the job
  - track usage from stack driver

## using preemptible VMs
- preemptible instances is good choice, use for processing only, not for storage, adviced to be used for large clusters. All instances cant be preemptible (at least 2 - non-preemptible workers should be there. master must be non-preemptible). 
- it is advised to maintain a 50-50 ratio between persistent and preemptible vms. Using lots of preemptible VMs would increase the likelihood of failures, 
# challenges of a on-prem hadoop cluster
- scaling. like provisioning new systems in a cluster can take long time.
- utilization can be challenge. a cluster can be under or over utilized

# deploying a cluster
- from web console, 
## scaling
- add workers
- high availability config - 3 master nodes
- single node clusters (both master and worker) - use for prototyping
- auto-restarting can be configured

## bigquery integration
- using gcs
- using bq connector
- using pandas


## Tutorial
- create a new cluster
`gcloud dataproc clusters create spark-test --subnet default --zone us-east4-b --single-node --master-machine-type n1-standard-1 --master-boot-disk-size 500 --image-version 1.4-ubuntu18 --project chromatic-being-242810`

- https://googlecoursera.qwiklabs.com/focuses/31818

-apache bigtop

