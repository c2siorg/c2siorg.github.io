---
num: 1
title: B0Bot
---

Brief explanation 
: B0Bot is a CyberSecurity News API tailored for automated bots on social media platforms. It is a cutting-edge Flask-based API that grants seamless access to the latest cybersecurity and hacker news. Users can effortlessly retrieve news articles either through specific keywords or without, streamlining the information acquisition process. Once a user requests our API, it retrieves news data from our knowledge base and feeds it to the LLM. After the LLM processes the data, the API obtains the response and returns it in JSON format. The API is powered by LangChain and a Huggingface endpoint, ensuring that users receive accurate and up-to-date information.
<br><br>

Expected results
: This year, we are planning to integrate the following features into b0bot:<br><br>
* Implement CDC via RSS feed readers or debezium connectors with kafka bus.
* Implement caching mechanisms (e.g. Redis) to reduce response time for frequent requests.
* Add a subscription feature for users to receive daily or weekly summaries, over email.
* Create an agentic AI framework using Langchain/LangGraph to create planner and executor agents. Example of possible agents can be scraper agent, responder agent, notification agent, analyzer agent. Thorough research is expected from the contributor before deciding the agentic framework.
* Extend the LLM to support multi-turn dialogue, allowing users to engage in conversational interactions with the API.
* Extend data sources to various social media websites by using their APIs.
* Creating tests for the API and proper error handling.
* Improved UI, possibly creating a dashboard.
<br><br>

Knowledge Prerequisite
: Python, Large Language Models, Hugging Face, Pytorch, API development (Flask), NLP, Database Management, MongoDB, LangChain, Prompt Designing
<br><br>

Mentors
:  Hardik Jindal (hardik1408), Nipuna
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Github URL
: <https://github.com/c2siorg/b0bot>
<br><br>

Difficulty
:  Hard
<br><br>

Slack channel
: b0bot