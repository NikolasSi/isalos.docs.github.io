---
layout: default
title: 5.9 Design of Experiments
parent: 5. Statistics
nav_order: 9
permalink: /design-of-experiments.html
---

# Design of Experiments
{: .no_toc }
Design of Experiments (DoE) is a systematic approach to planning, conducting, and analyzing controlled tests to understand the factors that influence a particular outcome. It involves manipulating one or more independent variables to observe their effects on a dependent variable, allowing researchers to determine cause-and-effect relationships and optimize processes. By using techniques such as randomization, replication, and blocking, DoE enhances the reliability and validity of experimental results, making it a crucial tool in scientific research and industrial applications.  


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Box Behnken

Box-Behnken<sup>[1](#design-of-experiments)</sup> designs are an integral component of response surface methodology (RSM) in experimental statistics, tailored for optimizing systems with multiple interacting variables. Renowned for their efficiency, these designs effectively capture interactions among variables while avoiding some of the complexities and potential pitfalls of full factorial designs.

A defining feature of Box-Behnken designs is the assignment of each factor to one of three equally spaced values: typically coded as -1, 0, and +1. These values correspond to the low, medium, and high levels for each factor, respectively. Such systematic placement of factors facilitates a comprehensive exploration of the response surface by allowing for a detailed investigation into how different factor levels influence the outcome.

Crucially, Box-Behnken designs are structured to fit a quadratic model. This capability is particularly valuable because it accommodates not only linear relationships but also the interaction effects (products of two factors) and squared terms of the factors. This adaptability makes Box-Behnken designs suitable for experiments where complex interactions between factors are anticipated, and where the response to changes in factor levels may be non-linear.

Another significant advantage of Box-Behnken designs is their ability to maintain a reasonable ratio of experimental points to coefficients in the quadratic model, typically ranging from 1.5 to 2.6. This balance is crucial for managing both computational complexity and the predictive accuracy of the model. By optimizing this ratio, the design maximizes the information obtained from each experimental run, enhancing the efficiency of the study.

Furthermore, Box-Behnken designs aim to minimize the variation in estimation variance, which depends solely on the distance from the center of the design space. This characteristic is particularly evident in designs with four and seven factors, where it helps ensure the reliability of results and maintains low variance across the smallest (hyper)cube encompassing all experimental points.

In summary, Box-Behnken designs offer an optimal trade-off between the completeness of information gathered and the experimental effort required. This makes them a sophisticated yet practical choice for exploring and understanding complex experimental landscapes, especially in scenarios where multiple variables interact in potentially nonlinear ways.

Use the `Box Behnken` function by browsing in the top ribbon: 

| Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Box Behnken |
 
### Input
{: .no_toc }
In the input data sheet, numerical values should be specified with minimum 3 columns and two values each representing min and max level of each factor (column).

### Configuration
{: .no_toc }

|**Number of Center Points**| Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
|**Number of Blocks**|Select manually the `Number of Blocks`. The lowest value that can get is 1.|
|**Random Standard order**| You can tick/select the box if randomness is required in the output list of experiments. |
|**Time-based RNG Seed**| If in the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time.   |
|**RNG Seed**|Select manually the random generated number seed if required.    |
|**Include/exclude columns**| Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc }
A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the Box Behnken design method.

### Example
{: .no_toc }

##### Input
{: .no_toc }
In the input datasheet in the right-hand side, you can specify minimum of three factors (columns) and minimum two levels/values (rows) for each factors representing min and max values, as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/behnken-input.png" alt="Box Behnken input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1.   Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Box Behnken`.
1.   Type the `Number of Center Points` [1] to be generated in the output list of experiments.
1.   Type the `Number of Blocks` [2]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1.  Select the columns by clicking on the arrow buttons [8] and moving columns between the `Excluded Columns` [6] and `Included Columns` [7] lists.
1.   Click on the `Execute` button [9] to perform Box Behnken design method.

<div style="text-align: center;">
<img src="images/Design of experiments/behnken.svg" alt="Box Behnken" width="400" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }

The output list of experiments is generated for the three factors outlining a list of 12 experiments based on the Box Behnken design. Block number is presented in Col1 as shown below.
<div style="text-align: center;">
<img src="images/Design of experiments/behnken-output.png" alt="Box Behnken" width="350" height="300" class="img-responsive">
</div>

---

## Central Composite

The Central Composite Design (CCD), introduced by George E. P. Box and K. B. Wilson in 1951 and followed up by Box and Hunder in 1957,<sup>[2](#design-of-experiments)</sup> is a foundational technique in Response Surface Methodology (RSM) designed to explore the entire response surface of a process and locate the optimal response within that surface. The structure of CCD includes a factorial or fractional factorial design, augmented with center points and a set of “star points”. These star points are strategically placed along the axes of the factors under investigation at a distance that extends beyond the factorial points, crucial for estimating the curvature of the response surface. This design is adept at fitting a full quadratic model, capturing both the interactions between factors and their squared effects.

CCD is divided into three primary variations, each tailored to meet specific experimental needs and constraints:

*   **Circumscribed Designs (CCC):** This variant situates cube points at the corners of a unit cube defined by the product of intervals [-1,1]. It includes star points that may lie on or extend outside the cube and center points at the origin. The CCC is advantageous for its ability to explore beyond the confines defined by the factorial points, making it suitable for experiments where extending the range of factor levels is possible.
*   **Inscribed Designs (CCI):** In this design, the star points are scaled to the values of -1 and +1, placing them on the surface of the unit cube, while the cube points are located within the interior of the cube. The CCI is particularly beneficial when there are restrictions on the maximum or minimum factor levels that can be practically or safely tested, as it confines the experimentation within the standard levels.
*   **Faced Designs (CCF):** This approach positions the star points on the faces of the cube, rather than extending beyond or resting on the surface of the cube. This results in a design that utilizes only three levels per factor, as opposed to the five levels used in the circumscribed and inscribed designs. Faced designs are advantageous in scenarios where resources are limited or when there are constraints that prevent a more extensive exploration of factor levels.

Each of these designs is tailored to fit different experimental conditions and requirements, allowing researchers to choose based on the number of factors, the limitations on factor levels, the necessity to explore beyond the factorial space, and the resources available for conducting experiments. By providing a range of configurations, CCDs offer a flexible and robust framework for experimenters aiming to optimize processes and responses effectively.

Use the `Central Composite` function by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Central Composite|

### Input 
{: .no_toc }
Numerical values should be specified in the input datasheet. The minimum requirement is to specify 2 columns (factors) along with two levels (values/rows) each representing min and max levels, respectively.

### Configuration
{: .no_toc }

|**Number of Center Points** |Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
|**Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
|**Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
|**Time-based RNG Seed** | If in the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
|**RNG Seed** | Select manually the random generated number seed if required. |
|**Select Design** | Choose among the options, `ccc`, `ccf`, `cci` representing circumscribed design, faced design and inscribed design, respectively. |
|**Select alpha method** | If `ccc` or `cci` designs are previously selected, then select either orthogonal or rotatable design. |
|**Include/exclude columns**| Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. | 

### Output
{: .no_toc }
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Fractional Factorial design method selected.

### Example
{: .no_toc }

##### Input
{: .no_toc }
In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below..

<div style="text-align: center;">
<img src="images/Design of experiments/central-input.png" alt="Central Composite input" width="350" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1.   Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Central Composite`.
1.   Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1.   Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1.   Choose to `Select Design` [6] method among the options, `ccc`, `ccf` and `cci` representing circumscribed, faced and inscribed designs, respectively.
1.   If ccc or cci designs are previously selected, then `Select alpha method` [7] either to have `orthogonal` or `rotatable` design.
1.   Select the columns by clicking on the arrow buttons [10] and moving columns between the `Excluded Columns` [8] and `Included Columns` [9] lists.
1.   Click on the `Execute` button [11] to apply the Central Composite design method.

