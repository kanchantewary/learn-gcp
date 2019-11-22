## Zonal resources
Zonal resources are only accessible by other resources within the same zone. These include the following objects:

VM instances: These reside in a particular zone.
Zonal persistent disks: These provide persistent storage to VM instances. They can also be shared as disks between projects for the creation of snapshots and images, but not disk attachments.
Machine types: These define the hardware configuration for your VM instances and are defined for any particular zone.
Zonal managed instance groups: These allow you to autoscale groups of instances. The scope can be set to either regions or zones.


## Regional resources
Regional resources are accessible by other resources only within the same region. These include the following objects:

Addresses: Static, external IP addresses can only be used by instances that are in the same region.
Subnets: These are associated with VPC networks and allow the assignment of IP addresses to VMs.
Regional managed instance groups: These allow you to scale groups of instances. The scope can be set to either regions or zones.
Regional persistent disks: These provide replicated, persistent storage to VM instances. They can also be shared between projects for the creation of snapshots and images, but not disk attachments.

## Global resources
Global resources are globally available within the same project and can be accessed from any zone. These include the following objects:

Addresses: These are reserved external IP addresses and can be used by global load balancers.
Images: These are either predefined or user customized. They can be used for provisioning VMs.
Snapshots: Snapshots of a persistent disk allow the creation of new disks and VMs. Note that you can also expose a snapshot to a different project.
Instance templates: These can be used for the creation of managed instance groups.
Virtual Private Cloud (VPC) networks: These are virtual networks that you can connect your workloads to.
Firewall: These are, in fact, defined per VPC, but are accessible globally.
Routes: Routes allow you to direct your network traffic and are assigned to VPCs, but are also considered global.
