---
layout: default
title: 6.1 Pie Chart
parent: 6. Plot
nav_order: 1
permalink: /pie-chart.html
---

# Pie Chart
{: .no_toc }
Creating pie charts is a standard method for visualizing data distribution in categories. They are useful in displaying the proportional size of categories compared to the whole.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Pie charts are circular graphs divided into slices to illustrate numerical proportions. Each slice represents a category's contribution to the total ([Eq. 1](#eq. slice)).

<div id="eq. slice">
$$
\begin{equation}
\% = \frac{x_i}{\sum_{i} x_i} \cdot 100 {\qquad [1] \qquad}
\end{equation}
$$
</div>

where $$\%$$ is the calculated value indicating what portion of the total each category represents, and $x_i$ is the numerical value or count of the $$i$$ category visualized in the pie chart.

Use the `Pie Chart` function by browsing in the top ribbon: 

| Plot $$\rightarrow$$ Pie Chart |

### Input
{: .no_toc }
A data array with the values for each category. Only numerical data values (natural numbers) are accepted.

### Configuration
{: .no_toc }

|**Pie chart title**|Type the chart title (optional).|
|**Include/exclude columns**| Select manually the columns that are going to be included in the chart: Use the buttons to move columns between the `Included Columns` and `Excluded Columns` list. Single-arrow buttons will move all selected columns and double-arrow buttons will move all columns.|

### Output
{: .no_toc }
Graphical representation of the data in a pie chart format. The chart displays the proportion of each category visually.

### Example
{: .no_toc }

##### Input
{: .no_toc }
In the left-hand spreadsheet of the tab import the data array that contains the categories [1] and their corresponding values [2].

<div style="text-align: center;">
<img src="images/Plot/pie-chart-input.svg" alt="Pie chart input" width="400" height="300" class="img-responsive">
</div>

##### Configuration
{: .no_toc }

1. Select `Plot` $$\rightarrow$$ `Pie Chart`.
1. Type the `Pie chart title` [1].
1. Select the columns that are going to be included in the plot by clicking on the arrow buttons [4] and moving columns between the `Excluded Columns` [2] and `Included Columns` [3] lists. 
1. Click on the `Execute` button [5] create the pie chart.

<div style="text-align: center;">
<img src="images/Plot/pie-chart-configuration.svg" alt="Pie chart configuration" width="400" height="300" class="img-responsive">
</div>

##### Output
{: .no_toc }
The pie chart will be displayed in a new window.

<div style="text-align: center;">
<img src="images/Plot/Pie chart.PNG" alt="Pie chart plot" width="400" height="300" class="img-responsive">
</div>

##### Save Plot
{: .no_toc }
By browsing the ribbon of the pie chart window, you can either save the pie chart in PNG [1] or JPEG [2] format or print it [3].

| File $$\rightarrow$$ Save as $$\rightarrow$$ png... or jpeg... |


| File $$\rightarrow$$ Print |

<div style="text-align: center;">
<img src="images/Plot/save.svg" alt="Pie chart save" width="300" height="250" class="img-responsive">
</div>

##### Format Plot
{: .no_toc }
By browsing the ribbon of the pie chart window, you can also format the plot by clicking on the `Tools` option and then `Properties`:

| Tools $$\rightarrow$$ Properties |

The options available are for editing the plot title, its appearance as well as other options. A pop-up window is presented to perform the necessary changes.

<div style="text-align: center;">
<img src="images/Plot/tools-properties.png" alt="Pie chart properties" width="250" height="300" class="img-responsive">
</div>

In the `Title` tab, you can insert or edit the title of the plot in the `Text` box [1] and change the `Font` [2] and/or `Color` [3].

<div style="text-align: center;">
<img src="images/Plot/title.svg" alt="Pie chart title" width="400" height="300" class="img-responsive">
</div>

In the `Plot` tab you can change the `Outline stroke` [1], the `Outline paint` [2], and the `Background paint` [3].

<div style="text-align: center;">
<img src="images/Plot/plot.svg" alt="Pie chart plot" width="400" height="300" class="img-responsive">
</div>

In the `Other` tab you can change the `Background paint` [1].

<div style="text-align: center;">
<img src="images/Plot/other.svg" alt="Pie chart other" width="400" height="300" class="img-responsive">
</div>

When you're finished editing, click `OK` to save your changes.

---

## Version History
Introduced in Isalos Analytics Platform v0.1.18

_Instructions last updated on June 2024_
