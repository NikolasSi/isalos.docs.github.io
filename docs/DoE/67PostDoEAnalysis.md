---
layout: default
title: 6.7 Post DoE Analysis
parent: 6. DOE
nav_order: 7
permalink: /post-doe-analysis.html
---

# Post DoEAnalysis
{: .no_toc }

Post DoE Analysis provides a comprehensive set of tools to evaluate and interpret experimental results obtained through Design of Experiments (DoE) methodologies. With this module, users can easily identify the most influential factors, explore the impact of individual variables, and study interactions between them. Available visualization options include:
1.	Pareto Chart for ranking and visualizing the relative importance of effects.
1.	Main Effects Plots show how changes in a single factor influence the response and test whether the relationship between the dependent variable and each factor is linear.
1.	Interaction Plots to illustrate how two factors jointly affect the outcome and test whether there is interaction between two factors.
1.	Combined Main Effects + Interaction Plots for a holistic view of factor influences.

The tool supports both factorial/screening designs and response surface designs, making it adaptable to a wide variety of experimental setups.
For screening and factorial designs only, users may choose to include center points in the design. This does not mean the addition of extra experimental points in the design but rather that center points already included in the design will be handled differently. This is done by adding an extra 0/1 indicator variable, where a value of 1 identifies center points. Including this variable allows the algorithm to capture a portion of unexplained variability that is not accounted for by the main effects and interaction terms. This indicator is not included in the Pareto plots or in the main effect and interaction plots; it is only used internally to improve the explanation of variability. In contrast, for response surface designs, this option is not available, since the inclusion of curvature and quadratic terms already incorporates the information provided by center points.
The Pareto Plot is used to visualize the relative importance of model terms (main effects, quadratic terms and interactions) and to identify which factors have a statistically significant impact on the response. The construction of the plot depends on whether the error term in the model has available degrees of freedom.
1.	 Error with Degrees of Freedom 
In this case, a Pareto Plot of standardized effects is created. Each effect is divided by its estimated standard error to obtain a standardized effect size. The plot ranks these standardized effects in descending order of magnitude, making it easy to identify the most influential terms. A significance line is drawn to indicate the threshold value above which an effect is considered statistically significant, based on the Level of Significance specified by the user.

1.	Error with No Degrees of Freedom 
When no residual degrees of freedom are available, standard errors for the effects cannot be estimated directly. In this case, a Pareto Plot of raw effects is generated, showing the absolute effect size for each term. To assess significance, Lenth’s Pseudo Standard Error (PSE) is calculated and used together with a t-distribution, where the degrees of freedom are defined as the number of effects divided by three. The resulting threshold is then applied to determine significance, again using the Level of Significance specified by the user.

The Main Effects and Interaction Plots differ in construction depending on the type of experimental design chosen: Screening/Factorial or Response Surface.
1.	Screening / Factorial Designs
    1. Main Effects Plots:
    For each factor, the response is evaluated at its two extreme levels (low and high) while all other factors are fixed at their center values. A line is drawn between these two fitted points to represent the main effect of that factor. The center point is also plotted to assess whether it aligns with the expected linear relationship.

    1. Interaction Plots:
    For a given interaction (e.g., Factor A × Factor B), two lines are constructed: One with Factor B set at its low level. Another with Factor B set at its high level. For each line, the response is fitted at Factor A = low and Factor A = high. The center point is also included to check consistency with the modeled trend.

1. Response Surface Designs

    1. Main Effects Plots:
    The fitted second-order model (including quadratic terms) is used to compute the response as each factor varies across its range. All other factors are fixed at their center values. This produces a smooth second-order curve showing the factor’s main effect on the response.
    
    1. Interaction Plots:
    For two interacting factors, the second-order model is again used. One factor is varied across its range, while the second factor is fixed at three different levels: low, center, and high. This results in three separate curves, allowing the user to visualize how the interaction modifies the relationship between the factors and the response.

