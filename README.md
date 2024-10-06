
# Data Cleaning Process for Population Distribution by Age and Region

## Overview
This document outlines the process of cleaning and preparing three datasets for analysis and visualization:
1. **Population Distribution by Age and Region (Percentage, 2021)**
2. **Population Distribution by Age and Region (Percentage, 2002)**
3. **Population Change by Age and Region (2002-2021)**

These datasets were created using demographic information from Chilean regions, focusing on age group distributions over the years 2002 and 2021. The main objective was to clean and format the data to make it consistent and ready for analysis, ensuring it supports the hypothesis for the semester project.

## Data Sources
- Instituto Nacional de Estadísticas de Chile (INE) – Estimaciones y Proyecciones de Población
- Censo Nacional de Población 2002 y 2017

## Cleaning Steps
1. **Data Collection**:
   - The raw data was extracted from various demographic reports and organized into a structured format (tables with years and regions).
2. **Handling Missing Data**:
   - No missing data was found in the selected regions, so no data imputation was required.
3. **Consistency Check**:
   - Ensured that the variable names and labels were consistent between datasets (2002 and 2021).
   - Rounded numerical values to 1 decimal place to maintain clarity and avoid unnecessary precision.
4. **Variable Renaming**:
   - Renamed columns to make them more descriptive (e.g., "15-59 años (%)" to "15-59 años (Percentage)").
5. **Final Adjustments**:
   - Removed columns that weren't necessary for the analysis (e.g., percentage columns in the difference table) and only retained meaningful information.

## Example Questions Answerable with Cleaned Data
1. How has the percentage of the population aged 60 and over changed in each region between 2002 and 2021?
2. Which regions experienced the largest decrease in the population aged 0-14 between 2002 and 2021?
3. What are the differences in age group distribution between the northern and southern regions of Chile?

## File Structure
- `population_distribution_2002.csv`: Clean dataset for 2002 with percentages by age group and region.
- `population_distribution_2021.csv`: Clean dataset for 2021 with percentages by age group and region.
- `population_change_2002_2021.csv`: Clean dataset showing the change in percentages by age group between 2002 and 2021.