<div style="text-align: center;">
<img src="images/Design of experiments/central.svg" alt="Central Composite" width="400" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }

The output list of experiments is generated for the two factors outlining a list of 8 experiments based on the Central Composite Circumscribed (ccc) and orthogonal design. Block number is presented in Col1 as shown below and the standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/central-output.png" alt="Central Composite" width="400" height="300" class="img-responsive">
</div>

---
## Fractional Factorial

Fractional factorial designs represent a refined approach within the framework of DoE that addresses the challenge of studying systems with multiple factors without resorting to the exhaustive method used in full factorial designs. By selectively sampling a fraction of the full factorial design, these designs allow researchers to explore the effects of various factors using a substantially reduced number of experimental runs. This method is particularly valuable when dealing with a large number of factors, where a full factorial design would require an impractically large set of experiments, escalating costs and resource usage.

The efficiency of fractional factorial designs comes from their strategic choice of factor level combinations, capturing essential information about the system while significantly cutting down on the number of required experiments. This efficiency, however, introduces the primary challenge of confounding. Confounding occurs when the effects of some factor combinations become indistinguishable from others. For instance, in a four-factor experimental setup, a typical confounding pattern such as “A - B - C - BC” implies that the effect of the fourth factor is entangled with the combined effects of the second and third factors. This overlap means that while the design is more efficient, it sacrifices some ability to precisely attribute effects to individual factors or their specific combinations.

Despite this trade-off, with meticulous design and a clear understanding of the system under study, fractional factorial designs can yield significant insights. They are particularly adept at identifying the main effects and certain interactions among the factors, which are often sufficient for preliminary analysis or when certain factors or interactions are suspected to be of lesser importance.

Moreover, fractional factorial designs prove exceptionally useful in scenarios where some factors are presumed to have minimal or no effect, or where certain interactions are deemed negligible. In these cases, the designs can provide nearly as comprehensive information as full factorial designs but at a fraction of the operational cost and effort. This makes fractional factorial designs a highly strategic tool in experimental research, balancing resource management with the acquisition of critical data points necessary for effective decision-making in system optimization and improvement.

Use the `Fractional Factorial` function by browsing in the top ribbon: 

| Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Fractional Factorial|

### Input
{: .no_toc }
Numerical values should be specified in the input datasheet. Fractional factorial design is applied when at least three factors (columns) are specified along with minimum two levels/values (rows).

### Configuration
{: .no_toc }

|**Number of Center Points** | Select manually the Number of `Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
|**Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
|**Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
|**Time-based RNG Seed** | If in the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time |
|**RNG Seed** | Select manually the random generated number seed if required. |
|**Fraction Relationship** | Select manually the `Fraction Relationship` to perform the desire Fractional Factorial design. |
|**Include/exclude columns** | Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc }
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Fractional Factorial design method selected.

### Example
{: .no_toc }

##### Input
{: .no_toc }
In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/fractional-input.png" alt="Central Composite input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1.   Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Fractional Factorial`.
1.   Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1.   Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1.   Select `Fraction Relationship` [6] lists.
1.   Select the columns by clicking on the arrow buttons [9] and moving columns between the `Excluded Columns` [7] and `Included Columns` [8] lists.
1.   Click on the `Execute` button [10] to perform Fractional Factorial design method.

<div style="text-align: center;">
<img src="images/Design of experiments/fractional.svg" alt="Franctional Factorial" width="400" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }

A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the Fractional Factorial design method selected. The standard order is provided in Col2.
<div style="text-align: center;">
<img src="images/Design of experiments/fractional-output.png" alt="Central Composite" width="400" height="300" class="img-responsive">
</div>

---
## Full Factorial

A Full Factorial DoE is a comprehensive method used in experimental research to investigate all possible combinations of factor levels, allowing for a complete analysis of two or more factors. Each factor is tested at different discrete levels, and the total number of experimental combinations ($n$) is determined by multiplying the number of levels ($l_f$) of each factor ($f$). This relationship is mathematically expressed as:

