---
num: 20
title: Quantum Circuit Translation Framework (QCTF)
---

Brief explanation 
: Quantum algorithms developed in different frameworks like Qiskit, Cirq, or Braket face challenges when being ported across various quantum hardware platforms such as IBM Q, Google Quantum Engine, or Rigetti. This project aims to develop a universal quantum circuit translation framework (QCTF) that enables seamless conversion of quantum circuits between major frameworks while optimizing for hardware-specific requirements. QCTF will handle basic gate translations and address gate optimization, qubit mapping, noise adaptation, and hardware-specific transpilation. This will empower researchers to develop quantum algorithms once and execute them on any supported quantum hardware without manual rewriting.
<br><br>

Expected Results
: 

* Universal Circuit Converter:
  * Supports conversion between Qiskit, Cirq, Braket, and t|ket⟩ quantum circuits.
* Hardware-Aware Transpilation:
  * Optimizes circuits for specific hardware gate sets (IBM, Google Sycamore, Rigetti Aspen).
* Noise-Adaptive Compilation:
  * Includes noise modeling to adjust circuits for real quantum device execution.
* Advanced Gate Support:
  * Handles custom parameterized gates, controlled operations, and mid-circuit measurements.
* Visualization Module:
  * Displays before-and-after circuit diagrams to track translation changes.
<br><br>

Knowledge Prerequisite
: 
* Quantum SDKs: Qiskit, Cirq, Amazon Braket, t|ket⟩
* Quantum Circuit Theory: Gate sets, qubit topology, noise models
* Compiler Design: Intermediate representations, transpilation techniques
* Python Programming: For integration, APIs, and visualization
* Hardware APIs: IBM Quantum, Google Quantum Engine, Rigetti Forest
<br><br>

Mentor
: Rishabh K, TusmanNagMania
<br><br>

Github URL
: TBA
<br><br>

Estimate Project Length
: 400 hours
<br><br>

Difficulty
: Advanced – Requires knowledge of quantum mechanics, circuit optimization, and cross-platform software development.
<br><br>

Slack channel
: #quantum-circuit-translation
<br><br>
