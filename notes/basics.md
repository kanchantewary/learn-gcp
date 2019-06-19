# GCP basics
driver --> configuring cluster of distributed machines is complicated and expensive. 

The idea is, use a compute engine VM, run the application, create the file we need and store it in cloud storage, and then get rid of the VM (STOP or DELETE). data and compute are independent.

## Virtualization
virtualization can be considered as a process of creating abstractions to computing/storage resources (in this context), e.g. partitioning a hard-drive is a form of virtualization. virtual machines, networks, switches, routers are all example of virtualization.
Refer this [link](https://www.vgyan.in/type-1-and-type-2-hypervisor/)
- hypervisor
- paravirtualization
- hardware-assisted virtualization
- type 1 hypervisor - run directly on system hardware (native or bare-metal). best for scalability, security and performance (GCP uses this)
- type 2 hypervisor - examples like oracle virtual box or vmware player, less scalable and less secure. the hypervisor would run inside the host operating system


## Compute Engine
A  project can have upto 5 VPC instances. Each compute engine instance belongs to one VPC network
To create a VM instance, go to compute engine > VM instances > create. Pricing depends on region, machine type, boot disk storage space (min is 10 GB)

region - choosing the region, consider where do we expect the user traffic to come from, consider govt regulations about data storage location
zone - multiple zones are available inside a region

### machine type
A machine type specifies a particular collection of virtualized hardware resources available to a virtual machine (VM) instance, including the system memory size, virtual CPU (vCPU) count, and maximum persistent disk capability. typically standard, high memory, high CPU, shared-core, memory-optimized are the broad categories. 

standard - 
High memory - High-memory machine types have 6.50GB of system memory per vCPU. 
Memory optimized - Memory-optimized machine types have greater than 14 GB of memory per vCPU. These machines types are perfectly suited for in-memory databases and in-memory analytics, such as SAP Hana and business warehousing (BW) workloads, genomics analysis, SQL analysis services, and more. 
High CPU - High-CPU machine types are ideal for tasks that require more vCPUs relative to memory. High-CPU machine types have 0.90 GB of memory per vCPU.

If none of the predefined machine types match your needs, you can independently specify the number of vCPUs and the amount of memory for your instance.

GPU - You can attach GPUs only to instances with a predefined machine type or custom machine type that you are able to create in a zone. GPUs are not supported on shared-core machine types or memory-optimized machine types.

container - When creating a VM or an instance template, you can provide a Docker image name and launch configuration. Compute Engine will take care of the rest including supplying an up-to-date Container-Optimized OS image with Docker installed and launching your container when the VM starts up.
boot disk - persistent boot disk, which contains the OS
access scope
firewall - http/https
security
networking
sole tenancy

* Premptible instance - will definitely be terminated after running for 24 hours. the cost is much less than regular VMs, makes sense in a fault-tolerant cluster. they will be forcibly restarted during maintenance

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

# Compute Options

## app engine - PaaS offering, serverless and ops-free
## compute engine - IaaS offering, fully controllable down to OS
  google cloud launcher
  cost estimate before deployment
  provides full control
  
## container engine - cluster of machines running in kubernetes
heroku is an example PaaS offering

example use-case:
setup a website or web app
  1. static html, no SSL
  (*Note: SSL (Secure Sockets Layer) is the standard security technology for establishing an encrypted link between a web server and a browser. This link ensures that all data passed between the web server and browsers remain private and integral. SSL is an industry standard and is used by millions of websites in the protection of their online transactions with their customers.*)
  Just buy storage to host these files (autoscaling included) - create a cloud storage bucket in gcp
  
  2. SSL, HTTPS, CDN
  (*A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.*)
  Use firebase hosting+cloud storage
  3. need to add load balancing, scaling
  
run a hadoop cluster
run a tensolflow model

### kubernetes and containers
1. kubernetes running on master node, managing multiple node instances, each node instance runs a kubelet, which in turn runs a pod. each pod contain multiple containers (docker e.g.). a container cluster is basically a group of Compute Engine VMs running kubernetes.
2. container disks are ephemeral (temporary), to achieve persistent disk, use abstraction of gcePersistentDisk
3. network level load balancing is available OOTB, but not http load balancing
4. Each node runs docker runtime, and hosts a kubelet agent
5. master runs kubernetes api
6. nodepool- subset of machines within a cluster having same configuration
7. container builder
8. container registry- private registry of docker images
9. autoscaling



# Storage Options

arranged in the order of pricing low to high:
cloud storage buckets (cheapest)
standard persistent disks - max size 65536 GB
solid state disks (SSD persistent disks) - max size 65536 GB
local SSDs

# Load Balancing options

network load balancing
http load balancing
[OSI stack](https://en.wikipedia.org/wiki/OSI_model)

# DevOps

# Availability Policies
Preemptive VM
automatic restart
migrate to another VM

Service accounts
to change machine type, VM has to be stopped and restarted
a zone can not be changed once a VM is created

Labels: logical grouping, useful for reviewing usage pattern and other stuff
get the gcloud script from UI and use that in cloud shell
default values can be configured, which would be used when creating new VM instances
If a new disk need to be attached, it should be in the same zone (to that of the VM instance)

# container vs VMs
container disks are ephemeral, they are lost when a container is restarted
load balancing can be difficult in container engine

GKE - google kubernetes engine 
GCE - google container engine

# Autoscaling

# Google Cloud Dataproc
managed spark/hadoop cluster


# Tutorials
## create a VM from gcloud
gcloud compute --project=chromatic-being-242810 instances create my-test-vm --zone=us-central1-a --machine-type=f1-micro --subnet=default --network-tier=PREMIUM --maintenance-policy=MIGRATE --service-account=609190896761-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/cloud-platform --tags=https-server --image=ubuntu-1804-bionic-v20190530 --image-project=ubuntu-os-cloud --boot-disk-size=10GB --boot-disk-type=pd-standard --boot-disk-device-name=my-test-vm

gcloud compute --project "chromatic-being-242810" ssh --zone "us-central1-a" "my-first-vm"


## create and attach a persistent disk from gcloud
gcloud compute disks create test-disk --size=100GB --zone us-central1-a
gcloud compute instances attach-disk my-test-vm --disk test-disk --zone us-central1-a

## create a small python-based app and run in app engine

# create a kubernetes cluster
set the default zone and region
gcloud config set compute/zone us-central1-a
gcloud config set compute/region us-central1

create the cluster
gcloud container clusters create my-first-cluster --num-nodes=1

gcloud compute instances list

deploy the wordpress app
kubectl run wordpress --image=tutum/wordpress --port=80
kubectl get pods
kubectl expose pod wordpress-7fff795d48-8klrb --name=wordpress --type=LoadBalancer

get the ingress ip from the response of below code (load balancer should be deployed)
kubectl describe services wordpress
view the ip from a browser

scale the app we just created
kubectl scale deployment wordpress --replicas 3
kubectl get service wordpress
kubectl set image deployment wordpress wordpress=tutum/wordpress:2.0
kubectl get pods

at end end, delete the cluster created
gcloud container clusters delete my-first-cluster

# App engine (serverless and ops-free)
use for hosting highly available applications (examples can be web apps, mobile applications, gaming backends, REST APIs)
Environments: 
Standard - basically a preinstalled container engine
Flexible - basically a compute engine environment (VM), more choices, can be customized
cloud functions - written in js, runs on node.js runtime

# Install google cloud sdk in ubuntu

https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu

# to ssh into a vm instance
gcloud compute ssh my-test-vm

# inside vm ssh shell, run the following to see the disks attached:
ls -l /dev/disk/by-id/
=======
# Create environment variable for correct distribution
CLOUD_SDK_REPO="cloud-sdk-$(grep VERSION_CODENAME /etc/os-release | cut -d '=' -f 2)"

# Add the Cloud SDK distribution URI as a package source
echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Import the Google Cloud Platform public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# Update the package list and install the Cloud SDK
sudo apt-get update && sudo apt-get install google-cloud-sdk


# gcloud reference
https://cloud.google.com/sdk/gcloud/reference/

## delete a vm instance
gcloud compute instances delete example-instance [example-instance-2 example-instance-3..]

# Install google cloud sdk in ubuntu

https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu

# Big Data, Business Intelligence
- BigQuery
- BigTable
- Cloud DataFlow
- Cloud DataProc
- Cloud Data Fusion
- Cloud DataPrep
- Data Catalog
- Data Studio
- Cloud Pub/Sub

# AI and ML
- TensorFlow
- 

# GCP BI solution architecture

![](gcp-bi-soln-architecture.png)

