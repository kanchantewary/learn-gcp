# log into gcloud 
gcloud auth login
# create dataproc cluster named spark-test, located in us-central1, no zone preference, 1 master and two worker nodes
gcloud dataproc clusters create spark-test --region us-central1 --subnet default --zone "" --master-machine-type n1-standard-1 --master-boot-disk-size 500 --num-workers 2 --worker-machine-type n1-standard-1 --worker-boot-disk-size 500 --image-version 1.4-ubuntu18 --project chromatic-being-242810
# describe the cluster
gcloud dataproc clusters --region us-central1 describe spark-test
# run a job in the cluster
gcloud dataproc jobs --region us-central1 submit pyspark --cluster spark-test /home/user/workarea/projects/learn-pyspark/jobs/01_sparksession_practice.py
# create a bucket
gsutil mb -c regional -l us-central1 gs://ktewary-spark-work
# copy a local file to the bucket
gsutil cp /home/user/workarea/projects/learn-pyspark/data/source/names.txt  gs://ktewary-spark-work
# delete the cluster
gcloud dataproc clusters --region us-central1 delete spark-test

