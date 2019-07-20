# Apache Pig
- high level data flow tool, abstraction over hadoop map-reduce
- two main components - pig latin and pig execution
- built-in support for join, filter, sort
- supports nested data types like tuples, bags(collection of a set of tuples), maps(set of key-value pairs). Atoms are the basic data types like string, int, float, long
- udf support
- grunt shell - interactive shell for pig commands
- run modes (ExecType)
  - mapreduce mode - uses hdfs (default)
  - local mode - uses local file system
  ```
  pig -x local
  ```
- common operators
  - LOAD
  - FOREACH
  - FILTER
  - JOIN
  - ORDER BY
  - STORE
  - DISTINCT
  - GROUP
  - COGROUP
  - DUMP
 - storage type
