---
layout: default
title: 4.4 Anomaly Detection
parent: 4. Analytics
nav_order: 4
permalink: /anomaly-detection.html
---

# Anomaly Detection
{: .no_toc }
Anomaly detection is an important technique in data analytics that involves identifying unusual patterns or outliers in datasets. It is widely used in various applications like fraud detection, network security, and fault diagnosis. Anomalies in these datasets can indicate critical incidents such as breaches, failing components, or fraudulent transactions. To identify these anomalies, statistical, machine learning, or other data-driven methods are used to analyze data in real-time or in batches. This helps in identifying data points that deviate significantly from the expected behavior. By detecting and flagging these anomalies, organizations can proactively address potential issues, leading to improved operational efficiency and security.<sup>[1](#anomaly-detection-references)</sup>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## One-Class SVM 
The One-Class Support Vector Machine (One-Class SVM) anomaly detection algorithm is specifically designed to detect outliers or anomalies in a dataset by defining a normative region and identifying data points that deviate significantly from it. It accomplishes this by mapping the input data to a high-dimensional feature space using a kernel function. Subsequently, it seeks to find a hyperplane that maximizes the margin, separating most of the data points from the origin. The algorithm uses four types of kernel functions to achieve this transformation:<sup>[2](#anomaly-detection-references)</sup>

##### Linear Kernel
{: .no_toc}

<div style="text-align: center;">
<span id="eq. linear-kernerl1">
$$
\begin{equation}
K(x, x') = \langle x, x' \rangle {\qquad [1] \qquad}
\end{equation}   
$$
</span>
</div>

This kernel represents a single dot product between two vectors. The terms $x$ and $x'$ represent vectors and are used to denote any two data points for which you are calculating the kernel. The dot product is a scalar representation of the projection of one vector onto another, indicating how much of one vector goes in the direction of another.

##### Polynomial Kernel
{: .no_toc}

<div style="text-align: center;">
<span id="eq. linear-kernerl2">
$$
\begin{equation}
K(x, x') = \left( \gamma \cdot \langle x, x' \rangle + r \right)^{d} {\qquad [2] \qquad}
\end{equation}   
$$
</span>
</div>

In the above expression 
<span id="eq. linear-kernerl3">
$$
\begin{equation}
\gamma \cdot \langle x, x' \rangle 
\end{equation}  
$$
</span>
involves a scalar multiplication of  (a predefined scaling factor) with the dot product
<span id="eq. linear-kernerl2text">
$$
\begin{equation}
\langle x, x' \rangle
\end{equation}   
$$
</span>
of the input vectors $x$ and $x'$. This kernel maps inputs into a polynomial feature space, controlled by degree $d$, where higher degrees allow for more complex decision boundaries. Coefficient $r$ adjusts the influence of higher-degree terms, and  scales the input data.

##### RBF (Radial Basis Function) Kernel
{: .no_toc}

<div style="text-align: center;">
<span id="eq. linear-kernerl3">
$$
\begin{equation}
K(x, x') = \exp\left( -\gamma \|x - x'\|^{2} \right) {\qquad [3] \qquad}
\end{equation}   
$$
</span>
</div>

The RBF kernel introduces a Gaussian function of the distance between points, controlled by  (here  multiplies the square of the Euclidean distance), allowing it to handle varied data distributions by forming region-based boundaries.

##### Sigmoid Kernel
{: .no_toc}

<div style="text-align: center;">
<span id="eq. linear-kernerl4">
$$
\begin{equation}
K(x, x') = \tanh\left( \gamma \cdot \langle x, x' \rangle + r \right) {\qquad [4] \qquad}
\end{equation}   
$$
</span>
</div>

Similarly, to the polynomial kernel, this involves a dot product scaled by  and offset by $r$, followed by the hyperbolic tangent function. This kernel uses a hyperbolic tangent function, transforming the data similar to the activation function in neural networks, which can create complex, non-linear decision boundaries.

One-Class SVM aims to maximize the margin between the data and the origin in the feature space, effectively identifying outliers in scenarios where a clear "normal" class exists. The parameters v(nu) and C determine the balance between capturing all the "normal" data points within the boundary and allowing flexibility for some outliers. This trade-off is crucial for accurate anomaly detection in applications like fraud detection and system health monitoring.

Use the `One-Class SVM` function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Anomaly Detection $$\rightarrow$$ One-Class SVM |

### Input
{: .no_toc}
The data input should consist of numerical (“normal”) instances, without any missing values. There are no inherent limitations on the number of columns or rows.

### Configuration
{: .no_toc}

|**Type of Kernel**| You can choose from different types of kernels including `Linear`, `Polynomial`, `RBF`, and `Sigmoid`. Depending on the user-selection specify the parameter values in the kernel equation (Eqs. [1](#eq. linear-kernerl1)-[4](#eq. linear-kernerl4)). |
|**Generic parameters**| You can also set parameters like `C`, `Nu`, `Tolerance`, and `Cache` to optimize the performance and efficiency of anomaly detection.|

### Output
{: .no_toc}
The output sheet will have two columns: one for the prediction (expected or anomalous) and the other for the scoring.

### Example
{: .no_toc}

##### Input
{: .no_toc}
The data are inserted as shown below in the data input sheet on the left-hand side.

<div style="text-align: center;">
<img src="images/Anomaly/oneclass-svm-input.png" alt="Oneclass SVM input" width="300" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }
1.   Select `Analytics` $$\rightarrow$$ `Anomaly Detection` $$\rightarrow$$ `One-Class SVM`
1.   Select the `Type` of kernel [1] and specify the parameter values [2] in the kernel equation. Choose appropriate values for the `Generic parameters` to optimize the performance and efficiency of anomaly detection [3].
1.   Click on the `Execute` button [4] to apply the anomaly detection calculation.

<div style="text-align: center;">
<img src="images/Anomaly/oneclass-svm.svg" alt="Oneclass SVM" width="300" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc }
The right-hand spreadsheet tab presents two columns in the output: one for predicting whether the result is expected or anomalous, and another for the scoring.

<div style="text-align: center;">
<img src="images/Anomaly/oneclass-svm-output.png" alt="Oneclass SVM output" width="300" height="400" class="img-responsive">
</div> 


## References {#anomaly-detection-references}
1.	Mehrotra, K.G., et al., Anomaly detection. 2017: Springer. [doi.org/10.1007/978-3-319-67526-8](https://doi.org/10.1007/978-3-319-67526-8).
1. 	Zhang, R., S. Zhang, S. Muthuraman, and J. Jiang. One class support vector machine for anomaly detection in the communication network performance data. in Proceedings of the 5th conference on Applied electromagnetics, wireless and optical communications. 2007. Citeseer. [api.semanticscholar.org/CorpusID:111342328](https://api.semanticscholar.org/CorpusID:111342328)
 
---

## Version History
Introduced in Isalos Analytics Platform v0.2.4

_Instructions last updated on January 2025_

