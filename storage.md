# GCP storage
Block Storage - storage for compute VMs, no abstraction is used, examples are persistent disks (standard or SSD)  
Cloud Storage - buckets to store data, bucket names are globally unique  
  multi-regional - very frequently accessed, geo-redundant, highly available, most expensive  
  regional - data stored in a geographic region, lower in cost, appropriate for compute VMs  
  nearline - slighly lower availability, use for data backup, archival or disaster recovery, 30 day minimum storage, access once a month max  
  coldline - access once a year max, 90 day minimum storage, use for data related to legal or regulatory use  
 In google world, hdfs is replaced by cloud storage, since hdfs requires a name node running always  
 BigQuery - much faster than hive, can be used for real-time processing, does not enforce ACID property (so not for OLTP)  
 Cloud SQL/Cloud Spanner - for OLTP, structured relational data, supports ACID property. not suitable for OLAP  
 DataStore - NoSQL database, alternative to MongoDB or CouchDB. not for OLTP or OLAP. not for write intensive data. provides decent transaction support.  
BigTable - columnar data store, like HBase, good for sparse data  
 sensitive to hot spotting (?)  
 
 how to access: xml or json api, cmd line (gsutil)
 domain verification
 
 single API for all storage classes
 aspects to consider: scalability, availability, consistency
 access methods: console/gsutil
 
