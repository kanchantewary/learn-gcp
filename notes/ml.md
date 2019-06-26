# Machine Learning
# Pre-work

Rule #1: Don't be afraid to launch a product without machine learning
Refer https://developers.google.com/machine-learning/glossary/#training

Framing
- supervised ML
  - labels - the variable we are trying to predict (y)
  - features - variables describing our data (x1,x2...xn)
  - labeled example - includes both feature(s) and the label. used to train the model
  - unlabeled example - contains features but not the label
    unlabeled examples: {features, ?}: (x, ?)
  - model - Once we've trained our model with labeled examples, we use that model to predict the label on unlabeled examples.
  - training - The process of determining the ideal parameters comprising a model
  - Inference means applying the trained model to unlabeled examples. 
  - regression - predicts continuous values (What is the probability that a user will click on this ad?)
  - classification - predicts discrete values (Is a given email message spam or not spam?)
  - The labels applied to some examples might be unreliable

## Linear regression
Linear regression is a method for finding the straight line or hyperplane that best fits a set of points. 
This module explores linear regression intuitively before laying the groundwork for a machine learning approach to linear regression.

y = b + w1x1 + w2x2 +w3x3 ... +wnxn (x1,x2..xn are features)

- bias - b is the bias
- weight - w1,w2 ...wn
- loss
- squared loss (L2 loss) = the square of the difference between the label and the prediction  = (observation - prediction(x))2
  = (y - y')2
- mean square loss (MSE) - Mean square error (MSE) is the average squared loss per example over the whole dataset. To calculate MSE, sum up all the squared losses for individual examples and then divide by the number of examples:
- reducing loss - To train a model, we need a good way to reduce the model’s loss. An iterative approach is one widely used method for reducing loss
