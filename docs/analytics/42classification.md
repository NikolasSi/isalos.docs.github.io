---
layout: default
title: 4.2 Classification
parent: 4. Analytics
nav_order: 2
permalink: /classification.html
---

# Classification
{: .no_toc }
Classification is a typical supervised learning technique in predictive modeling that aims to categorize data into predefined classes. Classification analysis is used when the target is a categorical value, and algorithms are trained on labeled datasets to predict the category of unseen objects. There are two types of classification problems; Binary classification where the possible outcome can be one of two distinct classes, and Multiclass classification where the outcome can be one of several categories. <sup>[1](#classification)</sup>


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## k Nearest Neighbors (kNN)

k Nearest Neighbors (kNN) is a simple non-parametric algorithm that operates by identifying the data points from the training set that are most proximate to a new unseen input. This instance-based learning method calculates the Euclidean distance between all attribute values in order to determine the closeness between data points. The **k** parameter denotes the number of nearest neighbors to consider, and the inverted distance is used as the weighting factor. [1,2]
The classification prediction of a new instance is assigned based on the class label that is most frequently represented among the k-nearest neighbors.
Use the k Nearest Neighbors classification function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Classification $$\rightarrow$$ k Nearest Neighbors (kNN)|

### Input
{: .no_toc}
Data matrix with training set data. The categories of the target feature should be presented as strings. Other categorical features must be encoded into numerical values, presented as either integers or doubles.

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
<img src="images/Classification/knn-input.png" alt="kNN input" width="500" height="400" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

*   Select `Analytics` $$\rightarrow$$ `Classification` $$\rightarrow$$ `k Nearest Neighbors (kNN)`.
*   Select the column that is going to be predicted from the `drop-down menu` [1]. The columns containing categorical features should not be selected for prediction.
*   Select the `Number of Neighbors` [2] to consider.
*   Click on the `Execute` button [3] to apply the training algorithm on the input columns.

<div style="text-align: center;">
<img src="images/Classification/knn.svg" alt="kNN" width="400" height="300" class="img-responsive">
</div> 

---

## MLP

---

## SOM

---

## RBF

---

## XGBoost


---

## J48

---
<div style="text-align: center;">
<img src="images/icons/under_construction.svg" alt="a" width="1500" height="1000" class="img-responsive">
</div>


## Random Forest
 
## Tips

k Nearest neighbors:
*   It works more efficiently for small to medium datasets and low-dimensional data. kNN is sensitive to missing data.
*   The performance of the model is highly influenced by the selection of **k**.
*   As calculations of Euclidean distances are performed, consider scaling the data beforehand using a Normalizer function.

SOM: *

RBF:
*   The number of neurons in the hidden layer has a high impact on the model performance, since a large number of neurons can lead to overfitting.

Linear SGD:
*   It is effective in large datasets and can handle high-dimensional feature spaces. Higher learning rates may be required when Huber loss is selected, because it is less sensitive to outliers.
*   Consider scaling the input data with a Z score normalizer to center them to mean and have a unit standard deviation.

XGBoost:
*   Be cautious during hyperparameter tuning: Choosing smaller eta values, as well as increasing the lambda, alpha and gamma values result in a more conservative boosting process. Increasing the value of max depth parameter makes the model more complex, more likely to overfit.

Random Forest:
*   This algorithm performs well with datasets that contain missing values. However, it is not as efficient with a large number of sparse features or with categorical variables of many levels that are improperly encoded.

## See also 

The model generated by any of the k Nearest Neighbors, MLP, SOM, RBF, XGBoost or Random Forest classification algorithms can be applied to any input data through the Existing Model Utilization function (e.g., a classification algorithm trained from the training set data of a machine learning model can be applied to the test/external set data).

### Workflows
{: .no_toc }
List of workflows (e.g., a general machine learning workflow).

## References {#classification}
1.	Witten Ian H and Frank, Eibe and Hall, Mark A and Pal CJ. Data Mining: Practical Machine Learning Tools and Techniques. Fourth. Morgan Kaufmann; 2011. [https://doi.org/10.1016/C2009-0-19715-5](https://doi.org/10.1016/C2009-0-19715-5).
2. 	Murphy KP. Machine Learning: A Probabilistic Perspective. The MIT Press; 2012. 10.5555/2380985
3.	Kohonen T. Self-organized formation of topologically correct feature maps. Biol Cybern 1982;43:59–69. [https://doi.org/10.1007/BF00337288](https://doi.org/10.1007/BF00337288).
4.  Van Hulle MM. Self-organizing Maps. In: Rozenberg G, Bäck T, Kok JN, editors. Handbook of Natural Computing, Berlin, Heidelberg: Springer Berlin Heidelberg; 2012, p. 585–622. [https://doi.org/10.1007/978-3-540-92910-9_19](https://doi.org/10.1007/978-3-540-92910-9_19).
5.  Lee C-C, Chung P-C, Tsai J-R, Chang C-I. Robust radial basis function neural networks. IEEE Transactions on Systems, Man, and Cybernetics, Part B (Cybernetics) 1999;29:674–85. [https://doi.org/10.1109/3477.809023](https://doi.org/10.1109/3477.809023). 
6.  Ghosh J, Nag A. An Overview of Radial Basis Function Networks. In: Howlett RJ, Jain LC, editors. Radial Basis Function Networks 2: New Advances in Design, Heidelberg: Physica-Verlag HD; 2001, p. 1–36. [https://doi.org/10.1007/978-3-7908-1826-0_1](https://doi.org/10.1007/978-3-7908-1826-0_1).
7.  XGBoost Parameters — xgboost 2.1.0-dev documentation n.d. [https://xgboost.readthedocs.io/en/latest/parameter.html](https://xgboost.readthedocs.io/en/latest/parameter.html) (accessed June 3, 2024). 
8.  Hastie T, Tibshirani R, Friedman J. The Elements of Statistical Learning. New York, NY: Springer New York; 2009. [https://doi.org/10.1007/978-0-387-84858-7](https://doi.org/10.1007/978-0-387-84858-7).
9.  Chen T, Guestrin C. XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2016, p. 785–94. [https://doi.org/10.1145/2939672.2939785](https://doi.org/10.1145/2939672.2939785).
10. Salzberg SL. C4.5: Programs for Machine Learning by J. Ross Quinlan. Morgan Kaufmann Publishers, Inc., 1993. Mach Learn 1994;16:235–40. [https://doi.org/10.1007/BF00993309](https://doi.org/10.1007/BF00993309).
11. Breiman L. Random Forests. Machine Learning 2001;45:5–32. [https://doi.org/10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324).

---

## Version History
Introduced in Isalos Analytics Platform v0.1.18

_Instructions last updated on June 2024_
