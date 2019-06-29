# read from a cloud storage bucket and process using cloud dataproc, finally write into another file

from pyspark.sql import SparkSession
from pyspark.sql.types import *
import json,time

start=time.time()

spark = SparkSession.Builder().appName("csv").master("local[2]").getOrCreate()

sc = spark.sparkContext


data = spark.read.format("csv").\
        option("inferSchema","true").\
        option("mode","FAILFAST").\
        option("header","true").\
        load("gs://ktewary-spark-work/names.txt")

