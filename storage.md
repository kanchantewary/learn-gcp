# GCP storage
Block Storage - storage for compute VMs, no abstraction is used, examples are persistent disks (standard or SSD)
Cloud Storage - buckets to store data, globally unique
  multi-regional
  regional
  nearline
  coldline
 In google world, hdfs is replaced by cloud storage, since hdfs requires a name node running always
 BigQuery - much faster than hive, can be used for real-time processing, does not enforce ACID property (so not for OLTP)
 Cloud SQL/Cloud Spanner - for OLTP, structured relational data, supports ACID property. not suitable for OLAP
 DataStore - NoSQL database, alternative to MongoDB or CouchDB. not for OLTP or OLAP. not for write intensive data. provides decent transaction support.
BigTable - columnar data store, like HBase, good for sparse data
 sensitive to hot spotting (?)
 
