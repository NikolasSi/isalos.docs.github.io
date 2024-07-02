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

1.   Select `Data Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Box Behnken`.
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

1.   Select `Data Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Central Composite`.
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

1.   Select `Data Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Fractional Factorial`.
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

A Full Factorial Design of Experiment (DoE) is a comprehensive method used in experimental research to investigate all possible combinations of factor levels, allowing for a complete analysis of two or more factors. Each factor is tested at different discrete levels, and the total number of experimental combinations ($n$) is determined by multiplying the number of levels ($l_f$) of each factor ($f$). This relationship is mathematically expressed as:

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

1.   Select `Data Statistics` $$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Full Factorial`.
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

1.   Select `Data Statistics`$$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Mixtures`.
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

1.   Select `Data Statistics`$$\rightarrow$$ `Design of Experiments` $$\rightarrow$$ `Robust Parameter`.
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


## References {#design-of-experiments}
1. Box, G.E. and D.W. Behnken, Some new three level designs for the study of quantitative variables. Technometrics, 1960. 2(4): p. 455-475. [doi.org/10.1080/00401706.1960.10489912](https://doi.org/10.1080/00401706.1960.10489912).

1. Box, G.E. and K.B. Wilson, On the experimental attainment of optimum conditions, in Breakthroughs in statistics: methodology and distribution. 1992, Springer. p. 270-310. [doi.org/10.1007/978-1-4612-4380-9_23](https://doi.org/10.1007/978-1-4612-4380-9_23).

---

## Version History
Introduced in Isalos Analytics Platform v0.2.4

_Instructions last updated on July 2024_