When generating main effects and interaction plots, it is essential to use the Specify Factor Values option to correctly define the low and high levels of each factor. These values determine how the plots are constructed and must be chosen carefully. Some constraints apply:
1.	The specified low value cannot be less than the minimum observed value of the factor in the dataset.
1.	The specified high value cannot be greater than the maximum observed value of the factor in the dataset.
1.	Additionally, the low value must always be strictly less than the high value.

Use the `Post DoE Analysis` tool by browsing in the top ribbon: 

|DOE $$\rightarrow$$ Post DoE Analysis|


# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Input
{: .no_toc}

All variables must be specified in the datasheet. The input to the algorithm consists of the results of a Design of Experiments (DoE) method, with the addition of the response calculated for each experimental run. Both the response variable and all factors must be numerical. Each row corresponds to a single observation from the experiment. In addition, the algorithm supports the optional inclusion of a covariate, which should also be numerical and can be used to account for unexplained variability and improve the accuracy of the analysis.

## Configuration
{: .no_toc}

|**Dependent Variable**| Select the column that corresponds to values of the dependent variable.|
|**Analysis Type**| Select the desired analysis type for the analysis. Available options include: Main Effects, Main Effects + Two-Factor, Main Effects + Two Factor + Three Factor, Main Effects + Quadratic, Main Effects + Two-Factor + Quadratic, Main Effects + Two Factor + Three Factor + Quadratic. For screening/factorial designs, it is recommended not to include quadratic terms, while for response surface designs, quadratic terms should typically be included.|
|**Chart**| Select the desired chart to produce. Available options include: None, Pareto Chart, Main Effects Factorial Plot, Interactions Factorial Plot, Main Effects + Interactions Factorial Plot. |
|**Level Of Significance**| Specify the level of significance for the analysis. Values should range from 0 to 1 with the default value being 0.05. |
|**Factors/Covariates/Excluded Columns**| Select manually the columns that correspond to factors and the columns that correspond to covariates through the dialog window: Use the buttons to move columns between the Factors and Covariates list and Excluded Columns list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. At least one factor column should be specified. |
|**Specify Factor Values**| If Factorial Plots are to be produced specify the low and high value for each factor to ensure the plots are generated correctly. By default, these values are initialized to the minimum and maximum observed values of each variable.|
|**DOE type**| Select whether you have performed a Factorial/Screening or a Response Surface Design. |
|**Include Center Points**| If you have performed a Factorial/Screening design, select whether to include center points in the analysis.|

## Output
{: .no_toc}
The output of the Post DoE Analysis procedure depends on the selected chart type and is organized as follows:
1. None (Effects Table Only):
When no chart is selected, the output consists of a table listing the estimated effects of all model terms. Effects are displayed in descending order of magnitude, corresponding to the information used in the Pareto chart. No plots are generated in this case.
1. Pareto Chart:
When the Pareto chart option is selected, the output spreadsheet contains the same table of effects in descending order. In addition, a pop-up window displays the Pareto chart, where a significance line is shown based on the user-specified level of significance.
1. Factorial Plots (Main Effects, Interactions, or Combined):
When factorial plots are selected, the output spreadsheet contains the fitted response values used to generate the curves. For each curve, 300 data points are provided, allowing precise plotting and replication of the results. A separate pop-up window is generated for each plot:
1. Main Effects Plots: One plot is displayed per factor, showing the fitted response across the specified low and high values, with the center point included.
1. Interaction Plots: One plot is displayed per interaction. Each plot contains three fitted curves corresponding to the second factor of the interaction set at low, center, and high values. The spreadsheet includes the corresponding data points for each curve, as shown in the interaction plot output table.


## Example
{: .no_toc}

#### Input
{: .no_toc}

#### Configuration
{: .no_toc}


#### Output
{: .no_toc}


---

## References {#references-design-of-experiments}
1. Alkiayat, M., A practical guide to creating a Pareto chart as a quality improvement tool. Global Journal on Quality and Safety in Healthcare, 2021. 4(2): p. 83–84. [doi.org/10.36401/JQSH-21-X1](https://doi.org/10.36401/JQSH-21-X1).

---

## Version History
Introduced in Isalos Analytics Platform v0.2.4

_Instructions last updated on September 2026_