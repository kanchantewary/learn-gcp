- Refer this tutorial (https://google.qwiklabs.com/focuses/564?parent=catalog)
1. run the application locally in cloud shell
`node server.js`
2. create Dockerfile
```
FROM node:6.9.2
EXPOSE 8080
COPY server.js .
CMD node server.js
```
3. Run the application in docker
```
docker build -t gcr.io/PROJECT_ID/hello-node:v1 .
docker run -d -p 8080:8080 gcr.io/PROJECT_ID/hello-node:v1
curl http://localhost:8080
docker ps
docker stop [CONTAINER ID]
gcloud auth configure-docker
docker push gcr.io/PROJECT_ID/hello-node:v1
```
4. create a kubernetes cluster
```
# create a cluster
gcloud container clusters create hello-world \
                --num-nodes 2 \
                --machine-type n1-standard-1 \
                --zone us-central1-a
# create a pod
kubectl run hello-node \
    --image=gcr.io/PROJECT_ID/hello-node:v1 \
    --port=8080

# view the deployments
kubectl get deployments

# view the pods
kubectl get pods

kubectl cluster-info

kubectl config view

kubectl get events

kubectl logs <pod-name>

# allow external traffic
kubectl expose deployment hello-node --type="LoadBalancer"

kubectl get services

# scale up your service
kubectl scale deployment hello-node --replicas=4

kubectl get deployment

kubectl get pods
```

5. roll out an upgrade
```
response.end("Hello Kubernetes World!");

docker build -t gcr.io/PROJECT_ID/hello-node:v2 .

docker push gcr.io/PROJECT_ID/hello-node:v2

kubectl edit deployment hello-node

Look for Spec > containers > image and change the version number to v2:

kubectl get deployments

```
# GSP053
- Refer link (https://google.qwiklabs.com/focuses/639?parent=catalog) 
- https://github.com/googlecodelabs/orchestrate-with-kubernetes





