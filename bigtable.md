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
each column family is stored in separate data file


