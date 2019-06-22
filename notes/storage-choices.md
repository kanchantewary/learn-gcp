# Planning the data storage options
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

Migration strategies
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

# key features:
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

# Storage classes
multi-regional, dual-regional(beta), regional,nearline,coldline,standard storage, DRA(durable reduced availability)
Refer this [documentation](https://cloud.google.com/storage/docs/storage-classes)

# Footnote
- DAS - direct attached storage - local disk drives which are installed internal to the server’s cabinet.  These drives are typically used to install the operating system and user applications. 
- SAN - storage area networks - SANs require an infrastructure consisting of SAN switches, disk controllers, HBAs (host bus adapters) and fibre cables.  SANs leverage external RAID controllers and disk enclosures to provide high-speed storage for numerous potential servers.
- NAS - network attached storage - This solution uses a dedicated server or “appliance” to serve the storage array.  The storage can be commonly shared to multiple clients at the same time across the existing Ethernet network. 

Refer this [link](https://www.petri.com/das-nas-san-storage-technologies) for more details.

- IOPS - IOPS (Input/Output Operations Per Second, pronounced i-ops) is a common performance measurement used to benchmark computer storage devices like hard disk drives (HDD), solid state drives (SSD), and storage area networks (SAN). 
