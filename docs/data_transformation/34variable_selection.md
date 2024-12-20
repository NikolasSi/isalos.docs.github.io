---
layout: default
title: 3.4 Variable Selection
parent: 3. Data Transformation
nav_order: 4
permalink: /variable-selection.html
---

# Variable Selection
{: .no_toc }
A key step during model development is the feature selection. The main goal of this step is to exclude from further analysis noisy variables that may lead to over-fitting phaenomena. By reducing the data space, the modelling computational time is also reduced, and the predictive performance is improved.<sup>[1,2](#references-variable-selection)</sup>

## Table of contents
{: .no_toc .text-delta }


1. TOC
{:toc}

---

<div style="text-align: center;">
<img src="images/icons/under_construction.svg" alt="a" width="1500" height="1000" class="img-responsive">
</div>

<!--## Best First

Use the `Best First` variable selection by browsing in the top ribbon: 

| Data Transformation $$\rightarrow$$ Variable Selection $$\rightarrow$$ Best First |

### Input
{: .no_toc }

### Configuration
{: .no_toc }

|**Target Column**| Text |
|**Select Direction**| Text |
|**#Nodes before termination**| Text |

### Output
{: .no_toc }

### Example
{: .no_toc }

##### Input
{: .no_toc }

##### Configuration
{: .no_toc }

##### Output
{: .no_toc }

---

## Stepwise

Use the `Stepwise` variable selection by browsing in the top ribbon: 

| Data Transformation $$\rightarrow$$ Variable Selection $$\rightarrow$$ Stepwise |

### Input
{: .no_toc }

### Configuration
{: .no_toc }

|**Select Target Column**| Text |
|**Select Method**| Text |
|**Select Model**| Text |
|**Threshold**| Text |

### Output
{: .no_toc }

### Example
{: .no_toc }

##### Input
{: .no_toc }

##### Configuration
{: .no_toc }

##### Output
{: .no_toc }

---

## Regression Analysis

Use the `Regression Analysis` variable selection by browsing in the top ribbon: 

| Data Transformation $$\rightarrow$$ Variable Selection $$\rightarrow$$ Regression Analysis |

### Input
{: .no_toc }

### Configuration
{: .no_toc }

|**Significance Level (α)**| Text |
|**Select Intercept Column**| Text |

### Output
{: .no_toc }

### Example
{: .no_toc }

##### Input
{: .no_toc }

##### Configuration
{: .no_toc }

##### Output
{: .no_toc }
---

-->

## Tips
* Ensure your dataset is preprocessed correctly before applying feature selection.
* Different evaluators and configurations may yield different results; experiment to find the best setup for your specific dataset and problem.

## See also
Explore further preprocessing steps in the [`Data Transformation`](https://www.docs.isalos.novamechanics.com/data-transformation.html) group of functions.

### Workflows
{: .no_toc }

#### House pricing case study
{: .no_toc }
* [Isalos workflow](files/Regression/Housing prices/hp.ekk)
* [Report](files/Regression/Housing prices/Housing Prices.pdf)

#### Insurance charges case study
{: .no_toc }
* [Isalos workflow](files/Regression/Insurance charges/ic.ekk)
* [Report](files/Regression/Insurance charges/Insurance Charges.pdf)

#### Salary prediction case study
{: .no_toc }
* [Isalos workflow](files/Regression/Salary prediction/sp.ekk)
* [Report](files/Regression/Salary prediction/Salary Prediction.pdf)

#### Breast cancer case study
{: .no_toc }
* [Isalos workflow](files/Classification/Breast cancer/bc.ekk)
* [Report](files/Classification/Breast cancer/Breast Cancer.pdf)

#### Parkinson's disease case study
{: .no_toc }
* [Isalos workflow](files/Classification/Parkinson's disease/pd.ekk)
* [Report](files/Classification/Parkinson's disease/Parkinson's Disease.pdf)

<!--## References {#references-variable-selection}
1. Witten Ian H and Frank, Eibe and Hall, Mark A and Pal CJ. Data Mining: Practical Machine Learning Tools and Techniques. Fourth. Morgan Kaufmann; 2011. [doi.org/10.1016/C2009-0-19715-5](https://doi.org/10.1016/C2009-0-19715-5).
1. Varsou D-D, Afantitis A, Tsoumanis A, Papadiamantis AG, Valsami‐Jones E, Lynch I, et al. Zeta‐Potential Read‐Across Model Utilizing Nanodescriptors Extracted via the NanoXtract Image Analysis Tool Available on the Enalos Nanoinformatics Cloud Platform. Small 2020;16:1906588. [doi.org/10.1002/smll.201906588](https://doi.org/10.1002/smll.201906588).

---

## Version History
Introduced in Isalos Analytics Platform v0.3.2

_Instructions last updated on July 2024_

-->