---
num: 12
title: PII-Safe – Privacy Guard for Agentic AI & MCP Workflows
---

Brief explanation 
: As AI agents increasingly process security logs, chat transcripts, and incident reports, they are often exposed to sensitive personal information such as emails, usernames, IP addresses, and customer identifiers. PII-Safe is a middleware and MCP compatible privacy plugin that automatically detects, redacts, or pseudonymizes personal data before it reaches an LLM or is stored in memory. The project aims to make agentic AI deployments safer, more compliant, and production-ready  without compromising analytical value.<br><br>

How it works:
: Policy Representation & Enforcement:
PII-Safe represents privacy controls as policy-as-code, keeping privacy rules separate from application logic. Each incoming piece of data (such as a log entry or text document) is converted into a structured input that includes context like the operation type (e.g., analysis or export) and the types of sensitive information detected (e.g., email, IP address, phone number). This structured input is evaluated against declarative policies that return a clear decision such as <code>allow, redact, pseudonymize, or block</code>. <br>For example, a simple policy might state that during internal analysis, email addresses can be replaced with consistent placeholders (e.g., USER_01) to preserve context. However, if the same data is being exported outside the system, all email addresses and IP addresses must be fully redacted. If someone attempts to export raw, unsanitized data, the policy engine would return a deny decision and stop the operation.<br><br>
: Inputs:
* Prompts,security logs, incident case data, tool-call payloads, or unstructured text containing potential personal information.
: Processing:
* Schema-aware PII detection (structured JSON + free text).
* Policy-driven sanitization (redaction, pseudonymization, allowlists).
* Context-preserving token mapping for case-level consistency.
* Privacy exposure scoring and audit logging.
* MCP tool interface for integration into agent workflows.
: Output: 
* Sanitized data safe for AI processing, a privacy risk score, and an auditable transformation report (with secure mapping for authorized re-identification).
<br><br>


Tech stack
: * Backend: FastAPI (Python)
* LLM/AI:
 spaCy or HuggingFace (for lightweight entity detection),
 Optional integration examples with LangChain / LangGraph,
OLLAMA for local testing 
* Storage/DB:
 SQLite (default) or Postgres (optional extension)
* Caching:  Redis 
<br><br>

Expected Results
: 
* Policy-based PII detection and configurable redaction engine
* Stable pseudonymization system (consistent within incident scope)
* FastAPI-based middleware +  MCP server mode
* CLI tool for batch dataset sanitization
* Audit logging and privacy exposure scoring
* Dockerized deployment with example datasets
* Unit tests and integration tests with real world agentic AI framework
<br><br>

Knowledge Prerequisite
: Python, REST API development, Basic cybersecurity knowledge, Understanding of JSON and data schemas, Foundational understanding of data privacy principles
<br><br>

Mentor
: Tharindu Ranathunga, Kavishka Fernando (kavishkafernando64@gmail.com)
<br><br>

Github URL
: TBA
<br><br>

Estimate Project Length
: 175–350 hours
<br><br>

Difficulty
: Medium
<br><br>

Slack channel
: TBA
<br><br>