<div id="eq. fullfactorial1">
$$
\begin{equation}
n = \prod_{f=1}^{F} l_{f}  {\qquad [1] \qquad}
\end{equation}  
$$
</div>

where, $n$ is the number of total experimental combinations, $F$ is the total number of factors and $l_f$ is the number of levels of the $f$ factor.

The strength of Full Factorial DoE lies in its thoroughness. By examining every possible combination of factors and their levels, it provides a detailed mapping of the experimental space. This design is particularly powerful for elucidating not only the individual effects of each factor but also any interactions between them. Such interactions can often be critical, influencing the outcome in ways that would not be evident from studying the factors independently.

Full Factorial DoE ensures that every potential interaction is explored, offering a robust understanding of the system under investigation. This is crucial for drawing reliable conclusions and making informed decisions based on the experiment's results. However, while Full Factorial DoE is unmatched in its comprehensiveness, it can become extremely resource-intensive, especially as the number of factors or levels increases. Each additional factor exponentially increases the number of experiments needed, which can escalate costs and time requirements significantly.

Thus, while Full Factorial DoE provides an unmatched depth of understanding due to its exhaustive exploration of all factor combinations, its practical application must be carefully considered. 

Balancing the need for comprehensive data with the practical limitations of experimental resources is essential. In cases where resources are limited or the number of factors is high, alternative designs like fractional factorial designs or response surface methodologies might be employed to efficiently capture the most critical information without conducting every possible experimental combination.

Use the `Full Factorial` function by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Full Factorial|

### Input
{: .no_toc}

Numerical values should be specified in the input datasheet. The minimum requirement is to specify 2 columns (factors) along with two levels (values/rows) each representing min and max levels, respectively.

### Configuration
{: .no_toc}

| **Number of Center Points** | Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
| **Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
| **Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
| **Time-based RNG Seed** | If randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
| **RNG Seed** | Select manually the random generated number seed if required. |
| **Include/exclude columns** | Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc}

A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Full Factorial design method selected.

### Example
{: .no_toc}

##### Input
{: .no_toc}

In the input datasheet minimum requirement is to specify two factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/full-factorial-input.png" alt="Full Factorial input" width="350" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc }

1.   Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Full Factorial`.
1.   Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1.   Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1.   Select the columns by clicking on the arrow buttons [8] and moving columns between the `Excluded Columns` [6] and `Included Columns` [7] lists.
1.   Click on the `Execute` button [9] to perform Full Factorial design method.

<div style="text-align: center;">
<img src="images/Design of experiments/full-factorial.svg" alt="Full Factorial" width="400" height="400" class="img-responsive">
</div> 

##### Output 
{: .no_toc}

The output list of experiments is generated for the two factors outlining a list of 4 experiments based on the Full Factorial design. Block number is presented in Col1 as shown below and the standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/full-factorial-output.png" alt="Full Factorial output" width="400" height="400" class="img-responsive">
</div> 

---

## Halton Design
Halton designs utilize Halton sequences, which are low-discrepancy sequences that generate quasi-random points in a multidimensional space. These sequences are deterministic, but they have the advantage of distributing points more uniformly compared to traditional random sampling methods. The low-discrepancy nature ensures that the design points cover the experimental space more evenly, which is particularly valuable when exploring high-dimensional systems where evenly distributed data points improve the quality of experimental results.

In the context of DοΕ, Halton sequences are used to address challenges such as efficiently sampling large parameter spaces and improving the convergence of optimization algorithms. The quasi-random nature of the sequence allows experimenters to explore the design space in a structured manner, avoiding clustering or gaps that can occur with random sampling.

Halton sequences are generated by applying a radical-inverse function in different prime-number bases. Each dimension of the design space is assigned a different prime base, which ensures that the points in the space are distributed without overlap or repetition. 

For instance, in base-2, the following steps are followed to compute the $n^{th}$  sample for a factor that takes values within the range $[a,b]$:
* Convert the integer $n$ to its base-2 representation.
* Reverse the digits of the base-2 number.
* Interpret the reversed digits as a fraction.
* Scale the fraction using the formula $𝑎 + ( 𝑏 – 𝑎 ) × fraction$, which maps the value to the  desired range.

This process is repeated for each dimension, ensuring that the points are spread across the entire design space.

One of the significant advantages of Halton sequences in DοE is their ability to provide uniform coverage of the experimental space with relatively fewer points compared to traditional designs. This makes them especially useful in applications where the design space is large and computational or experimental costs are high or there is a need to minimize the number of experiments while maintaining a good representation of the entire space.

Although Halton designs are not directly tied to Response Surface Methodology (RSM), they can be employed as part of the experimental designs used to collect data for response surface modelling. Halton sequences are particularly useful when initial exploration of the design space is required, or when a broad set of points is needed to fit a global model. By efficiently exploring the space, Halton designs can help identify important regions of interest, which can then be refined using more traditional RSM approaches, such as Central Composite Designs (CCD) or Box-Behnken Designs.

Use the `Halton Design` by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Halton Design|

### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. Halton design is applied when at least one  factor (column) is specified along with at least two levels/values (rows).

### Configuration
{: .no_toc}

| **Number of Center Points** | Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
| **Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
| **Number of Samples**| Select manually the `Number of Samples` to be included in the output list of experiments. The lowest value that can get is 1.|
| **Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
| **Time-based RNG Seed** | If randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
| **RNG Seed** | Select manually the random generated number seed if required. |
| **Include/exclude columns** | Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Halton design.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify one factor (column) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/halton-input.png" alt="Halton Input" width="400" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}
1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Halton Design`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select the `Number of Samples` [3]  to be included in the output list of experiments. The lowest value that can get is 1.
1. Select/tick if required the `Random Standard order` [4] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [5] or by manually setting a value [6].
1. Select the columns by clicking on the arrow buttons [9] and moving columns between the `Excluded Columns` [7] and `Included Columns` [8] lists. 
1. Click on the `Execute` button [10] to perform Halton design method.

