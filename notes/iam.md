# Identity and Access Management
Refer this [next video](https://youtu.be/ZMC8Ng3E3LQ)
cloud IAM  - define who has what access to which resource
org policies - which resource configurations are allowed by my company
quota - how many resources can be used by my project,deparment,company

## cloud IAM
fine-grained permission model
<service>.<resource type>.<verb> e.g. storage.buckets.create, storage.buckets.update, storage.buckets.getIamPolicy, storage.buckets.setIamPolicy
- cloud IAM roles
  - primitive roles - broad access. owner, editor, viewer
  - predefined roles - narrower access
  - custom roles - use typically to combine multiple predefined roles, or add/remove a permission to a predefined role
- bindings
- service accounts - identity of one service
- permissions are inherited downward the organisation hierarchy
- best practices
  - grant roles to groups, not users
  - grant least privilege
  - 
  - retain audit logs (turn on audit logging)
  - review permission change logs
  - bring your organization structure to the cloud
  
