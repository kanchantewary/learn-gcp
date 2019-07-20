# Apache Pig
## Resources
- https://cwiki.apache.org/confluence/display/PIG/Pig+Training

- high level data flow tool, abstraction over hadoop map-reduce
- two main components - pig latin (SQL-like scripting language) and pig execution
- built-in support for join, filter, sort
- supports nested data types like tuples, bags(collection of a set of tuples), maps(set of key-value pairs). Atoms are the basic data types like string(chararray), int, float, long
  - int
  - long
  - float
  - double
  - chararray - string
  - bytearray - blob
  - tuple
  - bag
  - map
- map example: [1#red,2#blue,3#green]
- udf support
- grunt shell - interactive shell for pig commands
- run modes (ExecType)
  - mapreduce mode - uses hdfs (default)
  - local mode - uses local file system
  ```
  # run in interactive local mode 
  pig -x local
  # run in interactive mapreduce mode
  pig -x
  # run a pig script
  pig -x myscript.pg
  ```
- Most Pig operators take a relation (an outer bag) as input and in turn emits a relation (except LOAD, DUMP, STORE)
- common operators
  - LOAD - read data from a source and place in a relation
    - BinStorage
    - PigStorage('field delimiter')
    - TextLoader
    - JsonLoader
    - custom load function
  ```
  load 'MyDir/file1.txt' using PigStorage(',') as (f1:integer,f2:chararray, f3:float)
  load 'MyDir/' using PigStorage(',') as (f1:integer,f2:chararray, f3:float)  --all files are read
  ```
  - STORE - save results to a file
    - PigStorage()
    - BinStorage()
    - JsonStorage()
    - PigDump()
  ```
  STORE alias INTO <directory> [using function]; --function would be one of the above, if nothing is mentioned, PigStorage would be used as default
  ```
  - DUMP - writes results to the console
  - FOREACH - projects fields into a new relation
  - FILTER - select tuples from a relation based on a filter criteria
  - JOIN
  - ORDER BY
  - DISTINCT
  - GROUP
  - COGROUP - used to group multiple relations at the same time
```
data = load ..
b= filter data by pubyear==2003;
c= order data by author ASC;
alias = GROUP alias by <all||expression> [PARTITION BY partitioner][PARALLEL n]
# emp=id,dept,income
# dept=did,name
x= cogroup emp by dept, dept by did;
alias= FOREACH {block|nested block}
x = load
out = foreach x generate x1,x2,x1+x2 as f1:int;
```
- storage type
- case sensitivity - keywords and operators are not case-sensitive, but function names, names of fields and relations are.
- parameter substitution
```
pig -param_file myparams.txt myscript.pg --pass a list of parameters from a file (the file should have a name-value pair e.g. dir='/labfiles')
pig -param dir='/labfiles' myscript.pig --pass a single parameter in command line
a=load '$dir/file1.txt' as PigStorage('\t') --how a parameter $dir being used inside a script

```
- Functions
  - AVG - computes average of number values in a single column bag
  - CONCAT - concatenates two columns
  - COUNT - counts the number of elements in a bag, requires a preceding group by clause
  - COUNT_STAR - counts the number of elements in a bag
  - DIFF - compares two fields in a tuple
  - IsEmpty - checks if a tuple or bag is empty
  - MAX
  - MIN
  - SIZE
  - SUM
  - TOKENIZE
  - TOTUPLE
  - TOBAG
  - TOMAP
  - Math functions e.g. ABS, CEIL
  - string functions e.g. STRSPLIT, SUBSTRING, REPLACE, REGEX_EXTRACT, REGEX_EXTRACT_ALL
  - MAPREDUCE
  - STREAM
  - UDF - DEFINE and REGISTER
  - fs
  - EXPLAIN
  