<div style="text-align: center;">
<img src="images/Design of experiments/halton-configuration.svg" alt="Halton Configuration" width="400" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the Halton design method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/halton-output.png" alt="Halton Output" width="400" height="400" class="img-responsive">
</div> 

---

## LHS
Latin Hypercube Sampling (LHS) is a stratified sampling technique that ensures uniform coverage of each factor's range in a multidimensional space. LHS divides the range of each input variable into n equally spaced intervals, where n is the number of observations or sample points. One of the key features of LHS is that for each input variable, exactly one sample is drawn from each interval. This ensures that the entire range of each factor is well covered without any clustering of points, which can often occur in purely random sampling methods.

A Latin Hypercube of $n$ runs for $k$ factors is represented by an $n × k$ matrix, each column of which is a permutation of n equally spaced levels. Typically , the n levels are taken to be:

<div id="eq. lhs1">
$$
\begin{equation}
-\frac{n-1}{2}, -\frac{n-3}{2}, \ldots, \frac{n-3}{2}, \frac{n-1}{2}
\end{equation}  
$$
</div>

Given an $n × k$ Latin Hypercube $L = (l_{ij})$, a Latin hypercube design $D$ in the design space $[a_1, b_1] \times \cdots \times [a_k, b_k]$ ($[a_j, b_j]$ is the range of the $j^{th}$ factor) can be generated and the design matrix of $D$ is an $n × k$ matrix with the $(i, j)^{th}$ entry being: 

<div id="eq. lhs2">
$$
\begin{equation}
d_{ij} = \frac{l_{ij} + \frac{(n-1)}{2} + u_{ij}}{n}, \quad i = 1, \dots, n, \quad j = 1, \dots, k
\end{equation}  
$$
</div>

where $u_{ij}$’s are independent random numbers from $[a_j, b_j]$. This transformation ensures that the sample points are mapped to the desired ranges for each factor, while preserving the stratified nature of the design.

One of the significant advantages of LHS is its ability to provide better coverage of the design space compared to purely random sampling techniques. In random sampling, points may cluster together or leave large gaps in the experimental space. LHS avoids this by ensuring that each factor is uniformly sampled across its range, which improves the robustness of the sampling process. This makes LHS particularly well-suited for cases where the design space is large or where experiments are expensive and a minimal number of runs is desired.

Unlike Halton sequences, which are quasi-random and designed to provide low-discrepancy sequences, LHS is a deterministic method that focuses on achieving uniformity in one dimension (per factor). While Halton sequences excel at providing uniform coverage in higher-dimensional spaces due to their quasi-random nature, LHS is often preferred when ensuring that each factor's range is fully represented is the main goal. LHS also avoids repeated runs, ensuring that no two sample points overlap for any factor.

In the DoE framework, LHS is used to generate robust sample points for simulations and predictive models. Although LHS is not inherently designed for fitting response surfaces, it can be used in the initial exploratory phases of Response Surface Methodology (RSM) to generate a broad set of data points. These data points can help identify areas of interest in the design space, which can then be refined using more specialized RSM designs such as Central Composite Designs (CCD) or Box-Behnken Designs.

Use the `LHS` designs by browsing in the top ribbon: 

| Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ LHS |

### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. LHS is applied when at least one  factor (column) is specified along with at least two levels/values (rows) LHS will assume the lowest of the levels as the lower bound of the factor’s range and the highest of the levels as the higher bound of the factor’s range.

### Configuration
{: .no_toc}

| **Number of Center Points** | Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
| **Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
| **Number of Samples**| Select manually the `Number of Samples` to be included in the output list of experiments. The lowest value that can get is 1.|
| **Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
| **Time-based RNG Seed** | If randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
| **RNG Seed** | Select manually the random generated number seed if required. |
| **Include/exclude columns** | Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the LHS design.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify one factor (column) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-input.png" alt="LHS Input" width="400" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}
1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `LHS`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select the `Number of Samples` [3]  to be included in the output list of experiments. The lowest value that can get is 1.
1. Select/tick if required the `Random Standard order` [4] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [5] or by manually setting a value [6].
1. Select the columns by clicking on the arrow buttons [9] and moving columns between the `Excluded Columns` [7] and `Included Columns` [8] lists. 
1. Click on the `Execute` button [10] to perform the LHS design method. 

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-configuration.svg" alt="LHS Configuration" width="400" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the LHS method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-output.png" alt="LHS Output" width="400" height="400" class="img-responsive">
</div> 

---

## LHS Space Filling
Space-Filling Latin Hypercube Sampling (LHS) is an extension of the traditional Latin Hypercube Sampling method, designed to improve the uniformity of sample point distribution across the entire design space. While standard LHS ensures that each factor is uniformly sampled across its range by stratifying each dimension, Space-Filling LHS enhances this approach by striving to fill the design space as evenly as possible. This method avoids clustering of points and large gaps, providing more robust coverage in multidimensional spaces.

A key feature of Space-Filling LHS is its optimization of the placement of sample points to ensure a balance between points across all dimensions. While traditional LHS achieves one-dimensional uniformity, space-filling designs aim for multidimensional uniformity, ensuring that points are spread throughout the entire 𝑘-dimensional design space, reducing regions of high point density and minimizing large empty regions.

To achieve this the design aims to maximize the minimum distance between sample points, also referred to as “maximin” designs. Therefore, the distance between two points is as large as possible. Several optimization techniques can be applied to LHS to achieve this, such as minimizing a distance criterion or using evolutionary algorithms to adjust the positions of the sample points.

Given an $n × k$ Latin Hypercube $L = (l_{ij})$, a Space-Filling Latin hypercube design $D$ in the design space $[a_1, b_1] \times \cdots \times [a_k, b_k]$ ($[a_j, b_j]$ is the range of the $j^{th}$ factor) can be generated  similarly to the standard LHS design, and the design matrix of $D$ is an $n × k$ matrix with the $(i, j)^{th}$ entry being: 

