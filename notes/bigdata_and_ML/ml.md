# Machine Learning
# Pre-work

Rule #1: Don't be afraid to launch a product without machine learning
Refer https://developers.google.com/machine-learning/glossary/#training
Refer https://developers.google.com/machine-learning/problem-framing/cases

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
- Hyperparameters are the configuration settings used to tune how the model is trained.
- Derivative of (y - y')2 with respect to the weights and biases tells us how loss changes for a given example
  - Simple to compute and convex
- So we repeatedly take small steps in the direction that minimizes loss. We call these Gradient Steps (But they're really negative Gradient Steps). This strategy is called Gradient Descent
- weight initialization
  - For convex problems, weights can start anywhere (say, all 0s)
    - Convex: think of a bowl shape
    - Just one minimum
  - Foreshadowing: not true for neural nets
    - Non-convex: think of an egg crate
    - More than one minimum
    - Strong dependency on initial values

Stochastic Gradient Descent(SGD) & Mini-Batch Gradient Descent
- Could compute gradient over entire data set on each step, but this turns out to be unnecessary
- Computing gradient on small data samples works well
- On every step, get a new random sample
- Stochastic Gradient Descent: one example at a time
- Mini-Batch Gradient Descent: batches of 10-1000
- Loss & gradients are averaged over the batch

/*A Machine Learning model is trained by starting with an initial guess for the weights and bias and iteratively adjusting those guesses until learning the weights and bias with the lowest possible loss.*/

- Hyperparameters are the knobs that programmers tweak in machine learning algorithms. Most machine learning programmers spend a fair amount of time tuning the learning rate. If you pick a learning rate that is too small, learning will take too long.
- There's a Goldilocks learning rate for every regression problem. The Goldilocks value is related to how flat the loss function is. If you know the gradient of the loss function is small then you can safely try a larger learning rate, which compensates for the small gradient and results in a larger step size.

# working with unstructured data
- image classification
- pre-built models offered as services
  - cloud speech to text
  - cloud text to speech
  - cloud vision api(https://cloud.google.com/vision/#resources)
    - label detection
    - face detection
    - OCR (optical character recognition)
    - explicit content e.g. violent
    - landmark detection
    
  - [dialogflow](https://dialogflow.com/) for chatbots e.g.
    - content categorization
    - multi-language support
    - sentiment analysis of the overall conversation
    - integration with major messanger platforms, e.g. fb, slack, skype, twitter
  - cloud natural language api
    - sentiment analysis
  - cloud translation api
  - cloud video intelligence api
  - [cloud Auto-ML](https://cloud.google.com/automl/)
    - autoML vision(https://cloud.google.com/vision/automl/docs/)
    - precision, recall, [confusion metrics](https://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/)
  - custom model
    - use BQML
    - [use tensorflow,keras on GCP](https://www.tensorflow.org/tutorials/)
    
