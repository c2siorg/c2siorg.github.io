---
num: 7
title: TensorMap
---

Brief explanation 
: TensorMap is a visual neural network builder where users drag layer nodes onto a ReactFlow canvas, connect them, and train Keras models. This project transforms TensorMap into a complete neural network design studio by adding a data-driven layer registry, 11 new layer types, real-time training visualization, model export in industry-standard formats, post-training interpretability tools, and automated hyperparameter tuning.
<br><br>

How it works
: * Input: A model architecture defined as ReactFlow nodes and edges (layer types with parameters) plus a training dataset
* Processing: Keras model generation from the visual graph, training with structured Socket.IO metric callbacks, hyperparameter search (grid/random), and post-training analysis (confusion matrix, feature importance)
* Output: Trained models with real-time interactive training charts, exported model files (SavedModel/ONNX/TFLite), comparison dashboards, interpretability reports, and tuning results with one-click best-parameter application
<br><br>

Expected Results
: 
* Adding a new layer type requires only a registry entry (data-driven) instead of 6+ file edits
* 15 layer types available (up from 4), covering CNNs, RNNs, and regularization
* Training progress shown as real-time interactive charts with structured metrics
* Models can be exported in SavedModel, ONNX, and TFLite formats
* Multiple training runs can be visually compared in a dashboard
* Post-training analysis tools (confusion matrix, classification report, feature importance, prediction explorer) help users understand model behavior and diagnose issues
* Automated hyperparameter tuning with grid and random search strategies eliminates manual trial-and-error, with real-time progress tracking and one-click application of best parameters
<br><br>

Tech stack / Tools
: FastAPI, TensorFlow/Keras, PostgreSQL, SQLModel, Alembic, scikit-learn, Socket.IO, React, TypeScript, ReactFlow
<br><br>

Knowledge Prerequisite
: * Python proficiency with TensorFlow/Keras experience
* React/JavaScript/TypeScript proficiency with component-based UI patterns
* Understanding of neural network architectures and training workflows
* Familiarity with Socket.IO or WebSocket-based real-time communication
<br><br>

Mentor
: Oshan Mudannayake
<br><br>

Github URL
: <https://github.com/c2siorg/tensormap>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
:  #tensormap
<br><br>
