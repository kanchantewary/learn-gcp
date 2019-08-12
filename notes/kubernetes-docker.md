## Kubernetes architecture
- https://www.aquasec.com/wiki/display/containers/Kubernetes+Architecture+101
- Master node
  - Controller manager - contains Deployment controller and ReplicaSet Controller
  - API server
  - etcd - distributed key value store
  - scheduler
- Worker nodes - contain multiple pods. Each pod would contain:
  - kubelets
  - kube proxy - controls the routing
  - docker containers
## Docker architecture
- docker engine - dockerd
- containers
- images
- docker registry e.g. dockerhub. An admin can create private registry as well
- docker swarm
- Docker networking
  - linux bridges
  - exposing container ports
  - port forwarding
- Docker storage
  - different file system layers
  - storage by default in a container is ephemeral, i.e. removed when container is stopped.
  - host directory storage - persistent storage
  
## Common docker tasks
- https://learning.oreilly.com/library/view/kubernetes-in-action/9781617293726/kindle_split_012.html
- docker version - shows client and server versions. Also, note API version of client and server should match. 
- docker info
- docker search <word>
- docker pull <name of the image>
- docker rmi <name of the image>
- Remove all unused images (which are not referenced by any existing container)
  ```
  docker image prune -a
  ```
- docker images - list locally stored images (also works with 'docker image ls')
- docker build
- docker push
- docker run
  - detached or foreground running. If '-d' option is specified, the container runs detached from console, i.e. in background.
  - Container identification
  - network settings
  - runtime constraints on CPU and memory
  ```
  docker run <image>:<tag>
  ```
- docker start <container name>
- docker container ls - list all containers
- docker ps - list running containers
- docker kill
- docker stop
- docker attach <container name>
- docker inspect - get additional information about a container
- docker save
- docker load
- docker commit
- docker rm
- docker exec - Running a shell inside an existing container
  ```
  docker exec -it kubia-container bash
  ```
- docker tag
  
```
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

```

## Kubernetes in depth
- pods - co-located group of containers and represents the basic building block in Kubernetes. Containers are designed to run only a single process per container. you need to run each process in its own container.A pod of containers allows you to run closely related processes together and provide them with (almost) the same environment as if they were all running in a single container, while keeping them somewhat isolated. Because all containers of a pod run under the same Network and UTS namespaces (we’re talking about Linux namespaces here), they all share the same hostname and network interfaces. Similarly, all containers of a pod run under the same IPC namespace and can communicate through IPC. how containers should be grouped into pods:
  - Do they need to be run together or can they run on different hosts?
  - Do they represent a single whole or are they independent components?
  - Must they be scaled together or individually?
- labels
- label selector
- annotations
- kubernetes namespaces
- liveness probes
- Replication controllers
- ReplicaSets
- DaemonSet
- scheduling
minikube - single vm demo environment
## kubectl common commands
which kubectl
kubectl version
cd .kube
cat config
minikube 
