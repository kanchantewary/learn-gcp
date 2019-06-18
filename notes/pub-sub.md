# Pub-Sub
- enterprise messaging transport system, messaging middleware, takes data from many senders and sends to many receivers asyncronously
- publisher apps create and send messages to a topic
- subscriber apps subscribe to a topic to receive messages (either push or pull method)
- once acknowledged by subscriber, messages are deleted from the queue
- one queue per subscription is maintained
- Forwarder and router -
- push subscribers - any app that can make a https request to googleapis.com
- pull subscribers - webhook endpoint that can process a https POST requests

## use cases
- balance workload in a network cluster
- anyncronous order processing
- distribute event notifications
- refresh distributed caches
- data streaming
