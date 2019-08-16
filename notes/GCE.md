# compute choices

Refer the [documentation](https://cloud.google.com/docs/choosing-a-compute-option) or this [blog](https://cloud.google.com/blog/products/gcp/choosing-the-right-compute-option-in-gcp-a-decision-tree)


compute engine(GCE)>container engine(GKE)>app engine(GAE)>google cloud functions>firebase
<---------------------highly customizable/highly managed--------------------------------->

## Compute Engine

- https://youtu.be/ZJNY7VAKYzw
- https://youtu.be/XcHE5V82OxM

- predefined machine types
  - shared core - micro, small
  - standard (1-96 vCPU)
  - high memory (2-96 CPU)
  - high CPU (2-96 CPU)
  - mega memory (96, 1.4 TB)
  - ultra memory (40-160 CPU, memory upto 3.75 TB)
- Multiple OS images supported (Linux and windows server), select size of boot disk space. option to attach GPU
- Custom machine types are supported
- cpu platform Skylake CPUs is supported, which provides better performance
- Sole Tenant VMs
- shielded VM
  - Titan security chip, secure boot, measured boot
  - Google KVM hypervisor
- general purpose VMs - 
- memory-optimized VMs - use for large in-memory databases or analytics
- Sole tenant VMs - regulatory and compliance requirements, performance isolation
- Scaling
  - instance templates
  - save VM configurations as instance template
  - Managed instace groups - auto scaling, health checking, auto healing, regional failover
  - fast VM provisioning time
- Backup
  - scheduled snapshots
    - hour, day and week based schedules
    - retention policy
    - attach a schedule to multiple disks
    - incremental snapshots
 - resource level IAM policy
 - OS login (generally available)
 - org policies for VMs
