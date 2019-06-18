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
- Components
  - Metastore - Metastore is the central repository of Apache Hive metadata in the Hive Architecture. It stores metadata for Hive tables (like their schema and location) and partitions in a relational database. 
  - Driver - It acts like a controller which receives the HiveQL statements. The driver starts the execution of the statement by creating sessions. It monitors the life cycle and progress of the execution. Driver stores the necessary metadata generated during the execution of a HiveQL statement. It also acts as a collection point of data or query result obtained after the Reduce operation.
  - Compiler - The compiler in Hive converts the query to an Abstract Syntax Tree (AST). First, check for compatibility and compile-time errors, then converts the AST to a Directed Acyclic Graph (DAG).
  - Optimizer - It performs various transformations on the execution plan to provide optimized DAG. It aggregates the transformations together, such as converting a pipeline of joins to a single join, for better performance. The optimizer can also split the tasks, such as applying a transformation on data before a reduce operation, to provide better performance.
  - Executor
  - CLI, UI and Thrift server - CLI (command-line interface) provides a user interface for an external user to interact with Hive. Thrift server in Hive allows external clients to interact with Hive over a network, similar to the JDBC or ODBC protocols.
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
