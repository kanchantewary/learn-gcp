# cloud spanner

google proprietory, provides horizontal scaling, on the fly
use when we need strong consistency, very high availability and data is relational (structured)
strongly typed schemas are there, relational data model
every table must have a primary key
rows are stored in sorted order of the primary key
interleaving - child rows are inserted between parent rows with the primary key
fast sequential access like hbase
choosing primary key - avoid hot spotting problem
parent-child relationship - upto 7 levels of nesting are supported
splits - 
transaction modes - locking read write, read only, one-off read,
staleness - 

