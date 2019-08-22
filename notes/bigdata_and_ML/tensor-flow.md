# Tensor Flow
## Resources
https://developers.google.com/machine-learning/crash-course/
https://colab.research.google.com/notebooks/welcome.ipynb

estimators - high level OOP API
tf.layers, tf.losses, tf.metrics - reusable libraries

example:
```
import tensorflow as tf

# Set up a linear classifier.
classifier = tf.estimator.LinearClassifier(feature_columns)

# Train the model on some example data.
classifier.train(input_fn=train_input_fn, steps=2000)

# Use it to predict.
predictions = classifier.predict(input_fn=predict_input_fn)
```

https://www.tensorflow.org/tutorials/

# GCP coursera DE - course 4 - notes

label - correct output for an input
input - known values which can be provided to find the prediction
example - label+input
model - math function which takes an example and provides an approximated output
clustering
supervised learning - regression and classification
ML pipeline
the need to predict a value should be repeating need, and not a one-off requirement, to be able to successfully leverage ML
