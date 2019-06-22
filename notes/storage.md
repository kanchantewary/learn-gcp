# GCP storage
## Basics
- Cloud SQL
- Block Storage - storage for compute VMs, no abstraction is used, examples are persistent disks (standard or SSD). does not have versioning. files are split up and stored in multiple fixed-sized blocks.
- Cloud Storage - buckets to store data, bucket names are globally unique. 3 components - data or content object, an unique identifier and metadata. object names should be unique to the bucket. maintains file revisions. multiple access levels can be assigned. files are distributed across nodes. 
common usecases are 
  - content storage and delivery
  - compute, analytics and ML
  - backup and archiving
  
 - BigQuery - much faster than hive, can be used for real-time processing, does not enforce ACID property (so not for OLTP)  
 - Cloud Spanner - for OLTP, structured relational data, supports ACID property. not suitable for OLAP. supports strong consistency, horizontal scalability. use cloud spanner API to access it.
 - DataStore - NoSQL database, alternative to MongoDB or CouchDB. not for OLTP or OLAP. not for write intensive data. provides decent transaction support.  
- BigTable - columnar data store, like HBase, good for sparse data. use as a storage engine for ML applications, 
 sensitive to hot spotting (?)  
 
 how to access: xml or json api, cmd line (gsutil)
 domain verification
 
 single API for all storage classes
 aspects to consider: scalability, availability, consistency
 access methods: console/gsutil

### Transfer service
transfer from AWS S3, http/https location, local file path
features:
one time, recurring transfer
delete from destination if they do not exist in source 
periodic sync-up

### Tutorial
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

### versioning

```
code goes here
```

### Encryption
```
```

### directory sync
```
sync up local current directory(.) with bucket
gsutil rsync -r . gs://ktewary-us-bucket01
```

### share a bucket across projects
```
```
# Cloud storage (gcs)

## Planning the data storage options
Cloud storage use cases
- media content storage and delivery e.g. 
  - streaming videos and music
  - serving images and website content
  - mobile app development
Repository for analytics and ML
  - video transcoding
  - genomics
  - general analytics and compute
Backups and archives
  - archive or tape migrations
  - business continuity and disaster recovery
  - storing image snapshots
  - long term storage for retention policies based on regulations or mandates
  - digital forensics

### Migration strategies
- lift and shift
- migrate and modernize
- rebuild in the cloud
- hybrid and multi-clouds

four phases:
assess>plan>migrate>optimize

Refer this [documentation](https://cloud.google.com/solutions/migration-center/)

Boot disk options:
ssd persistent disk
standard persistent disk

another option: local ssd scratch disk

### key features:
durability - 
scalability - 
availability -
consistency - 
storage cost - 
retrieval cost -
class A operations - 
class B operations -
encryption -
retention policy -
access control model
labels

### Storage classes
multi-regional, dual-regional(beta), regional,nearline,coldline,standard storage, DRA(durable reduced availability)
Refer this [documentation](https://cloud.google.com/storage/docs/storage-classes)

storage cost decreases as we go down this list. multu-regional is highest

- multi-regional - very frequently accessed, geo-redundant, highly available, most expensive. access price is free.
- regional - data stored in a geographic region, lower in cost, appropriate for compute VMs. access price is free. 
- nearline - slighly lower availability, use for data backup, archival or disaster recovery, 30 day minimum storage, access once a month max. there is access cost, but lower than coldline.
- coldline - access once a year max, 90 day minimum storage, use for data related to legal or regulatory use. access cost is highest.

### New approach (2019 next)
Refer [here](https://youtu.be/mOHy6m8KzJk)

Four storage classes: standard, nearline, coldline and archive. Each can have 3 location types: multi-region, dual-region or region

content serving - common setups
- Direct serving
- cloud CDN
- custom frontends
- independent CDNs

 In google world, hdfs is replaced by cloud storage, since hdfs requires a name node running always.
 
 ### retries and failover best practices
 - deadline- should not be too short or too long
 - hedged requests
 - limit your retry volume
 - ensure sequences are idempotent
 
### scaling
- bucket sharding - try to distribute load evenly
  - range based
  - hash based
- autoscaling
- hotspotting
-fragmentation
-naming patterns which can cause problems distributing load
 
# Block Storage

# Footnote
- DAS - direct attached storage - local disk drives which are installed internal to the server’s cabinet.  These drives are typically used to install the operating system and user applications. 
- SAN - storage area networks - SANs require an infrastructure consisting of SAN switches, disk controllers, HBAs (host bus adapters) and fibre cables.  SANs leverage external RAID controllers and disk enclosures to provide high-speed storage for numerous potential servers.
- NAS - network attached storage - This solution uses a dedicated server or “appliance” to serve the storage array.  The storage can be commonly shared to multiple clients at the same time across the existing Ethernet network. 

Refer this [link](https://www.petri.com/das-nas-san-storage-technologies) for more details.

- IOPS - IOPS (Input/Output Operations Per Second, pronounced i-ops) is a common performance measurement used to benchmark computer storage devices like hard disk drives (HDD), solid state drives (SSD), and storage area networks (SAN). 
