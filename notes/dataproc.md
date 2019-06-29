# Dataproc
- managed yarn service
- no ops, create cluster, use it, turn it off
- existing hadoop code can be moved to cloud
- built using compute engine VMs - at least 1 master and 2 workers
- preemptible instances is good choice, use for processing only, not for storage. All instances cant be preemptible (at least 2 - non-preemptible workers should be there. master must be non-preemptible)
- specify scripts from githup or cloud storage
## scaling
- add workers
- high availability config - 3 master nodes
- single node clusters (both master and worker) - use for prototyping
- auto-restarting can be configured
## connectors
- bigtable

## Tutorial
- create a new cluster
`gcloud dataproc clusters create spark-test --subnet default --zone us-east4-b --single-node --master-machine-type n1-standard-1 --master-boot-disk-size 500 --image-version 1.4-ubuntu18 --project chromatic-being-242810`

