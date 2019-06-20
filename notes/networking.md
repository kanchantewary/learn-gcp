# Cloud networking services
basic terminologies:
SSL - SSL stands for Secure Sockets Layer and, in short, it's the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two systems, preventing criminals from reading and modifying any information transferred, including potential personal details. The two systems can be a server and a client (for example, a shopping website and browser) or server to server (for example, an application with personal identifiable information or with payroll information). It uses encryption algorithms to scramble data in transit, preventing hackers from reading it as it is sent over the connection.
TLS - TLS (Transport Layer Security) is just an updated, more secure, version of SSL. We still refer to our security certificates as SSL because it is a more commonly used term, but when you are buying SSL from Symantec you are actually buying the most up to date TLS certificates with the option of ECC, RSA or DSA encryption.
HTTPS - HTTPS (Hyper Text Transfer Protocol Secure) appears in the URL when a website is secured by an SSL certificate. The details of the certificate, including the issuing authority and the corporate name of the website owner, can be viewed by clicking on the lock symbol on the browser bar.

Refer this [link](https://www.websecurity.symantec.com/en/in/security-topics/what-is-ssl-tls-https)

- VPC
  - complete range of managed networking mechanisms e.g. granular ip address ranges, routes, firewalls, VPN, cloud router
- load balancing
- DNS - translates requests from domain names to IPv4 or IPv6 ip addresses
- hybrid cloud connectivity
  - VPN
  - cloud interconnect
 - cloud CDN
  - uses googles edge caches to lower network latency
