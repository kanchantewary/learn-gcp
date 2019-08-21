# Cloud deployment manager

## Resources
https://cloud.google.com/deployment-manager/docs/
https://github.com/GoogleCloudPlatform/deploymentmanager-samples
https://medium.com/google-cloud/2018-google-deployment-manager-5ebb8759a122
https://github.com/schweikert/gcp-infra-as-code


## Concepts
- deployment - a deployment is a collection of resources which are deployed and managed together
- config file written in yaml. a configuration file contains name, type and properties for each resource entry
  - define dependencies
- use templates - one or multiple templates can be used in the configuration file
- Use environment variables - Pass variables (e.g. zone, machine size, number of machines, state: test, prod, staging) into your templates and get output values back (e.g. IP address assigned, link to the instance). Use Jinja2 to write templates in 
- manifest
- JSON schema for defining and constraining parameters
- runtime configurator
  - watcher
  - waiter
  
- Alternative products to Cloud deployment manager
  - Ansible, chef, Terraform, AWS CloudFormation, Azure Resource Manager
