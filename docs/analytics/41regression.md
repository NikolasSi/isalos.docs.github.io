---
layout: default
title: 4.1 Regression
parent: 4. Analytics
nav_order: 1
permalink: /regression.html
---

# Regression
{: .no_toc }
Regression is a typical supervised learning task in predictive modelling that aims to investigate the relationship between a set of independent features and a dependent target variable. Regression analysis algorithms are employed when the target variable is a continuous numeric value.<sup>[1](#references-regression)</sup>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## k Nearest Neighbors (kNN)

k Nearest Neighbors (kNN) is a simple non-parametric algorithm that operates by identifying the data points from the training set that are most proximate to a new unseen input. This instance-based learning method determines the closeness of data points by calculating the Euclidean distance between instances considering all attribute values. The _k_ parameter denotes the number of nearest neighbors to consider.<sup>[2](#references-regression)</sup> The target value for a new instance is predicted by averaging the distance-weighted target values of the _k_ nearest data points. As calculations of Euclidean distances are performed, scaling of data is performed within the function.

Use the `k Nearest Neighbors (kNN)` function by browsing in the top ribbon:

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ k Nearest Neighbors (kNN)|

### Input
{: .no_toc}
Data matrix with training set data.

### Configuration
{: .no_toc}

|**Target Column**| Select from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features cannot be selected as targets.|
|**Number of Neighbors**| An integer representing the number of closest neighbours-data points (_k_) used to make predictions for a new data point.|

### Output
{: .no_toc}
A data matrix including the actual target value and the value predicted by the algorithm ("kNN Prediction"). For each data point, the closest neighbors from the training set are listed in the "Closest NN" columns, along with their corresponding distances in the "Distance from NN" columns.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. 

<div style="text-align: center;">
<img src="images/Regression/knn-input.png" alt="kNN input" width="500" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1. Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `k Nearest Neighbors (kNN)`.
1. Select the column that is going to be predicted from the drop-down menu [1]. The columns containing categorical features are automatically excluded from the list.
1. Type the `Number of Neighbors` [2] to consider.
1. Click on the `Execute` button [3] to apply the algorithm on the input table.

<div style="text-align: center;">
<img src="images/Regression/knn.svg" alt="kNN" width="400" height="300" class="img-responsive">
</div> 

##### Output
{: .no_toc }
In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented. Also, the _k_ most proximate identified instances from the training set are given for each data point (5 in this case), along with the corresponding Euclidean distances from each neighbor. Note that the  "Closest NN1" represents the nearest neighbor, which is the data point itself when applied on the training set. Consequently, the "Distance from NN1" is 0 for all given training instances.

<div style="text-align: center;">
<img src="images/Regression/knn-output.png" alt="kNN output" width="700" height="900" class="img-responsive">
</div> 

##### Application on external set
{: .no_toc }
You can apply the trained `k Nearest Neighbors (kNN)` model to any external (test) data using the [`Existing Model Utilization`](https://www.docs.isalos.novamechanics.com/existing-model-utilization.html) function:

1. Import the external data in the left-hand spreadsheet of the tab. Include the same columns used to build the kNN model.
1. Select `Analytics` $$\rightarrow$$ `Existing Model Utilization`. Select the trained kNN model [1] and click on the `Execute` button [2].

<div style="text-align: center;">
<img src="images/Regression/knn-application.svg" alt="kNN application" width="400" height="300" class="img-responsive">
</div> 

{:style="counter-reset:none"}
1. Inspect the results in the right-hand spreadsheet of the tab. Note that in this case the closest neighbor listed in the "Closest NN1" belongs to the training set, and the "Distance from NN1" is not zero.

<div style="text-align: center;">
<img src="images/Regression/knn-application.png" alt="kNN application" width="700" height="900" class="img-responsive">
</div> 

---

## Multiple Layer Perceptron (MLP)

A multiple layer perceptron (MLP) is a type of feedforward artificial neural network consisting of multiple layers of neurons. It consists of an input layer, one or more hidden layers and an outer layer, which are fully connected with each other. A variety of non-linear activation functions are typically used in the hidden layer, allowing the network to learn complex patterns in data. MLP uses a backpropagation algorithm to train the model and classify instances.<sup>[1,2](#references-regression)</sup>

Use the `Multiple Layer Perceptron (MLP)` function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Multiple Layer Perceptron (MLP)|

### Input
{: .no_toc}
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be removed or encoded into numerical values.

### Configuration
{: .no_toc}

| **Batch Size** | Select from the drop-down menu the number of training instances that will be propagated through the network. Four options are available for selection: `16`, `32`, `64`, and `128`. |
| **Number of Epochs** | Specify the number (integer) of complete passes through the data during training. |
| **Learning Rate** | Specify the learning rate (between 0 and 1), which controls the size of the steps taken during optimization. |
| **Momentum** | Specify the momentum rate (between 0 and 1) for the backpropagation algorithm. |
| **+/-** | Click on the `+` and `-` buttons to add or remove hidden layers, respectively. |
| **Hidden Layers** | For each added hidden layer, specify the number of neurons and select the non-linear activation function used to map the weighted inputs to the output of each neuron. Options for the activation functions include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `RELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `RELU6`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `LEAKYRELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SWISH`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `RRELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SIGMOID`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SOFTMAX`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SOFTPLUS`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `SOFTSIGN`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `TANH`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `THRESHOLDEDRELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `GELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `ELU`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `MISH`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `CUBE`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `HARDSIGMOID`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `HARDTANH`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `IDENTITY`, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `RATIONALTANH`, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `RECTIFIEDTANH`. |
| **Target Column** | Select from the drop-down menu the column containing the feature that is going to be predicted. |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available. |

### Output
{: .no_toc }
A data matrix including the actual target value and the value predicted by the algorithm ("Prediction") is presented. 

### Example
{: .no_toc}

##### Input
{: .no_toc}

In the left-hand spreadsheet of the tab import the data matrix including the target variable with at least two distinct categories for prediction. In case that categorical-string columns are included in the set, these should be encoded into representative numerical values.

<div style="text-align: center;">
<img src="images/Regression/mlp-input.PNG" alt="MLP input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc}

1.  Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `Multiple Layer Perceptron (MLP)`
1.  Select the hyperparameters that determine the training procedure: the `Batch Size` [1], the `Number of Epochs` [2], the `Learning Rate` [3] and the `Momentum` [4].
1.  Select the hyperparameters that determine the `Hidden Layers` [5] of the neural network: the number of neurons [6] and the activation function [7] of each layer.
1.  Add [8] or remove [9] hidden layers to define the architecture of the neural network.
1.  Select the column that is going to be predicted from the drop-down menu [10].
1.  Select a Seed for reproducible results or a random number generated `Time-based (RNG) Seed` [11].
1.  Click on the `Execute` button [12] to apply the training algorithm on the input columns.

<div style="text-align: center;">
<img src="images/Classification/mlp.svg" alt="MLP" width="550" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc}

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted values of the target is presented.

<div style="text-align: center;">
<img src="images/Regression/mlp-output.PNG" alt="MLP output" width="300" height="300" class="img-responsive">
</div>

---

## Radial basis function networks  (RBF)

Radial basis function networks (RBF) network is an artificial neural network that employs RBF kernels as activation functions. The network consists of three layers: the input layer modeling a vector that passes data, the hidden layer that performs computations and the output layer designated for regression problems. The output layer of the neural network is a linear combination of the activation (output) from the hidden units.<sup>[1, 3](#references-regression)</sup>

A Radial Basis Function is a real-valued function $φ(r)$ that is dependent only on the distance between a fixed input point ($r$) to the center ($c$) of each neuron as reference point [Eq. 1](#eq. rbf1).<sup>[3](#references-regression)</sup> 

<div id="eq. rbf1">
$$
\begin{equation}
\varphi(r) = d(\|r - c\|) {\qquad [1] \qquad}
\end{equation}
$$
</div>

The radial basis function kernels available in Isalos include:

Gaussian:

<div id="eq. rbf2">
$$
\begin{equation}
\varphi(r) = e^{-(\varepsilon r)^{2}}\end{equation}  {\qquad [2] \qquad}
$$
</div>

Multiquadric:

<div id="eq. rbf3">
$$
\begin{equation}
\varphi(r) = \sqrt{1 + (\varepsilon r)^{2}}\end{equation}  {\qquad [3] \qquad}
$$
</div>

Inverse Quadratic:

<div id="eq. rbf4">
$$
\begin{equation}
\varphi(r) = \frac{1}{1 + (\varepsilon r)^{2}}\end{equation}  {\qquad [4] \qquad}
$$
</div>

Inverse Multiquadric:

<div id="eq. rbf5">
$$
\begin{equation}
\varphi(r) = \frac{1}{\sqrt{1 + (\varepsilon r)^{2}}}\end{equation}  {\qquad [5] \qquad}
$$
</div>

Polyharmonic spline:

<div id="eq. rbf6">
$$
\begin{equation}
\varphi(r) = 
\begin{cases}
r^{k}, \: k = 1, 3, 5, \ldots \\
r^{k} \ln(r), \: k = 2, 4, 6, \ldots
\end{cases}
\end{equation} {\qquad [6] \qquad}
$$
</div>

where $k$ is the order of the spline.

Thin Plate Spline:

<div id="eq. rbf7">
$$
\begin{equation}
\varphi(r) = r^{2} \ln(r)\end{equation}  {\qquad [7] \qquad}
$$
</div>

Bump Function:

<div id="eq. rbf8">
$$
\begin{equation}
\varphi(r) = 
\begin{cases}
\exp\left( -\frac{1}{1 - (\varepsilon r)^{2}} \right), \: \text{ if } r < \frac{1}{\varepsilon}, \\
0, \: \text{ otherwise }
\end{cases}
\end{equation}  {\qquad [8] \qquad}
$$
</div>

where $\varepsilon$ is the shape parameter used to scale the input of the radial kernel.

Use the `Radial Basis Function (RBF)` regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Radial Basis Function (RBF)|

### Input
{: .no_toc }
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be removed or encoded into numerical values. RBF does not allow the use of integer or string input.

### Configuration
{: .no_toc }

| **Hidden Neurons** | Specify the number of neurons in the hidden layer of the network.|
| **RBF Kernel** | Select from the drop-down menu the radial basis function kernel. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `GAUSSIAN` [Eq. 2](#eq. rbf2), <br> &nbsp;&nbsp;&nbsp;&nbsp;- `MULTIQUADRIC` [Eq. 3](#eq. rbf3), <br> &nbsp;&nbsp;&nbsp;&nbsp;- `INVERSE QUADRATIC` [Eq. 4](#eq. rbf4), <br> &nbsp;&nbsp;&nbsp;&nbsp;- `INVERSE MULTIQUADRIC` [Eq. 5](#eq. rbf5), <br> &nbsp;&nbsp;&nbsp;&nbsp;- `POLYHARMONIC SPLINE` [Eq. 6](#eq. rbf6), <br> &nbsp;&nbsp;&nbsp;&nbsp;- `THIN PLATE SPLINE` [Eq. 7](#eq. rbf7), and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `BUMP FUNCTION` [Eq. 8](#eq. rbf8). <br> A new configuration field appears accordingly after `RBF Kernel` selection, for the selection of `Epsilon` ($\varepsilon$) shape parameter or `K` ($k$) where applicable.|
| **Point Selection** | Select manually the way that determines how the centers of the neural network are chosen. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Random Points from Training set`: chosen randomly from the training data. <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Use KMeans`: RBF centers are the cluster centers of the partitioned training data.|
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available.|
| **Target Column** | Select from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features cannot be selected as targets. |

### Output
{: .no_toc }
A data matrix including the actual target value and the value predicted by the algorithm ("Prediction") is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. Note that the "Species" categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/rbf-input.png" alt="Rbf input" width="500" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }
1. Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `Radial Basis Function (RBF)`
1. Type the number (integer) of `Hidden Neurons` [1].
1. Select the `RBF Kernel` [2] used as activation function of the hidden layer and subsequently select the `Epsilon` [3] or `K` parameter where applicable.
1. Select the `Point Selection` [4] method to determine the center of the network.
1. Type an `RNG Seed` for reproducible results or a random number generated `Time-based (RNG) Seed` [5].
1. Select the `Target Column` that is going to be predicted from the drop-down menu [6]. Columns with categorical features cannot be selected as targets. 
1. Click on the `Execute` button [7] to proceed with training.

<div style="text-align: center;">
<img src="images/Regression/rbf.svg" alt="Rbf configuration" width="400" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc }
In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target variable is presented. 

<div style="text-align: center;">
<img src="images/Regression/rbf-output.png" alt="Rbf output" width="400" height="400" class="img-responsive">
</div> 

---

## Linear SGD

Stochastic Gradient Descent (SGD) is a method used to minimize an objective (loss) function, which measures the error between the actual values and the predicted outcomes of data points. SGD is employed to incrementally fit various linear regressors by iteratively updating the parameters of a linear model. At each step, it estimates the gradient of the loss function and adjusts the parameters using a constant or decreasing learning rate. Unlike traditional gradient descent, which processes the entire training set in each iteration, SGD operates on a small batch of the training data, enabling faster convergence.<sup>[1,5](#references-regression)</sup>

Use the `Linear SGD` regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Linear SGD|

### Input
{: .no_toc }
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be removed or encoded into numerical values. Linear SGD does not allow the use of integer or string input.

### Configuration
{: .no_toc }

| **Target Column** | Select from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features cannot be selected as targets. |
| **Loss function** | Select manually from the drop-down menu the objective function to be minimized. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Squared Loss`: average of the squared errors, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Absolute Loss`: average of the absolute differences, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Huber` Loss: combination of Squared Loss and Absolute Loss. |
| **Optimizer** | Select manually the gradient optimizer from the drop-down menu. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Linear Decay SGD`: decreasing learning rate over time <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Simple SGD`: constant learning rate through training <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Squared Root Decay SGD`: learning rate is decreasing inversely to the number of iterations. |
| **Learning rate** | Specify the initial step size (between 0 and 1) used in the iterative optimization procedure (default value: 0.1). |
| **Number of epochs** | Specify the number (integer) of complete passes through the data during training (default value: 10). |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available. |

### Output
{: .no_toc }

A data matrix including the actual target value and the value predicted by the algorithm ("Prediction") is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. Note that the  "Species" categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/sgd-input.png" alt="Rbf output" width="500" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }

1.   Select `Analytics`$$\rightarrow$$ `Regression`$$\rightarrow$$ `Linear SGD`.
1.   Select the column containing the target variable that is going to be predicted from the drop-down menu [1]. Columns with categorical features cannot be selected as targets. 
1.   Select the `Loss function` [2] and the gradient `Optimizer` [3] from the drop-down menus.
1.   Type the hyperparameters that determine the structure of the model: the `Learning rate` [4] and the `Number of epochs`[5]. Default values, data types (double or integer) and acceptable ranges are indicated as guidance on the input parameter values.
1.   Type an `RNG Seed` for reproducible results or a random number generated `Time-based (RNG) Seed` [6].
1.   Click on the `Execute` button [7] to apply the training algorithm on the input data.

<div style="text-align: center;">
<img src="images/Regression/sgd.svg" alt="SGD" width="400" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented.

<div style="text-align: center;">
<img src="images/Regression/sgd-output.png" alt="SGD" width="300" height="300" class="img-responsive">
</div> 

---

## XGBoost 

The Extreme Gradient Boosting (XGBoost) open-source library<sup>[6](#references-regression)</sup> is used to implement the gradient boosting framework. The library uses a class of ensemble machine learning algorithms constructed from decision tree models. Ensemble learning operates by combining different individual base learners to obtain a final prediction.<sup>[7](#references-regression)</sup> In an iterative process, trees are added to the ensemble so that the prediction error (loss) of previous models is reduced. In regression problems, the mean squared error is used as loss function.<sup>[8](#references-regression)</sup>

Use the `XGBoost` regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ XGBoost|

### Input
{: .no_toc }

Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be removed or encoded into numerical values (integer or double). 

### Configuration
{: .no_toc }

| **Target Column** | Select from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features cannot be selected as targets. |
| **booster** | Select from the drop-down menu which booster to use. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `gbtree`: default tree-based models, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `dart`: tree-based models, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `gblinear`: linear functions. |
| **objective** | Select from the drop-down menu the learning objective of the method. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `reg:squarederror`: regression with squared loss, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `reg:gamma`: gamma regression with log-link, whose output is a mean of gamma distribution, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `reg:tweedie`: tweedie regression with log-link. |
| **number of estimators** | Type the number of models (integer) to train in the learning ensemble. |
| **eta** | Specify the learning rate (between 0 and 1) which determines the step size shrinkage to prevent overfitting (default value: 0.3). |
| **gamma** | Specify the minimum loss reduction required to make a further partition on a leaf node of the tree (default value: 0). |
| **max depth** | Specify the maximum depth of a tree as a positive integer (default value: 6). |
| **min child weight** | Specify the minimum sum of instance weight (hessian) needed in a child (default value: 1). |
| **column sample by tree** | Specify the subsample ratio of features when constructing each tree. Subsampling will occur once for every tree constructed. |
| **sub sample** | Specify the subsampling ratio (between 0 and 1) of the training instances. Subsampling will occur once in every boosting iteration (default value: 1). |
| **tree method** | Select the tree construction algorithm used in XGBoost. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `auto`: use this heuristically to choose the fastest method typically based on the dataset size, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `exact`: exact greedy algorithm, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `approx`: approximates the greedy algorithm using quantile sketch and gradient histogram, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `hist`: fast histogram optimized approximate greedy algorithm. |
| **lambda** | Specify the L2 regularization term on leaf weights (default value: 1). |
| **alpha** | Specify the L1 regularization term on leaf weights (default value: 0). |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available by clicking on the `Time-based RNG Seed` checkbox. |

### Output 
{: .no_toc }
A data matrix including the actual target value and the value predicted by the algorithm ("Prediction") is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. Note that the  "Species" categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/xgboost-input.png" alt="XGBoost input" width="500" height="400" class="img-responsive">
</div> 

##### Configuration 
{: .no_toc }

1.   Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `XGBoost` .
1.   Select the column that is going to be predicted from the drop-down menu [1]. 
1.   Select the tree `booster` [2] method, the `objective` function [3] for loss and type the `number of estimators` [4] involved in the ensemble. 
1.   Select the hyperparameters involved in the regularization of the model: `eta` [5], `gamma` [6], `lambda` [12] and `alpha` [13]. Select the hyperparameters involved in tree construction: `max depth` [7] and` min child weight` [8]. Select the column sampling rate by tree [9] and the overall subsampling rates [10]. Default values, data types (double or integer) and acceptable ranges are indicated as guidance on the input parameter values.
1.   Select the tree construction algorithm [11] used in the XGBoost.
1.   Type an `RNG Seed` for reproducible results or a random number generated `Time-based RNG Seed` [14].
1.   Click on the `Execute` button [15] to apply the training algorithm on the input data. 

<div style="text-align: center;">
<img src="images/Regression/xgboost.svg" alt="XGBoost" width="450" height="400" class="img-responsive">
</div> 

##### Output 
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target variable is presented.

<div style="text-align: center;">
<img src="images/Regression/xgboost-output.png" alt="XGBoost output" width="400" height="400" class="img-responsive">
</div> 
---

## Random Forest

Random forest regressor is an ensemble learning method that operates by building multiple randomized decision trees during training and obtaining the prediction of the individual trees. The decision trees are constructed in parallel, with no interaction between them, using random subsets of training data and input attributes to ensure diversity. Predictions independently made by all the trees in the forest are aggregated and averaged to produce a final prediction.<sup>[7,9](#references-regression)</sup>

Use the `Random Forest` function by browsing in the top ribbon:

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Random Forest|

### Input
{: .no_toc }

Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be excluded or encoded into numerical values (integer or double). 

### Configuration
{: .no_toc }

| **Features fraction** | Specify the feature subsampling rate represented as a fraction of features (between 0 and 1) available in each tree split (default value: 0.9). |
| **Min impurity decrease** | Specify the impurity decrease threshold (between 0 and 1) necessary to determine the quality of splits in the decision trees. A split is only considered if it results in a decrease of impurity greater than or equal to this value (default value: 0.1). |
| **Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available. |
| **Number of ensembles** | Specify the number of individual trees to be generated by the algorithm (default value: 10). |
| **Target column** | Select manually from the drop-down menu the column name containing the target variable that is going to be predicted. |


### Output
{: .no_toc }

A data matrix including the actual target value and the value predicted by the algorithm ("Prediction") is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. Note that the  "Species" categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/random-forest-input.png" alt="Random Forest input" width="500" height="400" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1.   Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `Random Forest`.
1.   Specify the hyperparameters that determine the structure of the model: the `Features fraction` [1], `Min impurity decrease` [2] and `Number of ensembles` [4]. Default values, data types (double or integer) and acceptable ranges are indicated as guidance on the input parameter values.
1.   Type a `Seed` for reproducible results or a random number generated `Time-based RNG Seed` [3].
1.   Select the column name with the target variable that is going to be predicted from the drop-down menu [5].
1.   Click on the `Execute` button [6] to apply the training algorithm on the input columns

<div style="text-align: center;">
<img src="images/Regression/random-forest.svg" alt="Random Forest" width="400" height="400" class="img-responsive">
</div>

##### Output
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented.

<div style="text-align: center;">
<img src="images/Regression/random-forest-output.png" alt="Random Forest" width="350" height="400" class="img-responsive">
</div>

---

## Tips

k Nearest neighbors:
*   It works more efficiently for small to medium datasets and low-dimensional data. kNN is sensitive to missing data.
*   The performance of the model is highly influenced by the selection of _k_.

RBF:
*   The number of neurons in the hidden layer has a high impact on the model performance, since a large number of neurons can lead to overfitting.

Linear SGD:
*   It is effective in large datasets and can handle high-dimensional feature spaces. Higher learning rates may be required when Huber loss is selected, because it is less sensitive to outliers.
*   Consider scaling the input data with a [`Z score`](https://www.docs.isalos.novamechanics.com/normalizers.html) normalizer to center them to mean and have a unit standard deviation.

XGBoost:
*   Be cautious during hyperparameter tuning: Choosing smaller `eta` values, as well as increasing the `lambda`, `alpha` and `gamma` values result in a more conservative boosting process. Increasing the value of `max depth` parameter makes the model more complex, more likely to overfit.

Random Forest:
*   This algorithm performs well with datasets that contain missing values. However, it is not as efficient with a large number of sparse features or with categorical variables of many levels that are improperly encoded.

## See also 

The model generated by either the `k Nearest Neighbors (kNN)`, `Multiple Layer Perceptron (MLP)`, `Radial Basis Function (RBF)`, `Linear SGD`, `XGBoost` or `Random Forest` algorithms can be applied to any input data through the [`Existing Model Utilization`](https://www.docs.isalos.novamechanics.com/existing-model-utilization.html) function (e.g., a regression algorithm trained from the training set data of a machine learning model can be applied to the test/external set data).

### Workflows
{: .no_toc }


## References {#references-regression}
1.	Witten Ian H and Frank, Eibe and Hall, Mark A and Pal CJ. Data Mining: Practical Machine Learning Tools and Techniques. Fourth. Morgan Kaufmann; 2011. [https://doi.org/10.1016/C2009-0-19715-5](https://doi.org/10.1016/C2009-0-19715-5).
1. 	Murphy KP. Machine Learning: A Probabilistic Perspective. The MIT Press; 2012. [10.5555/2380985](https://dl.acm.org/doi/book/10.5555/2380985).
1.	Lee C-C, Chung P-C, Tsai J-R, Chang C-I. Robust radial basis function neural networks. IEEE Transactions on Systems, Man, and Cybernetics, Part B (Cybernetics) 1999;29:674–85. [https://doi.org/10.1109/3477.809023](https://doi.org/10.1109/3477.809023). 
1.	Ghosh J, Nag A. An Overview of Radial Basis Function Networks. In: Howlett RJ, Jain LC, editors. Radial Basis Function Networks 2: New Advances in Design, Heidelberg: Physica-Verlag HD; 2001, p. 1–36. [https://doi.org/10.1007/978-3-7908-1826-0_1](https://doi.org/10.1007/978-3-7908-1826-0_1).
1.	Bottou L. Large-Scale Machine Learning with Stochastic Gradient Descent. In: Lechevallier Y, Saporta G, editors. Proceedings of COMPSTAT’2010, Heidelberg: Physica-Verlag HD; 2010, p. 177–86. [https://doi.org/10.1007/978-3-7908-2604-3_16](https://doi.org/10.1007/978-3-7908-2604-3_16).
1.	XGBoost Parameters — xgboost 2.1.0-dev documentation n.d. [https://xgboost.readthedocs.io/en/latest/parameter.html](https://xgboost.readthedocs.io/en/latest/parameter.html) (accessed June 3, 2024). 
1.	Hastie T, Tibshirani R, Friedman J. The Elements of Statistical Learning. New York, NY: Springer New York; 2009. [https://doi.org/10.1007/978-0-387-84858-7](https://doi.org/10.1007/978-0-387-84858-7).
1.	Chen T, Guestrin C. XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016, p. 785–94. [https://doi.org/10.1145/2939672.2939785](https://doi.org/10.1145/2939672.2939785).
1.	Breiman L. Random Forests. Machine Learning 2001;45:5–32. [https://doi.org/10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324).

---

## Version History
Introduced in Isalos Analytics Platform v0.1.18

_Instructions last updated on July 2024_

