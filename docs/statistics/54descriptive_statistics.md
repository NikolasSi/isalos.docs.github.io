---
layout: default
title: 5.4 Descriptive Statistics
parent: 5. Statistics
nav_order: 4
permalink: /descriptive-statistics.html
---

# Descriptive Statistics
{: .no_toc }
Descriptive statistics is a collection of analytical methods used to effectively summarize or describe a given dataset. These methods involve various measures, including measures of central tendency (e.g., mean, median, and mode), as well as measures of variability (e.g., range, variance, and standard deviation). By employing descriptive statistics, one can quickly evaluate the distribution and patterns within a dataset without relying on additional assumptions. Descriptive statistics play a crucial role as they offer valuable insights about a dataset in a straightforward manner, without the necessity of graphical representation, which might not have been feasible when dealing with large datasets.<sup>[1](#references-descriptive-statistics)</sup>. 

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

The available statistical measures in Isalos, applicable to both the population and to a sample of the population, include: 

##### Minimum
{: .no_toc}
The minimum (min) is the smallest value in a dataset, defining the lower boundary of the data range. There is no distinction in calculation between a sample and a population for this measure.

##### Maximum
{: .no_toc}
The maximum (max) is the largest value in a dataset, defining the upper boundary of the data range. Like the minimum, the calculation does not vary between a sample and a population.

##### Range
{: .no_toc}
The range is a measure of the spread between the maximum and minimum values in the dataset, calculated as:

<div id="eq. range">
$$
\begin{equation}
R = x_{\text{max}} - x_{\text{min}} {\qquad [1] \qquad}
\end{equation}
$$
</div>

This measure does not differ between population and sample data.

##### Size/Count
{: .no_toc}
The size or count is the total number of data points in the dataset, denoted as $n$. It is used as the denominator in many statistical formulas to calculate averages and variations. Both population and sample datasets use the same method for counting data points.

##### Sum
{: .no_toc}
The sum is the total of all numerical values in a dataset, calculated as: 

<div id="eq. sum">
$$
\begin{equation}
\sum_{i=1}^{n} x_{i} {\qquad [2] \qquad}
\end{equation}
$$
</div>

Here, $x_{i}$ represents each value in the dataset. The calculation is identical whether dealing with a sample or a population. 

##### Median
{: .no_toc}
The median is the middle value of a dataset when ordered. The method does not vary between sample and population datasets.

If $n$ is odd, the median is the middle number calculated at position $p$ (where $p = \frac{n + 1}{2}$):  

<div id="eq. median-odd">
$$
\begin{equation}
\tilde{x} = x_{p} {\qquad [3a] \qquad}
\end{equation}
$$
</div>

If $n$ is even, it is the average of the two middle numbers at positions $p$ and $p+1$ (where $p = \frac{n}{2}$): 

<div id="eq. median-even">
$$
\begin{equation}
\tilde{x} = \frac{x_{p} + x_{p+1}}{2} {\qquad [3b] \qquad}
\end{equation}
$$
</div>

##### Mode
{: .no_toc}
The mode is the value that appears most frequently in a dataset. A dataset may have one mode, multiple modes, or no mode if no number repeats more frequently than others. This calculation is consistent for both population and sample data.

##### Midrange
{: .no_toc}
The midrange (MR) is the average of the maximum and minimum values of the dataset, calculated as:

<div id="eq. midrange">
$$
\begin{equation}
MR = \frac{x_{\text{min}} + x_{\text{max}}}{2} {\qquad [4] \qquad}
\end{equation}
$$
</div>

This calculation is the same for both sample and population data.

##### Root Mean Square
{: .no_toc}
The root mean square (RMS) provides a measure of the magnitude of a set of numbers, typically used to calculate the standard deviation. It is calculated by taking the square root of the average of the squares of the numbers:

<div id="eq. RMS">
$$
\begin{equation}
RMS = \sqrt{\frac{1}{n} \sum_{i=1}^{n} x_{i}^{2}} {\qquad [5] \qquad}
\end{equation}
$$
</div>

This formula is consistent for both population and sample datasets.

##### Mean
{: .no_toc}
The mean, often referred to as the average, is a measure of central tendency that sums all the numerical values in a dataset and divides by the count of the values. The equation for calculating the mean is:

For populations: 
<div id="eq. mean-population">
$$
\begin{equation}
\mu = \frac{1}{n} \sum_{i=1}^{n} x_{i} {\qquad [6a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. mean-sample">
$$
\begin{equation}
\overline{x} = \frac{1}{n} \sum_{i=1}^{n} x_{i} {\qquad [6b] \qquad}
\end{equation}
$$
</div>

##### Mean Absolute Deviation
{: .no_toc}
The mean absolute deviation (MAD) is the average of absolute deviations from the mean, providing a measure of variability. 

For populations:
<div id="eq. mad-population">
$$
\begin{equation}
MAD = \frac{1}{n} \sum_{i=1}^{n} |x_{i} - \mu| {\qquad [7a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. mad-sample">
$$
\begin{equation}
MAD = \frac{1}{n} \sum_{i=1}^{n} |x_{i} - \overline{x}| {\qquad [7b] \qquad}
\end{equation}
$$
</div>

##### Standard Deviation
{: .no_toc}
Standard deviation measures the spread of data around the mean. 

For populations:
<div id="eq. sd-population">
$$
\begin{equation}
\sigma = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (x_{i} - \mu)^{2}} {\qquad [8a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. sd-sample">
$$
\begin{equation}
s = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2}} {\qquad [8b] \qquad}
\end{equation}
$$
</div>

The difference lies in the denominator, where $n-1$ (Bessel’s correction) is used for samples to provide an unbiased estimator.

##### Variance
{: .no_toc}
Variance measures the average squared deviations from the mean.

For populations:
<div id="eq. sd-population">
$$
\begin{equation}
\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_{i} - \mu)^{2} {\qquad [9a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. sd-sample">
$$
\begin{equation}
s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} {\qquad [9b] \qquad}
\end{equation}
$$
</div>

The distinction is similar to that of standard deviation.

##### Quartiles
{: .no_toc}
Quartiles divide the data into four equal parts. $Q1$ is the median of the lower half, $Q2$ is the median of the dataset, and $Q3$ is the median of the upper half. The method for calculating quartiles is consistent across sample and population data.

##### Interquartile Range
{: .no_toc}
The interquartile Range (IQR) is the difference between the third and first quartiles ($Q3$ - $Q1$), measuring the middle 50% spread of the data. There is no variation in calculating IQR between samples and populations.

##### Outliers
{: .no_toc}
Outliers are data points significantly distant from other observations. They are typically identified using the IQR; values below $Q1 - 1.5 \times IQR$ or above $Q3 + 1.5 \times IQR$ are considered outliers. This identification method applies equally to sample and population data.

##### Sum of Squares
{: .no_toc}
The sum of squares (SS) is the sum of squared differences from the mean. 

For populations:
<div id="eq. ss-population">
$$
\begin{equation}
SS = \sum_{i=1}^{n} (x_{i} - \mu)^{2} {\qquad [10a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. ss-sample">
$$
\begin{equation}
SS = \sum_{i=1}^{n} (x_{i} - \overline{x})^{2} {\qquad [10b] \qquad}
\end{equation}
$$
</div>

This foundational calculation underpins variance and standard deviation.

##### Standard Error of the Mean
{: .no_toc}
The standard error of the mean (SEM) measures the accuracy with which a sample represents a population. 

For populations:
<div id="eq. sem-population">
$$
\begin{equation}
SEM = \frac{\sigma}{\sqrt{n}} {\qquad [11a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. sem-sample">
$$
\begin{equation}
SEM = \frac{s}{\sqrt{n}} {\qquad [11b] \qquad}
\end{equation}
$$
</div>

##### Skewness
{: .no_toc}
Skewness ($\gamma_1$) is a measure of the asymmetry of the probability distribution of a real-valued random variable. Positive skewness indicates a distribution with an asymmetric tail extending towards more positive values, and negative skewness indicates a tail that extends towards more negative values. 

For populations:
<div id="eq. gamma-population">
$$
\begin{equation}
\gamma_{1} = \frac{ \sum_{i=1}^{n} (x_{i} - \mu)^{3}}{n\sigma^{3}} {\qquad [12a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. gamma-sample">
$$
\begin{equation}
\gamma_{1} = \frac{n}{(n-1)(n-2)} \sum_{i=1}^{n} \left( \frac{x_{i} - \overline{x}}{s} \right)^{3} {\qquad [12b] \qquad}
\end{equation}
$$
</div>

##### Kurtosis
{: .no_toc}
Kurtosis ($\beta_2$) measures the "tailedness" of the probability distribution of a real-valued random variable. High kurtosis in a data set is an indicator of substantial outliers. 

For populations:
<div id="eq. beta-population">
$$
\begin{equation}
\beta_{2} = \frac{ \sum_{i=1}^{n} (x_{i} - \mu)^{4}}{n\sigma^{4}} {\qquad [13a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. beta-sample">
$$
\begin{equation}
\beta_{2} = \frac{n(n+1)}{(n-1)(n-2)(n-3)} \frac{\sum_{i=1}^{n} (x_{i} - \overline{x})^{4}}{s^{4}} {\qquad [13b] \qquad}
\end{equation}
$$
</div>

##### Kurtosis Excess
{: .no_toc}
Excess kurtosis ($\alpha_4$) is calculated by subtracting 3 from the standard kurtosis measurement. This adjustment helps to compare the tails of the distribution to those of a normal distribution, which has a kurtosis of 3.

For populations:
<div id="eq. alpha-population">
$$
\begin{equation}
\alpha_{4} = \frac{ \sum_{i=1}^{n} (x_{i} - \mu)^{4}}{n\sigma^{4}} - 3 {\qquad [14a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. alpha-sample">
$$
\begin{equation}
\alpha_{4} = \frac{n(n+1)}{(n-1)(n-2)(n-3)} \frac{\sum_{i=1}^{n} (x_{i} - \overline{x})^{4}}{s^{4}} - \frac{3(n-1)^{2}}{(n-2)(n-3)} {\qquad [14b] \qquad}
\end{equation}
$$
</div>

##### Coefficient of Variation
{: .no_toc}
The coefficient of variation (CV) is a standardized measure of dispersion of a probability distribution or frequency distribution. 
  
For populations:
<div id="eq. cv-population">
$$
\begin{equation}
CV = \frac{\sigma}{\mu} {\qquad [15a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. cv-sample">
$$
\begin{equation}
CV = \frac{s}{\overline{x}} {\qquad [15b] \qquad}
\end{equation}
$$
</div>  

This measure is useful because it allows comparison between distributions with different units or means.

##### Relative Standard Deviation
{: .no_toc}
The relative standard deviation (RSD) is expressed as a percentage and describes the dispersion or variability relative to the mean of the data. 

For populations:
<div id="eq. rsd-population">
$$
\begin{equation}
RSD = \left[ \frac{100 \times \sigma}{\mu} \right]\% {\qquad [16a] \qquad}
\end{equation}
$$
</div>

For samples:
<div id="eq. rsd-sample">
$$
\begin{equation}
RSD = \left[ \frac{100 \times s}{\overline{x}} \right]\% {\qquad [16b] \qquad}
\end{equation}
$$
</div> 

##### Frequency
{: .no_toc}
Frequency ($f_1$) refers to the number of times a particular data point or value appears in a dataset. It is a simple yet fundamental measure used to describe the distribution of data values. The basic formula for frequency is: 

<div id="eq. f1-sample">
$$
\begin{equation}
f_{i} = \text{Number of occurrences of value } \times x_{i} {\qquad [17] \qquad}
\end{equation}
$$
</div>

where $f_{i}$ represents the frequency of the $i$-th value $x_{i}$.

Use the `Descriptive Statistics` function by browsing in the top ribbon: 

| Statistics $$\rightarrow$$ Descriptive Statistics |

### Input
{: .no_toc }
The input spreadsheet consists of multiple columns, each representing a distinct dataset on which descriptive statistics will be utilized.

### Configuration
{: .no_toc }

|**List of statistics**| Select the appropriate methods for conducting descriptive statistics analysis by clicking on the corresponding radio buttons. The available statistics are described above. |
|**Select Type**| Select from the dropdown list the option that describes wether the data represents a sample or population. |

### Output
{: .no_toc }
In the output sheet, descriptive statistics analysis is performed by applying selected statistical measures to each dataset represented in the input sheet. The results display the statistical measures alongside their corresponding datasets in the respective columns.

### Example
{: .no_toc }

##### Input
{: .no_toc }
The input sheet on the left hand-side is organized with individual columns representing each data set. Insert the data sets in a manner that allows for independent analysis of each set when performing descriptive statistics.

<div style="text-align: center;">
<img src="images/Descriptive Statistics/input.png" alt="input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1. Select `Statistics` $$\rightarrow$$ `Descriptive Statistics`.
1. Click on the statistics that you wish to calculate for the input data [1] and determine whether the data correspond to `Population` or `Sample` [2]. 
1. Click on the `Execute` button [3] to calculate the selected statistics.

<div style="text-align: center;">
<img src="images/Descriptive Statistics/configuration.svg" alt="configuration" width="250" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }
The right-hand side of the output sheet displays individual datasets per column, accompanied by the corresponding statistical measure chosen on each row.

<div style="text-align: center;">
<img src="images/Descriptive Statistics/output.PNG" alt="output" width="400" height="300" class="img-responsive">
</div>

---

## References {#references-descriptive-statistics}
1. Jones, J.S., Exploratory and descriptive statistics. 2022: SAGE Publications Limited.

---

## Version History
Introduced in Isalos Analytics Platform v0.2.4

_Instructions last updated on July 2024_