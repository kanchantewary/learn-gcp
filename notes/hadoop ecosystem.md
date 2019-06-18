# Hadoop and Hadoop Eco-system
## Hadoop
## MapReduce
## HDFS
## Yarn
- Resource Manager
- Node Manager
- Scheduler policies
  - FIFO scheduer
  - Capacity scheduler
  - Fair scheduler
## Hive
open source data warehouse system built on top of Hadoop Haused for querying and analyzing large datasets stored in Hadoop files
## Pig
- available in dataproc
- works well with unstructured, incomplete data
- can work directly on files in hdfs
- Pig Latin is a procedural language (like SQL) for ETL tasks
- Following are the major components
  - Parser - creates a DAG from the input script, performs type checking and other checks
  - Optimizer - DAG is optimized, e.g. projection and push down
  - Compiler - compiles into a series of mapreduce jobs
  - Execution Engine - submits to hadoop (executes)
 - Pros - lazy evaluation, less development time, procedural language, UDF supported
 - Cons - slow, not mature, support is difficult
