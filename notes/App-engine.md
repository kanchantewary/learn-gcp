# App Engine
- PaaS
- fully managed serverless platform. health-check and scaling is automatically done, OS and security updates are automatically applied.
- deployed in a particular region, so a regional service. Once a region is set, it can NOT be moved.
- languages supported - Java, PHP, Node.js, Python, C#, .Net, Ruby and Go
- Application Versioning
- Traffic Splitting - Route incoming requests to different app versions, A/B test and do incremental feature rollouts
- Open & Flexible - Custom runtimes allow you to bring any library and framework to App Engine by supplying a Docker container
- Monitoring, Logging & Diagnostics - stackdriver
- environment is standard or flexible
  - standard - Containers are preconfigured with one of several available runtimes.
  - flexible - 
- scaling type - manual, basic, automatic
- instance class 
- Traffic Migration or Traffic splitting
  - migration is between two (old and new) versions of a service (of your application), old versions can be multiple too. 
  - splitting traffic among two or more versions of a service
- Memcache - memory cache service
- use cases - web applications, mobile apps
- security scan - Cloud Security Scanner. Refer the major security [vulnerabilities](https://www.toptal.com/security/10-most-common-web-security-vulnerabilities)

## Hello-world tutorial
```
   48  git clone https://github.com/GoogleCloudPlatform/python-docs-samples
   49  cd python-docs-samples/appengine/standard_python37/hello_world
   50  cat main.py
   51  cat app.yaml
   52  virtualenv --python python3 ~/envs/hello_world
   53  source ~/envs/hello_world/bin/activate
   54  pip install -r requirements.txt
   55  python main.py
   56  gcloud app create
   57  gcloud app deploy app.yaml --project gcpcourse-01
```
