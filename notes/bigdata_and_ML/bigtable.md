# big table
big table is basically managed HBase in GCP environment
columnar database i.e. data are stored in column-wise manner
stores data in sequential sorted order, sensitive to hot spotting, like cloud spanner

## Properties of HBase:
columnar storage
denormalized

## Advantages of columnar storage:
sparse tables - useful if the table has many empty values
dynamic attributes - adding a new column does not alter storage structure
primary objective of normalization is saving storage space (monolithic application architecture)
where as, in a distributed computing environment, storage is not the contraint (rather cheap), rather the disk seek time. hence the structures should be denormalized in distributed world, to achieve faster performance

supports only CRUD operations, not other sql functions like order by, group by, joins and other aggregation operations. 
does not support index(except on rowkey) or constraints. so fundamentally, all related data should be available in one row.

## data layout
column families - refers to table basically, set of logically related columns, it also acts like a namespace (a column should be specified along with it's column family)
each column family is stored in separate data file. column families should be specified during schema definition time (they can not be created on the fly)

any value can be uniquely identified using row key, column family, column and timestamp(version) (4 dimensions). if timestamp is not mentioned, latest is returned by default.
a row key can be primitive data types as well as struct or array. internally stored as byte array. stored in ascending sort order.

## performance


# HBase commands - basics
```
list #lists all tables
create 'test','cf' #creates a table test, with column family named cf
list 'test' #lists table test, basically tells if the table exist
describe 'test'
put 'test', 'row1', 'cf:a', 'value1'
put 'test', 'row2', 'cf:b', 'value2'
put 'test', 'row3', 'cf:c', 'value3'
scan 'test' #scan the table for data
get 'test', 'row1' # return single row at a time
disable 'test' # disable a table
enable 'test' # enable a table
drop 'test' # drop a table
```