<div id="eq. lhs3">
$$
\begin{equation}
d_{ij} = \frac{l_{ij} + \frac{(n-1)}{2} + u_{ij}}{n}, \quad i = 1, \dots, n, \quad j = 1, \dots, k
\end{equation}  
$$
</div>

where $u_{ij}$’s are independent random numbers from $[a_j, b_j]$ used to optimize the positions of the sampling points for better space-filling properties. The result is a design where points are more uniformly distributed across the entire multidimensional space.

The primary advantage of Space-Filling LHS over traditional LHS is its improved coverage of the design space in multiple dimensions. Traditional LHS provides one-dimensional uniformity by ensuring that each factor is sampled evenly across its range. However, this can sometimes result in points clustering together in certain regions of the space, particularly in high-dimensional settings. Space-Filling LHS reduces these clusters and ensures that the points are not only well distributed across each dimension but also across the full multidimensional space.

Space-Filling LHS is particularly valuable in cases where computational or experimental costs are high, and a limited number of samples must provide comprehensive coverage of the space. By ensuring that the sample points are spread evenly across the design space, Space-Filling LHS minimizes the number of samples needed while maintaining robust coverage.

Use the Space – Filling LHS designs by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ LHS Space Filling|


### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. Space-Filling LHS  is applied when at least one  factor (column) is specified along with at least two levels/values (rows) LHS will assume the lowest of the levels as the lower bound of the factor’s range and the highest of the levels as the higher bound of the factor’s range.

### Configuration
{: .no_toc}

| **Number of Center Points** | Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation. |
| **Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
| **Number of Samples**| Select manually the `Number of Samples` to be included in the output list of experiments. The lowest value that can get is 1.|
| **Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
| **Time-based RNG Seed** | If randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
| **RNG Seed** | Select manually the random generated number seed if required. |
| **Include/exclude columns** | Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns. |

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Space – Filling LHS design.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify one factor (column) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-space-input.png" alt="LHS Space Filling Input" width="400" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}
1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `LHS Space Filling`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select the `Number of Samples` [3]  to be included in the output list of experiments. The lowest value that can get is 1.
1. Select/tick if required the Random Standard order [4] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [5] or by manually setting a value [6].
1. Select the columns by clicking on the arrow buttons [9] and moving columns between the `Excluded Columns` [7] and `Included Columns` [8] lists. 
1. Click on the `Execute` button [10] to perform the Space Filling LHS design method. 

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-space-configuration.svg" alt="LHS Spac Filling Configuration" width="400" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the Space - Filling LHS method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/lhs-space-output.png" alt="LHS Space Filling Output" width="400" height="400" class="img-responsive">
</div> 

---

## Mixtures

Mixture design (experiment) is a special class of response surface method (RSM). These experiments focus on understanding how various proportions of components influence the overall characteristics of a mixture. A critical aspect of mixture experiments is that the factors being tested are the proportions of each component within the mixture. There's an inherent constraint in these experiments: the sum of the proportions of all components must always equal 1. This constraint introduces unique challenges in both the design and analysis phases of the experiments.

To effectively address these challenges, two popular designs are often employed: the simplex lattice design and the simplex centroid design. The simplex lattice design offers a comprehensive approach by testing at all possible combinations of component proportions, including those at the vertices, edges, and faces of the simplex. This design allows for a detailed exploration of the interactions between components across the entire range of possible formulations.

In contrast, the simplex centroid design focuses on the centroid of each subspace of the simplex, including the overall centroid. This method is particularly beneficial for initial studies where a full-scale experimental approach may be impractical. It provides a more streamlined set of experiments that can still yield valuable insights into the main effects and some interactions among the mixture components.

Both the simplex lattice and simplex centroid designs are instrumental in overcoming the challenges posed by the fixed sum constraint in mixture experiments. They enable researchers to systematically explore and optimize different formulations, making them invaluable tools in the development of new products and processes where mixture proportions are critical.

Use the `Mixtures` function by browsing in the top ribbon: 

|Analytics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Mixtures|

### Input 
{: .no_toc}

Input data for Mixtures design is not required.

### Configuration 
{: .no_toc}

| **Number of Blocks** | Select manually the `Number of Blocks`. The lowest value that can get is 1. |
| **Random Standard order** | You can tick/select the box if randomness is required in the output list of experiments. |
| **Time-based RNG Seed** | If randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time. |
| **RNG Seed** | Select manually the random generated number seed if required. |
| **Select Design** | Select Design offers two options either `Simplex Centroid` or `Simplex Lattice`. |
| **Number of components** | Select the `Number of components` (factors) from the drop-down list. |
| **Degree of Lattice** | If `Simplex Lattice` design is chosen, then select the `Degree of Lattice` from the drop-down list. |
| **Augment the Design with Axial Points** | Select/tick the box to Augment the Design with Axial Points if desired. |
| **Augment the Design with Center Points** | If `Simplex Lattice` design is chosen, then there is also the option to select/tick to Augment the Design with Center Points. |
| **Component** | Drag the horizontal value bars for each component to specify the min and max (composition) value for each component. |

### Output 
{: .no_toc}

A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Mixtures design method selected.

### Example 
{: .no_toc}

##### Input
{: .no_toc}

No input data is required in the input datasheet.

##### Configuration
{: .no_toc}

