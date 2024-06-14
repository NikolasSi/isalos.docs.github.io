---
layout: default
title: 4.1 Regression
parent: 4. Analytics
nav_order: 1
permalink: /regression.html
---

# Regression
{: .no_toc }
Regression is a typical supervised learning task in predictive modelling that aims to investigate the relationship between a set of independent features and a dependent target variable. Regression analysis algorithms are employed when the target variable is a continuous numeric value. <sup>[1](#regression)</sup>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---

## k Nearest Neighbors (kNN)

k Nearest Neighbors (kNN) is a simple non-parametric algorithm that operates by identifying the data points from the training set that are most proximate to a new unseen input. This instance-based learning method determines the closeness of data points by calculating the Euclidean distance between all attribute values. The **k** parameter denotes the number of nearest neighbors to consider, and the inverted distance is used as the weighting factor. <sup>[2](#regression)</sup>

The target value for a new instance is predicted by averaging the distance-weighted target values of the **k** nearest data points.

Use the k Nearest Neighbors function by browsing in the top ribbon:

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ k Nearest Neighbors (kNN)|

### Input
{: .no_toc}
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be encoded into numerical values.

### Configuration
{: .no_toc}

|**Target Column**| Select manually from the drop-down menu the column containing the variable that is going to be predicted. Columns with categorical features should not be selected as targets.|
|**Number of Neighbors**|An integer representing the number of closest data points (k) used to make predictions for a new data point.|

### Output
{: .no_toc}
A data matrix including the actual target value and the value predicted by the algorithm (‘kNN Prediction’). For each data point, the closest neighbors from the training set are listed in the 'Closest NN' columns, along with their corresponding distances in the 'Distance from NN' columns.

### Example
{: .no_toc}
##### Input
{: .no_toc}
In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. In case that categorical-string columns are included in the set, these should be encoded into representative numerical values.

<div style="text-align: center;">
<img src="images/Regression/knn-input.png" alt="kNN input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

*   Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `k Nearest Neighbors (kNN)`.
*   Select the column that is going to be predicted from the `drop-down menu` [1]. The columns containing categorical features should not be selected for prediction.
*   Select the `Number of Neighbors` [2] to consider.
*   Click on the `Execute` button [3] to apply the training algorithm on the input columns.

<div style="text-align: center;">
<img src="images/Regression/knn.svg" alt="kNN" width="400" height="300" class="img-responsive">
</div> 

##### Output
{: .no_toc }
In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented. Also, the k most proximate identified instances from the training set are given for each data point, along with the corresponding inverted Euclidean distances from each neighbor. Note that the 'Closest NN1' represents the nearest neighbor, which is the data point itself when applied on the training set. Consequently, the 'Distance from NN1' is 0 for all given training instances.
<div style="text-align: center;">
<img src="images/Regression/knn-output.png" alt="kNN input" width="700" height="900" class="img-responsive">
</div> 

##### Application on external set
{: .no_toc }
You can apply the trained k Nearest Neighbors (kNN) model to any external (test) data using the Existing Model Utilization function:

*   Import the external data in the left-hand spreadsheet of the tab. Include the same columns used to build the k Nearest Neighbor model.
*   Select `Analytics` $$\rightarrow$$ `Existing Model Utilization`. Select the `kNN model` [1] and click on the `Execute` button [2].

<div style="text-align: center;">
<img src="images/Regression/knn-application.svg" alt="kNN application" width="400" height="300" class="img-responsive">
</div> 

*   Inspect the results in the right-hand spreadsheet of the tab. Note that in this case the closest neighbor listed in the 'Closest NN1' belongs to the training set, and the 'Distance from NN1' is not zero.

<div style="text-align: center;">
<img src="images/Regression/knn-application.png" alt="kNN application" width="700" height="900" class="img-responsive">
</div> 

---

## Radial basis function networks  (RBF)

Radial basis function networks (RBF) network is an artificial neural network that employs RBF kernels as activation functions. The network consists of three layers: the input layer modeling a vector that passes data, the hidden layer that performs computations and the output layer designated for regression problems. The output layer of the neural network is a linear combination of the activation (output) from the hidden units. [1, 3]

A Radial Basis Function is a real-valued function φ(r) that is dependent only on the distance between a fixed input point (r) to the center (c) of each neuron as reference point [Eq. 1](#eq. rbf1)<sup>[3](#regression)</sup>. 

<div id="eq. rbf1">
$$
\begin{equation}
\varphi(r) = d(\|r - c\|) {\qquad [1] \qquad}
\end{equation}
$$
</div>

The radial basis function kernels available in Isalos include:

I. Gaussian:


<div id="eq. rbf2">
$$
\begin{equation}
\varphi(r) = e^{-(\epsilon r)^{2}}\end{equation}  {\qquad [2] \qquad}
$$
</div>

II. Multiquadric:

<div id="eq. rbf3">
$$
\begin{equation}
\varphi(r) = \sqrt{1 + (\epsilon r)^{2}}\end{equation}  {\qquad [3] \qquad}
$$
</div>

III. Inverse Quadratic:


<div id="eq. rbf4">
$$
\begin{equation}
\varphi(r) = \frac{1}{1 + (\epsilon r)^{2}}\end{equation}  {\qquad [4] \qquad}
$$
</div>

IV. Inverse Multiquadric:

<div id="eq. rbf5">
$$
\begin{equation}
\varphi(r) = \frac{1}{\sqrt{1 + (\epsilon r)^{2}}}\end{equation}  {\qquad [5] \qquad}
$$
</div>

V. Inverse Multiquadric:

<div id="eq. rbf6a">
$$
\begin{equation}
\varphi(r) = r^{k}, \quad k = 1, 3, 5, \ldots\end{equation}
{\qquad [6] \qquad}
$$
</div>
<div id="eq. rbf6b">
$$
\begin{equation}
\varphi(r) = r^{k} \ln(r), \quad k = 2, 4, 6, \ldots\end{equation}  
$$
</div>

VI. Thin Plate Spline:

<div id="eq. rbf7">
$$
\begin{equation}
\varphi(r) = r^{2} \ln(r)\end{equation}  {\qquad [7] \qquad}
$$
</div>


VII. Bump Function:

<div id="eq. rbf8">
$$
\begin{equation}
\varphi(r) = \exp\left( -\frac{1}{1 - (\epsilon r)^{2}} \right) \text{ if } r < \frac{1}{\epsilon}, \text{ otherwise } 0\end{equation}  {\qquad [8] \qquad}
$$
</div>

Use the Radial Basis Function (RBF) regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Radial Basis Function (RBF)|

### Input
{: .no_toc }
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be encoded into numerical values. RBF does not allow the use of integer or string input.

### Configuration
{: .no_toc }

| **Hidden Neurons** | Specify the number of neurons in the hidden layer of the network.|
| **RBF Kernel** | Select manually from the drop-down menu the radial basis function kernel. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- Gaussian [Eq. 2](#eq.-rbf2), <br> &nbsp;&nbsp;&nbsp;&nbsp;- Multiquadric [Eq. 3](#eq.-rbf3), <br> &nbsp;&nbsp;&nbsp;&nbsp;- Inverse quadratic [Eq. 4](#eq.-rbf4), <br> &nbsp;&nbsp;&nbsp;&nbsp;- Inverse Multiquadric [Eq. 5](#eq.-rbf5), <br> &nbsp;&nbsp;&nbsp;&nbsp;- Polyharmonic Spline [Eq. 6](#eq.-rbf6a), <br> &nbsp;&nbsp;&nbsp;&nbsp;- Thin Plate Spline [Eq. 7](#eq.-rbf7), and <br> &nbsp;&nbsp;&nbsp;&nbsp;- Bump function [Eq. 8](#eq.-rbf8). <br> A new configuration field appears accordingly after **RBF Kernel** selection, for the selection of ε shape parameter or K where applicable.|
| **Point Selection** | Select manually the way that determines how the centers of the neural network are chosen. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- Random Points from Training set: chosen randomly from the training data. <br> &nbsp;&nbsp;&nbsp;&nbsp;- Use KMeans: RBF centers are the cluster centers of the partitioned training data.|
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available.|
| **Target Column** | Select manually from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features should not be selected as targets. |

### Output
{: .no_toc }
A data matrix including the actual target value and the value predicted by the algorithm (‘Prediction’) is presented. 

### Example
{: .no_toc }
##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. In case that categorical-string columns are included in the set, these should be encoded into representative numerical values and integer values should be transformed as doubles. Note that the ‘Species’ categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/rbf-input.png" alt="Rbf input" width="500" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }
*   Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `Radial Basis Function (RBF)`
*   Select the number (integer) of `Hidden Neurons` [1].
*   Select the `RBF Kernel` [2] used as activation function of the hidden layer and subsequently select the `Epsilon` [3] or `K parameter` where applicable.
*   Select the `Point Selection` [4] method to determine the center of the network.
*   Select a `Seed` for reproducible results or a random number generated `Time-based (RNG) Seed` [5].
*   Select the column that is going to be predicted from the drop-down menu [6]. The columns containing categorical features should not be selected for prediction. 
*   Click on the `Execute` button [7] to apply the normalization on the selected columns.

##### Output
{: .no_toc }
In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented. 

<div style="text-align: center;">
<img src="images/Regression/rbf-output.png" alt="Rbf output" width="500" height="400" class="img-responsive">
</div> 

---

## Linear SGB

Stochastic Gradient Descent (SGD) is an approach that minimizes an objective (loss) function that quantifies the error between the actual values and the predicted outcomes of a datapoint. SGD is implemented to incrementally fit various linear regressors by updating the parameters of a linear model in an iterative manner and estimating the gradient of the loss at each step with a constant or decreasing learning rate. In contrast to the traditional gradient descent that applied to the whole training set, SGD operates by using a small batch of the training data at each iteration, allowing faster convergence. [1,5]

Use the Linear SGD regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ Linear SGD|

### Input
{: .no_toc }
Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be encoded into numerical values. Linear SGD does not allow the use of integer or string input.

### Configuration
{: .no_toc }

| **Target Column** | Select manually from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features should not be selected as targets. |
| **Loss function** | Select manually from the drop-down menu the objective function to be minimized. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- Squared Loss: average of the squared errors, <br> &nbsp;&nbsp;&nbsp;&nbsp;- Absolute Loss: average of the absolute differences, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- Huber Loss: combination of Squared Loss and Absolute Loss. |
| **Optimizer** | Select manually the gradient optimizer from the drop-down menu. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- Linear Decay SGD: decreasing learning rate over time <br> &nbsp;&nbsp;&nbsp;&nbsp;- Simple SGD: constant learning rate through training <br> &nbsp;&nbsp;&nbsp;&nbsp;- Squared Root Decay SGD: learning rate is decreasing inversely to the number of iterations. |
| **Learning rate** | Specify the initial step size (between 0 and 1) used in the iterative optimization procedure (default value: 0.1). |
| **Number of epochs** | Specify the number (integer) of complete passes through the data during training (default value: 10). |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available. |

### Output
{: .no_toc }

A data matrix including the actual target value and the value predicted by the algorithm (‘Prediction’) is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. In case that categorical-string columns are included in the set, these should be encoded into representative numerical values and integer values should be transformed as doubles. Note that the ‘Species’ categorical column is presented as double (D).

<div style="text-align: center;">
<img src="images/Regression/sgd-input.png" alt="Rbf output" width="500" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }

*   Select `Analytics`$$\rightarrow$$ `Regression`$$\rightarrow$$ `Linear SGD`.
*   Select the column that is going to be predicted from the drop-down menu [1]. The columns containing categorical features should not be selected for prediction. 
*   Select the `Loss function` [2] and the gradient `Optimizer` [3] from the drop-down menus.
*   Select the hyperparameters that determine the structure of the model: the `Learning rate` [4] and the `Number of epochs`[5]. Default values, data types (double or integer) and acceptable ranges are indicated as guidance on the input parameter values.
*   Select a `Seed` for reproducible results or a random number generated `Time-based (RNG) Seed` [6].
*   Click on the `Execute` button [7] to apply the training algorithm on the input columns.

<div style="text-align: center;">
<img src="images/Regression/sgd.svg" alt="SGD" width="500" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented.

<div style="text-align: center;">
<img src="images/Regression/sgd-output.png" alt="SGD" width="400" height="300" class="img-responsive">
</div> 

---

## XGBoost Regression

The Extreme Gradient Boosting (XGBoost) open-source library <sup>[6](#regression)</sup> is used to implement the gradient boosting framework. The library uses a class of ensemble machine learning algorithms constructed from decision tree models. Ensemble learning operates by combining different individual base learners to obtain a final prediction. <sup>[7](#regression)</sup> In an iterative process, trees are added to the ensemble so that the prediction error (loss) of previous models is reduced. In regression problems, the mean squared error is used as loss function. <sup>[8](#regression)</sup>

Use the XGBoost regression function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Regression $$\rightarrow$$ XGBoost|

### Input
{: .no_toc }

Data matrix with training set data. String columns are not taken into account in the algorithm implementation, therefore categorical features must be encoded into numerical values (integer or double). 

### Configuration
{: .no_toc }

| **Target Column** | Select manually from the drop-down menu the column containing the target variable that is going to be predicted. Columns with categorical features should not be selected as targets. |
| **Booster** | Select manually from the drop-down menu which booster to use. Three options are available for selection, namely: <br> &nbsp;&nbsp;&nbsp;&nbsp;- gbtree: default tree-based models, <br> &nbsp;&nbsp;&nbsp;&nbsp;- dart: tree-based models, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- gblinear: linear functions. |
| **Optimizer** | Select manually from the drop-down menu the learning objective of the method. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- reg:squarederror: regression with squared loss, <br> &nbsp;&nbsp;&nbsp;&nbsp;- reg:gamma: gamma regression with log-link, whose output is a mean of gamma distribution, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- reg:tweedie: tweedie regression with log-link. |
| **Number of estimators** | Select the number of models (integer) to train in the learning ensemble. |
| **Eta** | Specify the learning rate (between 0 and 1) which determines the step size shrinkage to prevent overfitting (default value: 0.3). |
| **Gamma** | Specify the minimum loss reduction required to make a further partition on a leaf node of the tree (default value: 0). |
| **Max depth** | Specify the maximum depth of a tree as a positive integer (default value: 6). |
| **Min child weight** | Specify the minimum sum of instance weight (hessian) needed in a child (default value: 1). |
| **Column sample by tree** | Specify the subsample ratio of features when constructing each tree. Subsampling will occur once for every tree constructed. |
| **Sub sample** | Specify the subsampling ratio (between 0 and 1) of the training instances. Subsampling will occur once in every boosting iteration (default value: 1). |
| **Tree method** | Select the tree construction algorithm used in XGBoost. Options include: <br> &nbsp;&nbsp;&nbsp;&nbsp;- auto: use this heuristically to choose the fastest method typically based on the dataset size, <br> &nbsp;&nbsp;&nbsp;&nbsp;- exact: exact greedy algorithm, <br> &nbsp;&nbsp;&nbsp;&nbsp;- approx: approximates the greedy algorithm using quantile sketch and gradient histogram, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- hist: fast histogram optimized approximate greedy algorithm. |
| **Lambda** | Specify the L2 regularization term on leaf weights (default value: 1). |
| **Alpha** | Specify the L1 regularization term on leaf weights (default value: 0). |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available. |

### Output 
{: .no_toc }
A data matrix including the actual target value and the value predicted by the algorithm (‘Prediction’) is presented. 

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix including the target variable for prediction. In case that categorical-string columns are included in the set, these should be encoded into representative numerical values.

<div style="text-align: center;">
<img src="images/Regression/xgboost-input.png" alt="XGBoost input" width="500" height="400" class="img-responsive">
</div> 

##### Configuration 
{: .no_toc }

*   Select `Analytics` $$\rightarrow$$ `Regression` $$\rightarrow$$ `XGBoost` .
*   Select the column that is going to be predicted from the drop-down menu [1]. The columns containing categorical features should not be selected for prediction. 
*   Select the tree booster [2] method, the objective function [3] for loss and the number of estimators [4] involved in the ensemble. 
*   Select the hyperparameters involved in the regularization of the model: eta [5], gamma [6], lambda [12] and alpha [13]. Select the hyperparameters involved in tree construction: max depth [7] and min child weight [8]. Select the column sampling rate by tree [9] and the overall subsampling rates [10]. Default values, data types (double or integer) and acceptable ranges are indicated as guidance on the input parameter values.
*   Select the tree construction algorithm [11] used in `XGBoost`.
*   Select a `Seed` for reproducible results or a random number generated `Time-based (RNG) Seed` [14].
*   Click on the `Execute` button [15] to apply the training algorithm on the input columns. 

<div style="text-align: center;">
<img src="images/Regression/xgboost.svg" alt="XGBoost" width="500" height="400" class="img-responsive">
</div> 

##### Output 
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the actual and the predicted value of the target is presented.

<div style="text-align: center;">
<img src="images/Regression/xgboost-output.png" alt="XGBoost output" width="500" height="400" class="img-responsive">
</div> 


---

All the colors used in Just the Docs have been systematized into a series of variables that have been extended to both font color and background color utility classes.

## References {#regression}
1.	Witten Ian H and Frank, Eibe and Hall, Mark A and Pal CJ. Data Mining: Practical Machine Learning Tools and Techniques. Fourth. Morgan Kaufmann; 2011. [https://doi.org/10.1016/C2009-0-19715-5](https://doi.org/10.1016/C2009-0-19715-5).
2. 	Murphy KP. Machine Learning: A Probabilistic Perspective. The MIT Press; 2012. 10.5555/2380985
3.	Lee C-C, Chung P-C, Tsai J-R, Chang C-I. Robust radial basis function neural networks. IEEE Transactions on Systems, Man, and Cybernetics, Part B (Cybernetics) 1999;29:674–85. [https://doi.org/10.1109/3477.809023](https://doi.org/10.1109/3477.809023). 
4.	Ghosh J, Nag A. An Overview of Radial Basis Function Networks. In: Howlett RJ, Jain LC, editors. Radial Basis Function Networks 2: New Advances in Design, Heidelberg: Physica-Verlag HD; 2001, p. 1–36. [https://doi.org/10.1007/978-3-7908-1826-0_1](https://doi.org/10.1007/978-3-7908-1826-0_1).
5.	Bottou L. Large-Scale Machine Learning with Stochastic Gradient Descent. In: Lechevallier Y, Saporta G, editors. Proceedings of COMPSTAT’2010, Heidelberg: Physica-Verlag HD; 2010, p. 177–86. [https://doi.org/10.1007/978-3-7908-2604-3_16](https://doi.org/10.1007/978-3-7908-2604-3_16).
6.	XGBoost Parameters — xgboost 2.1.0-dev documentation n.d. [https://xgboost.readthedocs.io/en/latest/parameter.html](https://xgboost.readthedocs.io/en/latest/parameter.html) (accessed June 3, 2024). 
7.	Hastie T, Tibshirani R, Friedman J. The Elements of Statistical Learning. New York, NY: Springer New York; 2009. [https://doi.org/10.1007/978-0-387-84858-7](https://doi.org/10.1007/978-0-387-84858-7).
8.	Chen T, Guestrin C. XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016, p. 785–94. [https://doi.org/10.1145/2939672.2939785](https://doi.org/10.1145/2939672.2939785).
9.	Breiman L. Random Forests. Machine Learning 2001;45:5–32. [https://doi.org/10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324).

---

## Version History
Introduced in Isalos Analytics Platform v0.1.18

_Instructions last updated on June 2024_
