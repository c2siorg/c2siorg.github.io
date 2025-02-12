---
num: 15
title: QBinTracer - Dynamic Userspace Binary Instrumentation with QEMU Plugins (Packed and Obfuscated Binaries)

---

Brief explanation 
: The goal of this project is to develop a QEMU plugin that dynamically instruments userspace binaries as they execute. Leveraging QEMU’s plugin infrastructure, the tool will provide comprehensive instrumentation capabilities including instruction tracing, memory access logging, and control-flow analysis without requiring modifications to the original binaries. The project will result in an open-source tool that can be used for performance profiling, debugging, and security analysis.
<br><br>

Expected Results
: The tool will be evaluated using a bunch of packed and obstructed binaries.
<br><br>

Key Objectives
: 
* *Dynamic Instrumentation:* Develop a plugin that intercepts key runtime events (e.g., instruction execution, memory accesses, system calls) in user-mode binaries using QEMU’s plugin API.
* *Performance Profiling:* Collect and report metrics such as instruction counts, basic block execution frequencies, cache behavior, and memory access patterns to help analyze performance bottlenecks.
* *Modular and Extensible Design:* Architect the plugin so that additional instrumentation features (such as logging, event correlation, and statistical analysis) can be added with minimal changes.
<br><br>

Knowledge Prerequisite
: Low-level programming (C, ASM), Virtualization with QEMU, X86-64, Linux                                         
<br>

Mentor
: Danushka V, WiztaMax, Keneth
<br><br>

Github URL
: <https://github.com/c2siorg/QBinTracer>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
: QbinTracer
<br><br>
