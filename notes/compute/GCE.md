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

- Instance life cycle
  - PROVISIONING, STAGING, RUNNING, STOPPING, REPAIRING, TERMINATED
  - reset an instance to wipe out the content and reset it to it's initial state
- instance group - a collection of VM instances that you can manage as a single entity. unmanaged instance groups do not provide auto-scaling, or auto-healing or rolling updates, instance template can not be used, load balancing can be used however.
  - MIG or managed instance groups offer following advantages. They can be zonal or regional.
    - high availability
    - auto-scaling - define autoscaling policy and a target utilization level (in percentage) that the autoscaler uses to determine when to scale the group. The policies can be any or multiple of the following: Average CPU utilization, HTTP load balancing serving capacity or Stackdriver Monitoring metrics. The autoscaler continuously collects usage information based on the policy, compares actual utilization to your desired target utilization, and determines if the group needs to be scaled up or down.
    - auto-healing - use health-check signals to verify that an instance is created and its application is responding. Define how health is determined: how often to check, how long to wait for a response, and how many successful or failed attempts are decisive
    - multi-zone coverage
    - load balancing
    - rolling updates
- networking
  - vm supported protocols TCP, UDP, ICMP
  - each instance belongs to one VPC network
- storage
  - do not use local SSD for storage
- Migrate VMs
  - manual
  - automated - import virtual disks, velostrata, cloudEndure
- High Availability
- Billing and costs
  - per sec billing
  - preemptible vm
  - no prepaid contract requirement
  - inferred instances
  - longer term use is discounted
  - machine type recommendations provided by compute engine [rightsizing](https://cloud.google.com/compute/docs/instances/apply-sizing-recommendations-for-instances)
  - we can change machine type of a stopped instance (TERMINATED). It is not possible to change machine type of a running instance.
  - committed use discounts, but doesnt require any upfront cost. Refer [this](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts)
  - 
