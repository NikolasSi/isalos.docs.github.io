---
layout: default
title: 5.5 Confidence Intervals
parent: 5. Statistics
nav_order: 5
permalink: /confidence-intervals.html
---

# Confidence Intervals
{: .no_toc }

A confidence interval (CI) is a statistical tool used to estimate the range within which a population parameter (like a mean or proportion) is likely to fall, based on information from sample data<sup>[1](#confidence)</sup>. This interval is constructed around the sample estimate and provides an indication of where the true parameter might be with a certain level of confidence, usually expressed as a percentage like 95% or 99% <sup>[2](#confidence)</sup>.

To calculate a confidence interval, you typically need the sample mean (which provides a central estimate), the standard deviation (which measures the spread of the data), and the sample size (the number of data points). For proportions, you use the sample proportion instead of the mean. The formula for a confidence interval generally involves the sample statistic plus or minus a margin of error, which is derived from the standard deviation and the sample size, adjusted by a factor from a statistical distribution (like the Z-score in large samples or the t-score in smaller samples) [1, 2].

The confidence interval when considering sample data is calculated based on below formula:

<div id="eq. confidence1">
$$
\begin{equation}
CI = \left( \overline{x} \pm t_{\text{critical}} \times \frac{s}{\sqrt{n}} \right)\end{equation}   
$$
</div>

where <span>$$\begin{equation}
\overline{x}
\end{equation}$$</span> is the sample mean, s is the standard deviation of the sample data, n is the sample data size and <span>$$\begin{equation}t_{\text{critical}} \end{equation}$$</span> is derived from the t-distribution, which accounts for degrees of freedom (df) that depend on the sample size and is found using below formula when confidence level is for example 95 %:

<div id="eq. confidence2">
$$
\begin{equation}
t_{\text{critical}} = t_{\frac{\alpha}{2}, df}\end{equation}   
$$
</div>

where df=n-1 and  is the significance level which is calculated as =1-confidence level. The value <span>$$\begin{equation}\frac{\alpha}{2}\end{equation}$$</span> reflects the two-tailed nature of the typical confidence interval (e.g. for 95 % confidence interval, <span>$$\begin{equation}\alpha\end{equation}$$</span>=0.05 and <span>$$\begin{equation}\frac{\alpha}{2}\end{equation}$$</span>=0.025 ).[2]

The confidence interval when considering population data is calculated based on below formula:

<div id="eq. confidence2">
$$
\begin{equation}
CI = \left( \mu \pm Z_{\text{critical}} \times \frac{\sigma}{\sqrt{n}} \right)
\end{equation}   
$$
</div>

Where  is the population mean,  is the standard deviation of the population data, n is the population size and <span>$$\begin{equation}Z_{\text{critical}}\end{equation}$$</span> is derived from the standard normal distribution (Z-distribution), which is symmetric and has a mean of zero and a standard deviation of one. The <span>$$\begin{equation}Z_{\text{critical}}\end{equation}$$</span> value for a given confidence level  is: 


<div id="eq. confidence3">
$$
\begin{equation}
Z_{\text{critical}} = Z_{\frac{\alpha}{2}}
\end{equation}   
$$
</div>

Where <span>$$\begin{equation}\frac{\alpha}{2}\end{equation}$$</span> again accounts for the two-tailed nature of the test or interval. For a 95 % confidence interval, you look up or calculate the Z-value that corresponds to 97.5 % of the distribution (since 2.5 % is in each tail).[2]

The confidence interval when considering population proportion is calculated based on below formula:

<div id="eq. confidence4">
$$
\begin{equation}
CI = \left( p \pm z_{\text{critical}} \times \sqrt{\frac{p(1-p)}{n}} \right)
\end{equation}   
$$
</div>

where p is the sample proportion and is calculated as <span>$$\begin{equation}p = \frac{x}{n}\end{equation}$$</span> where X is the number of successes in the dataset and n is the total sample size.

Isalos offers three methods for calculating confidence intervals. The first method involves inputting raw (sample) data, assumed to be a representative sample. In this method, the mean can be automatically calculated, and the user has the option to manually input the standard deviation value or allow the software to calculate it automatically. This flexible approach allows for accurate estimation of confidence intervals based on the provided sample raw data. The second method requires the user to manually enter the mean value, standard deviation, and sample size. Additionally, the user must indicate whether the data represents a sample or population. The third method calculates confidence intervals based on proportions. Here, the user needs to specify the probability and sample size.

These different calculation options in Isalos provide flexibility and accommodate various scenarios for estimating confidence intervals with ease and accuracy. All the above three options allow the user to manually specify the confidence level.


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Raw Data

As previously mentioned, the confidence intervals can be calculated using input raw (sample) data. The mean is automatically calculated, and the user has the option to manually enter or automatically calculate the standard deviation of the sample data. Additionally, the user can specify the desired confidence level for the calculation of the confidence intervals.

Use the Raw Data function for calculating confidence intervals by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ RConfidence Intervals $$\rightarrow$$ Raw Data|

### Input
{: .no_toc}

Users are allowed to input numerical values in any columns of their choice, without being constrained by specific limitations on the number of columns. It is important to note that the calculation will be rendered unable to be performed if categorical or text data is inserted.

### Configuration
{: .no_toc}

| **Confidence level** | Manually insert confidence level which may range from 0 to 1. |
| **Standard Deviation Method** | Select any of the two options available, Select by the user or Autocalculate the standard deviation based on the provided data. |
| **Standard Deviation** | If the previous option, Select by the user is chosen then enter manually the value that represents the standard deviation of the sample data. |
| **Include/exclude columns** | Select manually the columns that are going to be used for the calculation of the confidence interval through the dialog window: Use the buttons to move columns between the Included Columns (subject to standardization) and Excluded Columns list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

## Sample Size, Mean and Standard Deviation

## Population Proportion

---
<div style="text-align: center;">
<img src="images/icons/under_construction.svg" alt="a" width="1500" height="1000" class="img-responsive">
</div>