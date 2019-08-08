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
## Common docker tasks
- docker version - shows client and server versions. Also, note API version of client and server should match. 
- docker info
- docker search <word>
- docker pull <name of the image>
- docker rmi <name of the image>
- docker images
- docker push
- docker run
- docker start <container name>
- docker stats <container name>
- docker ps
- docker kill
- docker stop
- docker attach <container name>
- docker inspect 
- docker save
- docker load
- docker commit
- docker rm
  