1.   Select `Statistics`$$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Mixtures`.
1.   Select the `Number of Blocks` [1]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [2] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [3] or by manually setting a value [4].
1.   Select Design to be either `Simplex Centroid` or `Simplex Lattice` [5].
1.   Select `Number of components` in the Mixture from the drop-down list [6].
1.   If Simplex Lattice design method is selected, then select the Degree of Lattice from the drop-down list [7].
1.   Select/tick to `Augment the Design with Axial Points` [8].
1.   If `Simplex Lattice` design method is selected, then select/tick to `Augment the Design with Center Points` [9].
1.   Drag the horizonal value bars for each component [10] and [11] to specify the min and max (composition) value for each component.
1.   Click on the `Execute` button [12] to perform Mixtures design method.

<div style="text-align: center;">
<img src="images/Design of experiments/mixtures.svg" alt="Mixtures" width="500" height="400" class="img-responsive">
</div> 

##### Output
{: .no_toc}

The output list of experiments is generated for the two components outlining a list of 4 experiments based on the Mixtures design. Block number is presented in Col1 as shown below and the standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/mixtures-output.png" alt="Mixtures output" width="400" height="400" class="img-responsive">
</div> 


---

## Plackett Burman
Plackett-Burman designs are an efficient and economical approach within the DoE framework, particularly tailored for screening large numbers of factors in a system, similar to the Fractional Factorial Design. These designs are used to explore the main effects of up to $𝑘 = 𝑁 − 1$ factors in $𝑁$ experimental runs, where $𝑁$ is a multiple of 4 (e.g., 8, 12, 16). Moreover, all factors should have exactly two levels which we call high(+) and low (-). This structure allows researchers to identify which factors have significant main effects while minimizing the number of experimental runs required. This method becomes invaluable in scenarios where a full factorial design would necessitate prohibitively large experiments, consuming excessive time and resources.

Plackett-Burman designs achieve their efficiency by maximizing the number of factors that can be evaluated in a minimal number of runs. Unlike fractional factorial designs, which are crafted to manage both main effects and interactions, Plackett-Burman designs are specifically focused on detecting main effects. They are classified as resolution III designs, meaning that while they are well-suited to identify main effects, they confound these main effects with two-factor interactions. This confounding is a calculated trade-off, as the design assumes that two-factor interactions are either negligible or of less interest in the preliminary stages of experimentation.

For instance, in a Plackett-Burman design with 12 runs, up to 11 factors can be investigated, and any two-factor interactions will be indistinguishable from the main effects. This arrangement is particularly useful when the goal is rapid screening to pinpoint which factors have the most influence on the response variable, rather than an exhaustive analysis of all interactions. When the number of runs is a power of two (e.g., 8 or 16), the Plackett-Burman design is identical to a resolution III fractional factorial design.

Plackett-Burman designs are exceptionally valuable in early-stage experiments where a large number of factors are present, but only a subset is likely to have a substantial impact on the outcome. In these situations, they provide a powerful means to filter out the less impactful factors, allowing researchers to focus subsequent experiments on the most promising candidates. By reducing the number of necessary experiments, Plackett-Burman designs offer a practical balance between resource efficiency and the acquisition of critical data, making them an indispensable tool in experimental research for system optimization and improvement.

Use the `Plackett Burman` designs by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Plackett Burman|

### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. Plackett-Burman design is applied when at least four  factors (columns) are specified along with exactly two levels/values (rows).

### Configuration
{: .no_toc}

|**Number of Center Points**|Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation.|
|**Number of Blocks**|Select manually the `Number of Blocks`. The lowest value that can get is 1.|
|**Random Standard order**|You can tick/select the box if randomness is required in the output list of experiments.|
|**Time-based RNG Seed**|If the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time.|
|**RNG Seed**|Select manually the random generated number seed if required.|
|**Include/exclude columns**|Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns.|

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Plackett-Burman design.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/Plackett-Burman-input.png" alt="Plackett-Burman Input" width="400" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}
1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Plackett Burman`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1. Select the columns by clicking on the arrow buttons [8] and moving columns between the `Excluded Columns` [6] and `Included Columns` [7] lists.
1. Click on the `Execute` button [9] to perform Plackett-Burman design method.

<div style="text-align: center;">
<img src="images/Design of experiments/Plackett-Burman-configuration.svg" alt="Plackett-Burman Configuration" width="400" height="400" class="img-responsive">
</div>

##### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number based on the Plackett-Burman design method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/Plackett-Burman-output.png" alt="Plackett-Burman Output" width="400" height="400" class="img-responsive">
</div>

---

## Robust Parameter

Robust parameter design (RPD) is a crucial technique within the broader context of response surface methods, aimed at optimizing process settings to achieve desirable outcomes under varying conditions. In robust parameter design, the primary objective is to find factor settings that not only produce a mean response within specified limits but also minimize the response variability due to noise factors. Noise factors are variables that cannot be controlled during normal operation but significantly affect the process outcome. By controlling these noise factors during a process robustness study, it becomes possible to understand how fluctuations in these factors influence the response under different settings of the controllable factors.

The methodology typically involves fitting a second-order model for the controllable factors to capture the curvature of the response surface accurately. Additionally, the first-order effects and interactions of noise factors with controllable factors are modelled. These interactions are crucial as they help in understanding how changes in controllable factors can mitigate the effect of noise, thereby making the process more robust.

From the robust parameter design, two new models are developed. One model predicts the mean of the response as a function of the controllable factors, while the other predicts the variance. Notably, noise factors do not explicitly appear in these models; however, the parameter estimates for the interactions between control and noise factors critically influence the shape of the response surface for variance.

The Taguchi method is a well-known approach within robust parameter design, popularized for its structured way of studying the effects of multiple noise factors. Taguchi's key contribution is the use of orthogonal arrays to systematically analyze the effects of noise and control factors, reducing the number of experiments needed to gather sufficient data. This method places a strong emphasis on cost-effectiveness and efficiency in experimental design.

Combined array designs, often associated with Taguchi methods, involve the simultaneous consideration of both control and noise factors in a single experimental setup. This approach enables the experimenter to assess the interaction effects directly and is particularly useful in complex processes where interactions between control and noise factors are significant.

