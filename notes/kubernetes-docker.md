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
- docker images - list locally stored images
- docker push
- docker run
  - detached or foreground running. If '-d' option is specified, the container runs detached from console, i.e. in background.
  - Container identification
  - network settings
  - runtime constraints on CPU and memory
- docker start <container name>
- docker stats <container name>
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

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq
```
