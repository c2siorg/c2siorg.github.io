---
num: 6
title: DataLoom
---

Brief explanation 
: DataLoom is a web-based data wrangling tool with a unique git-like checkpoint/revert system. This project expands DataLoom into a complete data preparation platform by adding multi-format upload, data profiling, merge/join operations, formula columns, data visualization, an automated data quality engine, and multi-format export with quality reports.
<br><br>

How it works
: * Input: Data files in multiple formats (CSV, xlsx, json, parquet, tsv)
* Processing: pandas-powered transforms with a checkpoint system, including profiling, merge/join, formula columns, quality assessment (duplicate detection, outlier flagging, pattern validation), and visualization generation
* Output: Transformed datasets, column-level statistical profiles, composite quality scores with one-click fixes, interactive charts (histogram, bar, scatter, time series), and multi-format exports with downloadable HTML/PDF quality reports
<br><br>

Expected Results
: * Users can upload xlsx, json, parquet, and tsv files in addition to CSV
* Automatic data profiling gives instant insight into column statistics on upload
* All transform forms use dropdown column selectors instead of free-text input
* Users can merge/join data across projects
* Computed formula columns and reusable transformation pipelines are supported
* Basic visualization (histogram, bar, scatter, time series) is available in-app
* Automated data quality assessment detects duplicates, outliers, and pattern violations with a composite quality score and one-click fixes
* Data can be exported in multiple formats (xlsx/parquet/json/tsv), and comprehensive quality reports can be generated as HTML or PDF
<br><br>

Tech stack / Tools
: FastAPI, pandas, PostgreSQL, SQLModel, Alembic, React, TypeScript, scikit-learn, matplotlib
<br><br>

Knowledge Prerequisites
: * Strong Python skills with pandas experience
* React/JavaScript/TypeScript proficiency
* Understanding of SQL joins and data transformation concepts
* Familiarity with charting libraries (recharts or similar)
<br><br>

Mentor
: Oshan Mudannayake
<br><br>

Github URL
: <https://github.com/c2siorg/dataloom>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
: #dataLoom
<br><br>
