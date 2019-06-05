# GCP basics - udemy training by loonycorn 
driver --> configuring cluster of distributed machines is complicated and expensive

# Certifications
## GCP data engineer
big data(bigquery, dataflow, pub/sub), storage(cloud storage, cloud SQL, bigtable, datastore), 
ML(concepts, tensorflow, cloudML)
prerequisite - hadoop, MR, spark in depth
hive,hbase,pig fundamentals

## GCP cloud architect courses
easier, more theoretical, compute choices (app engine, compute engine, container engine), 
network, security, deployment, logging and monitoring (stackdriver)
Advise - do not prepare to the test

GCP trial ends on June 05, 2020

1. create a VM instance
go to compute engine > VM instances > create
I see below details. found that pricing depends on region, machine type, boot disk storage space (min is 10 GB)
region
zone
machine type
container
boot disk
access scope
firewall
security
networking
sole tenancy

the top level billing unit of GCP is a project
learn to use cloud-shell - glcoud command tools

# gcloud common commands
gcloud config list project
gcloud -h
gcloud config --help
gcloud help config
gcloud config list --all

we can use gcloud from browser, or even better to download gcloud sdk locally

# CAUTION:
An important note for anyone learning a cloud technology like GCP - please be sure to delete your projects, instances and in general to free up your resources after you are done using them. Resources like BigTable, Cloud Spanner are pretty expensive - if you happen to create one, then forget to free it up, you could be hit with real sticker shock when you get your next invoice.

