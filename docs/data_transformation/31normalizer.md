---
layout: default
title: 3.1 Normalizers
parent: 3. Data Transformation
nav_order: 1
---

# Normalizers
{: .no_toc }
Data scaling (normalization or standardization) is considered as a standard pre-processing procedure in data science and in machine learning model development. Both techniques aim to force data that have substantially different numerical ranges to acquire comparable values and thus, to facilitate their manipulation and modeling and contribute equally to the analysis. [1] 

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



## Z Score

Linear transformation (standardization) of the data so that each feature is Gaussian-distributed: their normalized values present a mean value equal to 0 and standard deviation equal to 1. The transformation is achieved through Eq. \ref{eq. z-score} [1]. 


$$
\begin{equation}
{\widetilde{x}}_i=\frac{x_i-\bar{\mathbf{X}}}{s}
\label{eq. z-score}
\end{equation}
$$

where ${\widetilde{x}}_i$ and $x_i$ are the standardized and the original values of the $i$th instance of $\mathbf{X}$ feature vector respectively, $\bar{\mathbf{X}}$ is the mean value of $\mathbf{X}$ and, $s$ is the standard deviation of $\mathbf{X}$.

Use the `Z Score` function: 

| Data Transformation $$\rightarrow$$ Normalizers $$\rightarrow$$ Z Score |

---
 
## kNN 


