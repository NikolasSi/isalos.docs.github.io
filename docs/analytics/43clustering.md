---
layout: default
title: 4.3 Clustering
parent: 4. Analytics
nav_order: 3
permalink: /clustering.html
---

# Clustering
{: .no_toc }

Cluster analysis is an unsupervised learning technique that is able to group instances into clusters based on the distinct characteristics of the data points. Unsupervised learning operates on unlabeled data and focuses on learning from input without human supervision. The goal of clustering is to divide unlabeled objects into meaningful groups where items in each subset are similar to each other rather than to instances in other subsets. This method is often used for data exploration, facilitating the identification of underlying patterns within the dataset that are not immediately obvious. <sup>[1,2](#references-clustering)</sup>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## K-Means

K-Means is a simple non-parametric clustering algorithm used for partitioning samples into separated clusters of equal variance. The algorithm begins by randomly selecting _K_ observation instances as the initial centroids, then proceeds by assigning each observation to the cluster whose centroid is closest to it. Different distance-based methods can be employed to calculate the respective distances between datapoints. The centroids are then recomputed as the average of the observations allocated to the cluster. This process is repeated until the assignment of observations to clusters no longer changes significantly, or after a fixed number of iterations. The _K_ parameter denotes the number of clusters that are formed. <sup>[1,2](#references-clustering)</sup>

Use the `K-Means` clustering function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Clustering $$\rightarrow$$ K-Means|

### Input
{: .no_toc }

Data matrix with training set data. String columns are not taken into account in the algorithm implementation since K-means does not allow the use of nominal (categorical) input.  

### Configuration
{: .no_toc }

| **Number of centroids** | Specify an integer representing the number of centroids (_K_) to generate, coresponding to the number of clusters that form (default value: 3). |
| **Number of iterations** | Specify the maximum number of times the algorithm runs to converge with different centroids (default value: 100). |
| **Distance method** | Select the metric used to calculate distances between data points. Three options are available for selection: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Manhattan/L1`: Sum of the absolute differences between coordinates of instances pairs, <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Euclidean/L2`: Square root of differences between coordinates of instances pairs, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Cosine`: Uses cosine distance to determine how two features are oriented relative to each other, based on the angle between the vectors rather than their magnitude. |
| **Initialization** | Select the method used for the initialization. Two options are available for selection: <br> &nbsp;&nbsp;&nbsp;&nbsp;- `Random`: Cluster centroids are randomly selected for initialization, and <br> &nbsp;&nbsp;&nbsp;&nbsp;- `KMeans++`: Improved cluster initialization technique that uses a heuristic to find centroid seeds. For more information on K-means++ see in Arthur _et al._<sup>[3](#references-clustering)</sup>. |
| **Number of threads** | Isalos supports multi-threading for K-Means. Specify the number of threads to use for computation (default value: 100). |
| **RNG Seed** | Select an integer as seed to get reproducible results. The option to select a time-based random number-generated seed is available by clicking on the `Time Based RNG Seed` checkbox. |

### Output
{: .no_toc }

A data matrix listing the characteristics of each centroid and cluster assignment information is presented.

### Example
{: .no_toc }

##### Input
{: .no_toc }

In the left-hand spreadsheet of the tab import the data matrix. In case that categorical features are included in the input data matrix, an error message appears: “K-means does not allow the use of nominal (categorical) input. To proceed please remove column(s)”.

<div style="text-align: center;">
<img src="images/Clustering/kmeans-input.png" alt="Box Behnken input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1.   Select `Analytics` $$\rightarrow$$ `Clustering` $$\rightarrow$$ `K-Means`. 
1.   Select the `Number of clusters` [1], and the `Number of iterations` [2] the algorithm will run to converge.
1.   Select the `Distance method` [3] that determines the centroid closest to an instance and determine the `Initialization` method [4].
1.   Select the `Number of threads` to choose the single-threaded or multi-threaded version of the algorithm [5].
1.   Select an RNG Seed for reproducible results or a random number generated `Time Based RNG Seed` [6].
1.   Click on the `Execute` button [7] to apply the training algorithm on the input columns.

<div style="text-align: center;">
<img src="images/Clustering/kmeans-configuration.svg" alt="Kmeans input" width="400" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }

In the right-hand spreadsheet of the tab the output data matrix with the centroid and cluster assignment information is presented. The first section lists the centroids of each cluster with an identifier [1] and presents the average value of the points that are assigned to each respective cluster for all the numerical variables in the dataset. In the second section [2] the data points assigned to each cluster are presented horizontally.

<div style="text-align: center;">
<img src="images/Clustering/kmeans-output.svg" alt="Kmeans output" width="500" height="300" class="img-responsive">
</div>

##### Application on external set
{: .no_toc }

You can apply the trained K-Means model to any external (test) data using the [`Existing Model Utilization`](https://www.docs.isalos.novamechanics.com/existing-model-utilization.html) function:

1.   Import the external data in the left-hand spreadsheet of the tab. Include the same columns used to build the K-Means model.
1.   Select `Analytics` $$\rightarrow$$ `Existing Model Utilization`. Select the K-Means model [1] and click on the `Execute` button [2].

<div style="text-align: center;">
<img src="images/Clustering/kmeans-application.svg" alt="Kmeans applicatiion" width="400" height="300" class="img-responsive">
</div>

{:style="counter-reset:none"}
1.   Inspect the results in the right-hand spreadsheet of the tab. 

<div style="text-align: center;">
<img src="images/Clustering/kmeans-output-application.png" alt="Kmeans output application" width="400" height="300" class="img-responsive">
</div>

## Tips

*   As calculations of Euclidean distances are performed, consider scaling the data beforehand using a [`Normalizer`](https://www.docs.isalos.novamechanics.com/normalizers.html) function. 
*   The K-Means algorithm requires the number of clusters to be specified. Its performance is highly influenced by the initialization of the centroids and the selection of _K_.

## See also 

The model generated by any of the K-Means clustering algorithm can be applied to any input data through the [`Existing Model Utilization`](https://www.docs.isalos.novamechanics.com/existing-model-utilization.html) function (e.g., a K-means model trained from the training set data of a machine learning model can be applied to the test/external set data).


### Workflows
{: .no_toc }


## References {#references-clustering}
1.	Witten Ian H and Frank, Eibe and Hall, Mark A and Pal CJ. Data Mining: Practical Machine Learning Tools and Techniques. Fourth. Morgan Kaufmann; 2011. [https://doi.org/10.1016/C2009-0-19715-5](https://doi.org/10.1016/C2009-0-19715-5).
1.  Murphy KP. Machine Learning: A Probabilistic Perspective. The MIT Press; 2012. [10.5555/2380985](https://dl.acm.org/doi/book/10.5555/2380985).
1.  Arthur, D.; Vassilvitskii, S. K-Means++: The Advantages of Careful Seeding. In Proceedings of the eighteenth annual ACM-SIAM symposium on Discrete algorithms; SODA ’07; Society for Industrial and Applied Mathematics: USA, 2007; pp 1027–1035. [10.5555/1283383.1283494](https://dl.acm.org/doi/10.5555/1283383.1283494).

---

## Version History
Introduced in Isalos Analytics Platform v0.1.18

_Instructions last updated on June 2024_


