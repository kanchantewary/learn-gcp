# basic terminologies
- SSL - SSL stands for Secure Sockets Layer and, in short, it's the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two systems, preventing criminals from reading and modifying any information transferred, including potential personal details. The two systems can be a server and a client (for example, a shopping website and browser) or server to server (for example, an application with personal identifiable information or with payroll information). It uses encryption algorithms to scramble data in transit, preventing hackers from reading it as it is sent over the connection.
- TLS - TLS (Transport Layer Security) is just an updated, more secure, version of SSL. We still refer to our security certificates as SSL because it is a more commonly used term, but when you are buying SSL from Symantec you are actually buying the most up to date TLS certificates with the option of ECC, RSA or DSA encryption.
- HTTPS - HTTPS (Hyper Text Transfer Protocol Secure) appears in the URL when a website is secured by an SSL certificate. The details of the certificate, including the issuing authority and the corporate name of the website owner, can be viewed by clicking on the lock symbol on the browser bar.
- subnetworks, subnetting - https://searchnetworking.techtarget.com/definition/subnet
- CIDR - https://searchnetworking.techtarget.com/definition/CIDR
- bastion host
- NAT gateway
- OSI model - OSI stands for Open Systems Interconnection. Refer [this](https://www.geeksforgeeks.org/layers-of-osi-model/)

Refer this [link](https://www.websecurity.symantec.com/en/in/security-topics/what-is-ssl-tls-https)

# GCP notes
- VPC (Virtual Private Cloud) - a *global private isolated virtual* network partition, that provides managed network functionality. VPC is a global resource. There can be multiple (upto 5) VPCs under a GCP project (/*one is created by default*/). A VPC can have multiple sub-networks. A particular subnet can be zonal, or span across multiple zones in a region. When a new VPC is created, all traffic to it's instances are blocked by default, unless there is a explicit firewall rule created to allow it.
  - complete range of managed networking mechanisms e.g. granular ip address ranges, routes, firewalls, VPN, cloud router
  - shared VPC - a VPC shared across multiple projects (cross project networking ~XPN). In this case, there would be a host project (which would own the VPC, billing would go towards this project), plus one or multiple service projects which would use the subnets under the said VPC.
  - VPC Peering
  - routes - mapping of IP range to destination. usage:- proxy server, NAT
- load balancing - provided at different levels of OSI stack
- DNS - translates requests from domain names to IPv4 or IPv6 ip addresses
- hybrid cloud connectivity
  - VPN
  - cloud interconnect - provides connectivity between on-premise network and google cloud network - Hybrid Cloud use case.
 - cloud CDN
  - uses googles edge caches to lower network latency
- load balancing
  - http/https
  - SSL proxy
  - TCP proxy
  - Network
 - tiering
 - firewall rule, tags - rules can be allow or deny. access can be ingress or egress.we can specify source and destination ips, protocol, ports. There are priorities and tie breakers to manage conflicts between multiple rules. by default, all VPC egress (outbound) traffic is allowed, and ingress traffic is blocked.
- IP Addressing - FQDN, static vs ephemeral ip. external ips can be static or ephemeral.
  - static - does not change till it is released
  - ephemeral - internal ips are ephemeral. they are valid till the VM is start/stopped or restarted
 - DNS Name resolution
