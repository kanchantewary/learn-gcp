# best practices for planning and defining architecture

## 8 steps for planning/estimating
1. plan the hierarchy
org>team folders>projects>resources
  - consider team structure
  - consider how the billing would be organized, separate or unified
  - any governance/regulation requirements

2. designate project structure
  - control the scope of projects. single project containing multiple apps, or a single app spanning multiple projects
  - resources can be spread across multiple regions and geographies

3. automate project creation using templates
  - offers a consistency, reproducibility, testability
  - also called configuration as code or infrastructure as code
  - consistent naming and labeling across projects
  - it simplifies code refactoring (refer footnote)
  - use cloud deployment manager or 3rd party tools like [ansible](https://www.ansible.com/),[teraform](https://www.terraform.io/) or [puppet](https://puppet.com/)

4. use IAM best practices
  - manage google identities
  - integrate with existing identity platform(s), active directory used in the organisation
  - implement single sign-on, resolve conflicting accounts
  - use groups and service accounts
  - control the access of resources
  - define an organisation policy using above

5. networking and security practices
  - use VPC to define your network
  - control the traffic flow with firewall rules
  - limit the external access channels
  - centralize your network management
  - connect your enterprise network properly
  - secure all your apps and data

6. logging, monitoring, operations
  - centralized logging and monitoring using stackdriver
  - set up an audit trail
  - export logs to google cloud storage e.g.

7. cloud architecture practices
  - plan migrations carefully
  - opt for managed services whenever feasible
  - design for high availability
  - plan your disaster recovery strategy

8. billing and management practices
- know how resources are charged
- configure billing control
- analyze and export your bill
- plan capacity requirements
- implement cost controls
- consider purchasing a support package

also refer [platform launch checklist](https://cloud.google.com/docs/platform-launch-checklist)

## pricing Calculator
budgeting, cost-benefit analysis. use it as a learning tool
list the free products
- compute engine:
- app engine:
- cloud storage
- kubernetes engine

## cloud migration strategy (ref coursera-gcp)

## Footnotes:
- Code refactoring is the process of restructuring existing computer code – changing the factoring – without changing its external behavior. */Refactoring is a controlled technique for improving the design of an existing code base. Its essence is applying a series of small behavior-preserving transformations, each of which “too small to be worth doing”. However the cumulative effect of each of these transformations is quite significant/* ~Martin Fowler

- [chef](https://www.chef.io/partners/google-cloud-platform/)

- Site Reliability Engineering (SRE) - Site Reliability Engineering is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The main goals are to create ultra-scalable and highly reliable software systems. Refer [wikipedia](https://en.wikipedia.org/wiki/Site_Reliability_Engineering)

- SKU - stock keeping unit
