# Create a virtual machine
1. list the active account name
`gcloud auth list`
2. list the project ID
`gcloud config list project`
3. Resources that live in a zone are referred to as zonal resources. Virtual machine Instances and persistent disks live in a zone. To attach a persistent disk to a virtual machine instance, both resources must be in the same zone. Similarly, if you want to assign a static IP address to an instance, the instance must be in the same region as the static IP.
4. create a vm from console
5. Install a NGINX web server
```
sudo su -
# update os
apt-get update
# install nginx
apt-get install nginx -y
# check if nginx server is running   
ps auwx | grep nginx
```
6. create a vm from gcloud
`gcloud compute instances create gcelab2 --machine-type n1-standard-2 --zone [your_zone]`
7. ssh into the vm
`gcloud compute ssh gcelab2 --zone [YOUR_ZONE]`
8. 

# Getting Started with Cloud Shell & gcloud
1. 
`gcloud compute project-info describe --project <your_project_ID>`
2. initialize gcloud sdk
`gcloud init`
3. create a vm
```
export PROJECT_ID=<your_project_ID>
export ZONE=<your_zone>
echo $PROJECT_ID
echo $ZONE
gcloud compute instances create gcelab2 --machine-type n1-standard-2 --zone $ZONE
```
4. get help
`gcloud help config`
5. view list of configurations
`gcloud config list`
6. list components 
`gcloud components list`
