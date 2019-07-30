# Cloud storage
- Object - Objects are the individual pieces of data that you store in Cloud Storage. 
  - two components, object data and object metadata. objects are the files that we store in cloud storage. object metadata is a collection of name-value pairs that describe various object qualities.
  - object metadata
    - fixed key - keys are predefined, values can be set
      - Access control metadata
      - Cache-Control
      ```
      Cache-Control=no-cache
      Cache-Control:private
      Cache-Control:no-transform
      ```
      
      - Content-Disposition
      - Content-Encoding
      ```
      Content-Encoding: gzip
      Accept-Encoding: gzip
      ```
      - Content-Language
      - Content-Type
      ```
      Content-Type: text/plain
      ```
    - custom key - when both key and value is specified by user
- Transcoding - automatic changing of a file's compression before it's served to a requester