Both Taguchi methods and combined designs underscore the philosophy of robust design: optimizing product performance and quality under a range of operating conditions by systematically controlling and examining variability. These methodologies are integral to developing products and processes that are consistently reliable and meet customer expectations in the real world.

Use the `Robust Parameter` design function by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Robust Parameter|

### Input
{: .no_toc}

Numerical values should be specified in the input datasheet. Minimum of three columns (factors) should be specified as the minimum requirement for performing Robust Parameter design calculation is to have at least two control factors and one noise factor. Two levels/values should be specified for each factor (column) as minimum requirement.

### Configuration
{: .no_toc}

|**Number of Blocks**| Select manually the Number of Blocks. The lowest value that can get is 1.|
|**Random Standard order**|You can tick/select the box if randomness is required in the output list of experiments.|
|**Time-based RNG Seed**|If in the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time.|
|**RNG Seed**|Select manually the random generated number seed if required.|
|**Taguchi Design**|Select/tick the radio button corresponding to Taguchi Design if required.|
|**Combined Design**|Select/tick the radio button corresponding to Combined Design if required.|
|**Noise Factor/Available Columns/Control Factor**|Select manually from the Available Columns using the buttons the required columns which to be specified as control factors to the Control Factor dialog box and the one that required to be specified as noise factors to the Noise Factor dialog box.|

### Output
{: .no_toc}

A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Robust Parameter design method selected.

### Example
{: .no_toc}

##### Input
{: .no_toc}

In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/robust-input.png" alt="Robust Parameter input" width="350" height="400" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}

1.   Select `Statistics`$$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Robust Parameter`.
1.   Select the `Number of Blocks` [1]. The lowest value that can be set is 1.
1.   Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1.   If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1.   Select/Tick either the `Taguchi Design` [5] radio button or the `Combined Design` [6] radio button.
1.   Select the columns from the `Available Columns` window [7] that correspond to noise factors by using the arrows [10] to move them to the `Noise Factor` window [8] and the one that correspond to control factors by using the `arrows` [11] to move them to the `Control Factor` window [9].
1.   Click on the `Execute` button [12] to perform `Robust Parameter design method.

<div style="text-align: center;">
<img src="images/Design of experiments/robust.svg" alt="Robust Parameter" width="400" height="450" class="img-responsive">
</div> 


##### Output
{: .no_toc}

The output list of experiments is generated for the two control factors and one noise factor outlining a list of 16 experiments based on the Robust Parameter Taguchi design. Block number is presented in Col1 as shown below and the standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/robust-output.png" alt="Robust Parameter Output" width="400" height="400" class="img-responsive">
</div> 

---

## Sukharev Grid
The Sukharev Grid is part of a group of point dispersion approaches called low-dispersion sampling , which aims to minimize the largest uncovered space between sample points. Dispersion refers to the size of the largest gap or region between sampled points, and the goal of low-dispersion sampling is to reduce this gap to ensure more uniform coverage of the design space. By minimizing the dispersion, the Sukharev Grid forces sample points to be evenly distributed, avoiding clusters or large unrepresented regions in the design space.

When dispersion is minimized using the $L_\infty$ metric (the maximum norm, which measures the largest absolute difference between any two points), the result is a Sukharev Grid. The $L_\infty$ metric emphasizes the importance of covering the space evenly by prioritizing the minimization of the largest gap between any two sample points in a multidimensional grid.

To generate a Sukharev Grid, the design space is divided into a set of equally sized hypercubes (or "cubes" in lower dimensions). This partitioning is based on the number of factors $𝑛$, the number of sample points $𝑘$, and the range of each factor $[a_i, b_i]$. Each factor’s range is divided into $𝑘$ equal segments, and the grid points are placed at the center of each resulting hypercube.

Steps for constructing a Sukharev Grid:
* Divide each factor's range $[a_i, b_i]$  into $𝑘$ equal segments, where $𝑘$ is the desired number of samples.
* Place points at the center of each hypercube formed by the partitioning of the space. The center is chosen because it minimizes the dispersion for each hypercube, ensuring that the points are as far as possible from the boundaries of the cubes.
* Mathematically, if the range of factor $𝑖$ is $[a_i, b_i]$, and we divide this range into $𝑘$ intervals, the center of each interval is located at: $c_{ij} = a_i + \left( j + \frac{1}{2} \right) \frac{(b_i - a_i)}{k}, \quad \text{for } j = 0, 1, 2, \dots, k-1$. The grid points for the design are the Cartesian products of the centers across all factors, ensuring that the points are evenly distributed throughout the design space.

The Sukharev Grid is particularly useful in situations where it is important to have uniform coverage of the design space with minimal computational cost. By optimizing dispersion, this grid ensures that no large regions are left unsampled, which is essential for applications requiring a thorough exploration of the design space.

The Sukharev Grid belongs to the family of low-discrepancy and low-dispersion methods, such as Halton sequences, and Latin Hypercube Sampling (LHS). While methods like Halton and sequences focus on generating quasi-random points with low discrepancy (a measure of how evenly points are distributed), the Sukharev Grid optimizes dispersion by minimizing the largest uncovered area in the space.

Use the Sukharev Grid design function by browsing in the top ribbon: 

| Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Sukharev Grid |

### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. Sukharev grid is applied when at least one  factor (column) is specified along with at least two levels/values (rows). The method will assume the lowest of the levels as the lower bound of the factor’s range and the highest of the levels as the higher bound of the factor’s range.

### Configuration
{: .no_toc}

|**Number of Center Points**|Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation.|
|**Number of Blocks**|Select manually the `Number of Blocks`. The lowest value that can get is 1.|
|**Random Standard order**|You can tick/select the box if randomness is required in the output list of experiments.|
|**Time-based RNG Seed**|If the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time.|
|**RNG Seed**|Select manually the random generated number seed if required.|
|**Include/exclude columns**|Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns.|
|**Number of Samples**| Select from the list provided the `Number of Samples` to be included in the output list of experiments. The available options range through $2^k$ to $9^k$, where $k$ is the number of included columns. |

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the Block number and the Standard order based on the Sukharev Grid design method selected.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/sukharev-input.png" alt="Sukharev Grid input" width="400" height="450" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}

