---
num: 5
title: ImageLab
---

Brief explanation 
:  ImageLab is a block-based image processing tool built on Blockly and OpenCV. Students drag operators into a pipeline and run it against an uploaded image. This project transforms ImageLab into a genuine learning environment by adding per-step intermediate previews, histogram analysis, pipeline persistence, batch processing, and custom composite operators (macros).
<br><br>

How it works
: * Input: An uploaded image and a Blockly-based operator pipeline designed by the user
* Processing: OpenCV operators are executed step-by-step on the backend, returning the image state after every operator
* Output: Intermediate images at each step, per-channel RGB histograms with statistics, saved/shareable pipelines, batch-processed ZIP results, and reusable macro blocks in the Blockly sidebar
<br><br>

Expected Results
: * Students can inspect every operator’s effect step-by-step instead of seeing only the final image
* Quantitative analysis (histogram, statistics) is available for every intermediate step
* Pipelines can be saved, loaded, and shared via URL, enabling collaboration and teaching workflows
* ImageLab’s first database usage sets the foundation for future features (user accounts, pipeline ratings)
* Batch processing allows applying saved pipelines to multiple images concurrently with progress tracking and ZIP download
* Custom composite operators (macros) teach abstraction by letting users package sub-chains as reusable blocks in the Blockly sidebar
<br><br>

Tech stack / Tools
: FastAPI, OpenCV, PostgreSQL, SQLModel, Alembic, React, TypeScript, Blockly, Zustand
<br><br>

Knowledge Prerequisite
: * Proficiency in Python and TypeScript/React
* Familiarity with OpenCV or willingness to learn image processing basics
* Understanding of REST API design and relational databases
* Experience with Blockly is a plus but not required
<br><br>

Mentor
: Oshan Mudannayake 
<br><br>

Github URL
: <https://github.com/c2siorg/imagelab>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
: #imagelab
<br><br>
