# GCP storage
- Block Storage - storage for compute VMs, no abstraction is used, examples are persistent disks (standard or SSD)  
- Cloud Storage - buckets to store data, bucket names are globally unique. 3 components - data or content object, an unique identifier and metadata. maintains file revisions  
  - multi-regional - very frequently accessed, geo-redundant, highly available, most expensive  
  - regional - data stored in a geographic region, lower in cost, appropriate for compute VMs  
  - nearline - slighly lower availability, use for data backup, archival or disaster recovery, 30 day minimum storage, access once a month max  
  - coldline - access once a year max, 90 day minimum storage, use for data related to legal or regulatory use  
 In google world, hdfs is replaced by cloud storage, since hdfs requires a name node running always  
 - BigQuery - much faster than hive, can be used for real-time processing, does not enforce ACID property (so not for OLTP)  
 - Cloud SQL/Cloud Spanner - for OLTP, structured relational data, supports ACID property. not suitable for OLAP  
 - DataStore - NoSQL database, alternative to MongoDB or CouchDB. not for OLTP or OLAP. not for write intensive data. provides decent transaction support.  
- BigTable - columnar data store, like HBase, good for sparse data  
 sensitive to hot spotting (?)  
 
 how to access: xml or json api, cmd line (gsutil)
 domain verification
 
 single API for all storage classes
 aspects to consider: scalability, availability, consistency
 access methods: console/gsutil

# Transfer service
transfer from AWS S3, http/https location, local file path
features:
one time, recurring transfer
delete from destination if they do not exist in source 
periodic sync-up

# Tutorial
log into gcloud  
`gcloud auth login`  
create a bucket with regional storage class. bucket name has to be universally unique  
`gsutil mb -c regional -l us-central1 gs://ktewary-reg-bucket01`  
`gsutil mb -c regional -l us-central1 gs://ktewary-us-bucket01`  
copy a local file to the bucket  
`gsutil cp basics.md gs://ktewary-us-bucket01`  
`gsutil cp README.md gs://ktewary-reg-bucket01`  
copy from one bucket to another recursively (-r)  
`gsutil cp -r gs://ktewary-reg-bucket01 gs://ktewary-us-bucket01/`  
list files inside a bucket  
`gsutil ls gs://ktewary-us-bucket01/`  
remove a bucket and it's content recursively  
`gsutil rm -r gs://ktewary-reg-bucket01`  
list the available buckets  
`gsutil ls`  
`gsutil rm -r gs://ktewary-us-bucket01/ktewary-reg-bucket01/`  
provide read access to all users to a file  
`gsutil acl ch -u AllUsers:R gs://ktewary-us-bucket01/basics.md`  
remove the acess  
`gsutil acl ch -d AllUsers gs://ktewary-us-bucket01/basics.md`  
check the existing lifecycle policy  
`gsutil lifecycle get gs://ktewary-us-bucket01`  
appy a new cifecycle policy  
`gsutil lifecycle set kt-us-lifecycle-policy.json gs://ktewary-us-bucket01`  
`gsutil lifecycle get gs://ktewary-us-bucket01`  
```
 gsutil list -L -b gs://ktewary-us-bucket01/
 gcloud init
 gcloud auth activate-service-account --key-file credentials.json
 gcloud init
```

# versioning

```
code goes here
```

# customer supplied encryption
```
```

# directory sync
```
sync up local current directory(.) with bucket
gsutil rsync -r . gs://ktewary-us-bucket01
```

# share a bucket across projects
```
```
