# Google Kubernetes Engine

Refer https://cloud.google.com/solutions/scope-and-size-kubernetes-engine-clusters
- nodepool
- kubernetes labels
- node taints
- Istio service mesh

Tutorial
```
   59  git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
   60  cd kubernetes-engine-samples/hello-app
   61  cat main.go
   62  vi main.go
   63  cat Dockerfile
   64  gcloud container clusters get-credentials your-first-cluster-1 --zone us-central1-a
   65  docker build -t gcr.io/gcpcourse-01/hello-app:v1 $PWD
   66  gcloud docker -- push gcr.io/gcpcourse-01/hello-app:v1
   67  kubectl run hello-app --image=gcr.io/gcpcourse-01/hello-app:v1 --port=8080
   68  kubectl expose deployment hello-app --type="LoadBalancer"
   69  kubectl get service hello-app --watch
   70  kubectl scale deployment hello-app --replicas=4
   71  kubectl get deployment
   72  kubectl get pods
   73  sed -i -e 's/1.0.0/2.0.0/g' main.go
   74  docker build -t gcr.io/gcpcourse-01/hello-app:v2 $PWD
   75  gcloud docker -- push gcr.io/gcpcourse-01/hello-app:v2
   76  kubectl set image deployment/hello-app hello-app=gcr.io/gcpcourse-01/hello-app:v2 && echo 'image updated'
```
