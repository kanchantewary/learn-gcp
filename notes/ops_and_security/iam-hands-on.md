# GCP roles
Role Name | Permissions
---|---
roles/viewer | Permissions for read-only actions that do not affect state, such as viewing (but not modifying) existing resources or data.
roles/editor | All viewer permissions, plus permissions for actions that modify state, such as changing existing resources.
roles/owner | All editor permissions and permissions for the following actions: Manage roles and permissions for a project and all resources within the project. Set up billing for a project.
roles/browser (beta) | Read access to browse the hierarchy for a project, including the folder, organization, and Cloud IAM policy. This role doesn't include permission to view resources in the project.

# GSP190 - IAM Custom Roles

- Predefined Roles - created and maintained by Google. permissions are automatically updated as necessary, such as when new features or services are added to GCP.
- Custom Roles - user defined. will not be updated automatically. enforce the principle of least privilege. You can create a custom role at the organization level and at the project level. However, you cannot create custom roles at the folder level. 
  - You create a custom role by combining one or more of the available Cloud IAM permissions [<service>.<resource>.<verb>]. Permissions usually, but not always, correspond 1:1 with REST methods.
  - To create a custom role, a caller must have the iam.roles.create permission
  - Users who are not owners, including organization administrators, must be assigned either the Organization Role Administrator role (roles/iam.organizationRoleAdmin) or the IAM Role Administrator role (roles/iam.roleAdmin)
  - create a YAML file to create custom roles
```
  title: [ROLE_TITLE]
description: [ROLE_DESCRIPTION]
stage: [LAUNCH_STAGE]
includedPermissions:
- [PERMISSION_1]
- [PERMISSION_2]
```
  - run pointing to the file
  ```
  gcloud iam roles create editor --project $DEVSHELL_PROJECT_ID --file role-definition.yaml
  ```
# Service Accounts
- A service account is a special Google account that belongs to your application or a virtual machine (VM) instead of an individual end user. 
- When you create a new Cloud project using GCP Console and if Compute Engine API is enabled for your project, a Compute Engine Service account is created for you by default. 
- If your project contains an App Engine application, the default App Engine service account is created in your project by default.
  
```
# Service Accounts and Roles: Fundamentals
gcloud iam service-accounts create my-sa-123 --display-name "my service account"
# grant roles to the service account
gcloud projects add-iam-policy-binding $DEVSHELL_PROJECT_ID --member serviceAccount:my-sa-123@$DEVSHELL_PROJECT_ID.iam.gserviceaccount.com --role roles/editor
```
- steps
  1. create a service account with two roles: BigQuery Data Viewer and BigQuery User
  2. create a vm instance and add the new service account to it. If already running, you need to stop it first, to be able to update it.
  3. write a python script to run in bigquery. it should use the new service account
  ```
from google.auth import compute_engine
from google.cloud import bigquery

credentials = compute_engine.Credentials(
    service_account_email='YOUR_SERVICE_ACCOUNT')

query = '''
SELECT
  year,
  COUNT(1) as num_babies
FROM
  publicdata.samples.natality
WHERE
  year > 2000
GROUP BY
  year
'''

client = bigquery.Client(
    project='YOUR_PROJECT_ID',
    credentials=credentials)
print(client.query(query).to_dataframe())
```
  4. ssh into the vm and install google-cloud-bigquery
  5. run the query
  
  