1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Sukharev Grid`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select/tick if required the `Random Standard order` [3] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [4] or by manually setting a value [5].
1. Select the columns by clicking on the arrow buttons [8] and moving columns between the `Excluded Columns` [6] and `Included Columns` [7] lists. 
1. Select the `Number of Samples` [9] to be generated in the output list of experiments by selecting the desired number for the options provided in the list ($2^k$ to $9^k$, where $k$ is the number of included columns).
1. Click on the `Execute` button [10] to perform Sukharev Grid method. 

<div style="text-align: center;">
<img src="images/Design of experiments/sukharev-configuration.svg" alt="Sukharev Grid Configuration" width="400" height="450" class="img-responsive">
</div>

##### Output
{: .no_toc}
A list of 16 experiments (combinations) is generated in the output datasheet along with the Block number based on the Sukharev Grid method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/sukharev-output.png" alt="Sukharev Grid output" width="400" height="450" class="img-responsive">
</div> 

---

## Uniform Design
A  Uniform Design is a type of experimental space filling design that aims to distribute sample points evenly across the design space, ensuring that the data collected provides a diverse and comprehensive exploration of the system under study. Like other space-filling designs, the goal of a uniform design is to scatter experimental points in a way that minimizes clustering, ensuring the entire space is well-covered, which helps capture the underlying relationship between the input factors and the response variable.

One of the distinguishing features of uniform design is its ability to balance exploration with a reasonable number of runs. Instead of requiring a large number of samples to cover the design space effectively, uniform designs can achieve good coverage with fewer sample points, making them computationally efficient and practical for many applications. This makes uniform design well-suited for situations where the number of experiments or simulations must be limited due to time or resource constraints.

To construct a uniform design using our approach, a different random seed is provided for each factor to ensure reproducibility, and the desired number of samples is generated by sampling from a uniform distribution in the interval (0,1). These sampled values are then appropriately scaled to match the range of each factor in the design space. This method ensures that the resulting points are evenly distributed across the entire space while being computationally efficient and straightforward to implement.

Use the `Uniform` design function by browsing in the top ribbon: 

|Statistics $$\rightarrow$$ Design of Experiments $$\rightarrow$$ Uniform|

### Input
{: .no_toc}
Numerical values should be specified in the input datasheet. Uniform Design is applied when at least one  factor (column) is specified along with two levels/values (rows). The method will assume the lowest of the levels as the lower bound of the factor’s range and the highest of the levels as the higher bound of the factor’s range.

### Configuration
{: .no_toc}

|**Number of Center Points**|Select manually the `Number of Center Points` to be included in the output list of experiments. There is no minimum requirement or any other limitation.|
|**Number of Blocks**| Select manually the `Number of Blocks`. The lowest value that can get is 1.|
|**Number of Samples**| Select manually the `Number of Samples` to be included in the resulting design. The lowest value it can get is 1. |
|**Random Standard order**|You can tick/select the box if randomness is required in the output list of experiments.|
|**Time-based RNG Seed**|If in the randomness is selected, then you have the option to also tick/select the box to set the random generated number seed based on time.|
|**RNG Seed**|Select manually the random generated number seed if required.|
|**Include/exclude columns**|Select manually the columns through the dialog window: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns.|

### Output
{: .no_toc}
A list of experiments (combinations) is generated in the output datasheet along with the block number and the standard order based on the Uniform design method.

### Example
{: .no_toc}

##### Input
{: .no_toc}
In the input datasheet minimum requirement is to specify three factors (columns) and insert minimum two levels (values) for each factor (column), as shown below.

<div style="text-align: center;">
<img src="images/Design of experiments/uniform-input.png" alt="Uniform input" width="400" height="450" class="img-responsive">
</div> 

##### Configuration
{: .no_toc}
1. Select `Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Uniform`.
1. Select the `Number of Center Points` [1] to be generated in the output list of experiments.
1. Select the `Number of Blocks` [2]. The lowest value that can be set is 1.
1. Select the `Number of Samples` [3] to be generated. The lowest value that can be set is 1.
1. Select/tick if required the `Random Standard order` [4] to imply randomness in the output list of experiments.
1. If randomness is selected either select/tick to generate the number seed for randomness based on time [5] or by manually setting a value [6].
1. Select the columns by clicking on the arrow buttons [9] and moving columns between the `Excluded Columns` [7] and `Included Columns` [8] lists. 
1. Click on the `Execute` button [10] to perform the Uniform design method. 

<div style="text-align: center;">
<img src="images/Design of experiments/uniform-configuration.svg" alt="Uniform configuration" width="400" height="450" class="img-responsive">
</div> 

##### Output
{: .no_toc}
A list of 14 experiments (combinations) is generated in the output datasheet along with the Block number based on the Uniform design method selected. The standard order is provided in Col2.

<div style="text-align: center;">
<img src="images/Design of experiments/uniform-output.png" alt="Uniform output" width="400" height="450" class="img-responsive">
</div> 
---

## References {#design-of-experiments}
1. Box, G.E. and D.W. Behnken, Some new three level designs for the study of quantitative variables. Technometrics, 1960. 2(4): p. 455-475. [doi.org/10.1080/00401706.1960.10489912](https://doi.org/10.1080/00401706.1960.10489912).

1. Box, G.E. and K.B. Wilson, On the experimental attainment of optimum conditions, in Breakthroughs in statistics: methodology and distribution. 1992, Springer. p. 270-310. [doi.org/10.1007/978-1-4612-4380-9_23](https://doi.org/10.1007/978-1-4612-4380-9_23).

---

## Version History
Introduced in Isalos Analytics Platform v0.2.4

_Instructions last updated on December 2024_
