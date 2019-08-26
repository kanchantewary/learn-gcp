# Cloud Functions
- Google Cloud Functions is a serverless execution environment for building and connecting cloud services. 
- write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services (e.g. Listen and respond to a file upload to Cloud Storage, a log change, or an incoming message on a Cloud Pub/Sub topic, changes to data in a database, or a new virtual machine instance being created). refer https://cloud.google.com/functions/docs/concepts/events-triggers
- run it in any standard Node.js (Node.js 6, 8 or 10), Python 3 (Python 3.7) or Go (Go 1.11) environment

Use case | Description
---|---
Data processing / ETL	| Listen and respond to Cloud Storage events such as when a file is created, changed, or removed. Process images, perform video transcoding, validate and transform data, and invoke any service on the internet from your Cloud Functions.
Webhooks | Via a simple HTTP trigger, respond to events originating from 3rd party systems like GitHub, Slack, Stripe, or from anywhere that can send HTTP requests.
Lightweight APIs | Compose applications from lightweight, loosely coupled bits of logic that are quick to build and that scale instantly. Your functions can be event-driven or invoked directly over HTTP/S.
Mobile backend | Use Google’s mobile platform for app developers, Firebase, and write your mobile backend in Cloud Functions. Listen and respond to events from Firebase Analytics, Realtime Database, Authentication, and Storage.
IoT | Imagine tens or hundreds of thousands of devices streaming data into Cloud Pub/Sub, thereby launching Cloud Functions to process, transform and store data. Cloud Functions lets you do it in a way that’s completely serverless.
