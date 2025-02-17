---
num: 11
title: Secure Extension Monitor – A VS Code Security Auditing Tool
---

Brief explanation 
: This project aims to develop a VS Code extension that enhances the security of the developer environment by monitoring other installed extensions for suspicious behaviors. Malicious VS Code extensions can access the file system, execute scripts, and make network requests without the user's knowledge, posing a significant security risk. This tool will analyze installed extensions, detect potential threats, and alert users.
<br><br>

Key Objectives
: 
  
1. *Extension Behavior Monitoring:*
* Track API calls made by installed extensions, including file access, network requests, and execution of system commands.
* Identify extensions that request excessive permissions beyond their intended functionality.
<br><br>

2. *Network Activity Analysis:*
* Log and analyze external API calls made by extensions to detect unauthorized data exfiltration.
* Provide real-time alerts when an extension makes requests to suspicious domains.
<br><br>

3. *File System Protection:*
* Detects when an extension reads or modifies critical user files (e.g., SSH keys, environment variables).
* Provide users with granular control to restrict certain extensions from accessing specific directories.
<br><br>

4. *Extension Reputation Scoring:*
* Gather metadata such as publisher information, update history, and marketplace ratings.
* Cross-check extensions with known security reports and vulnerability databases.
<br><br>

5. *User Alerts and Actionable Insights:*
* Generate real-time notifications when suspicious activity is detected.
* Provide detailed reports and risk assessments for installed extensions.
<br><br>


Knowledge Prerequisite
: JavaScript/TypeScript (for VS Code extension development).
Knowledge of Node.js and system APIs.
Experience with security auditing and threat detection methodologies.
Familiarity with networking and process monitoring tools.
<br><br>

Mentor
: Tushar N, Charith, EMSDV
<br><br>

Github URL
: <https://github.com/c2siorg/secureExtensionMonitor>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
:  #secure-extension-monitor
<br><br>
