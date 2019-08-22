- https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scheduled-deletion
- A cluster can use a single Global Endpoint or Regional Endpoints. You can select the zone where the cluster will be created or allow the zone to be chosen for you.
- https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone

gcloud dataproc clusters create cluster-custom \
--bucket $BUCKET \
--subnet default \
--zone $MYZONE \
--region $MYREGION \
--master-machine-type n1-standard-2 \
--master-boot-disk-size 100 \
--num-workers 2 \
--worker-machine-type n1-standard-1 \
--worker-boot-disk-size 50 \
--num-preemptible-workers 2 \
--image-version 1.2 \
--scopes 'https://www.googleapis.com/auth/cloud-platform' \
--tags customaccess \
--project $PROJECT_ID \
--initialization-actions 'gs://'$BUCKET'/init-script.sh','gs://dataproc-initialization-actions/datalab/datalab.sh'

Options used in this command include security, cost-savings, and flexibility features.

--tags: Applies a network tag so you can automate the creation of firewall rules.

--scopes: Applies Cloud IAM restrictions and permissions to the cluster.

--num-preemptible-workers: Controls the number of low cost worker nodes present.

--initialization-actions: Customizes the software on the cluster.

Options for further study:

--no-address, --network, --subnet:

VMs only have internal IPs for added security. Requires enabling GCP API private access on the network, establishing specific firewall rules, and passing the subnet.

https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/network

Cluster creation can be scripted based on this CLI command. Therefore cluster creation can be automated. You can create clusters periodically using a Cron job. You could write an application detect an PySpark file being added to a bucket in Cloud Storage and use that to trigger cluster creation. You could also integrate Dataproc cluster creation and job submission into a Continuous Integration environment like Travis or Jenkins. In this way you only start and pay for clusters when they are needed.




gcloud compute \
--project=$PROJECT_ID \
firewall-rules create allow-custom \
--direction=INGRESS \
--priority=1000 \
--network=default \
--action=ALLOW \
--rules=tcp:9870,tcp:8088,tcp:8080 \
--source-ranges=$BROWSER_IP/32 \
--target-tags=customaccess

