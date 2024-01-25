---
title: GSoC 2024
layout: gsoc
description: Services
intro_image: "/images/logo/gsoc1.png"
intro_image_absolute: false
intro_image_hide_on_mobile: false
tagline: Welcome to the C2SI Google Summer of Code (GSoC) 2024 project ideas page. 
---

This is the 7th time that we are participating in the GSoC, we will use this page to develop possible project ideas that have on the above mentioned areas. Please note that anyone who is interested can participate in this process. You do not have to be a GSoC student or mentor to suggest possible project ideas.
<br><br>
You can also talk to us about possible project ideas and we are happy to improve or heip you with them. Please keep in mind that projects need to be realistically something that is able to be functionally completed by a student working full time for about eight weeks. Thanks!

* Mailing List
: <https://groups.google.com/forum/#!forum/score-community>
* Proposal Template
: <a href="https://shorturl.at/dtR23" target="_blank">https://shorturl.at/dtR23</a>
<br><br>


## Important Guidelines on Submitting Ideas

*There are some important guidelines to submit ideas, please read these carefully before adding your ideas!*

1. There is a fixed time period for implementing and coding your ideas.
2. Come up with attainable goals and you will be able to complete what you set out to do. You can always contact our mentors and community and get an idea about the workload and whether you might be able to complete them.
3. You are free to come up with your own ideas. The ideas should be about Internet of Things (IOT), Computer Security and Software Tools. Also if you love to work on any of these subjects but do not have an idea you can always contact us.
4. Lets Talk! The best way to solve problems that you might have is to contact our mentors and also our community.
5. We encourage you to do documentation so that we can keep track of your progress and also help you if things are not going according to plan. Although not compulsory we have a strong belief that this method can cut down your time to code and also the workload of the mentors drastically.
6. Please send your new project ideas to gsoc[at]c2si.com
<br><br>

---------------------------

<br>

# Idea List for 2024
*The following is the idea list for Google Summer of Code 2023*



## 1: ProjectExplainer: Add knowledge graph based retrieval and explanation APIs for code and text modalities in documentation.

Brief explanation
: ProjectExplainer project is a set of tools to help with explaining code repositories using large language models.
<br><br>
At this point, ProjectExplainer supports a small set of API’s to provide summarization or explanation capabilities over GitHub based code repositories by parsing through readme’s and pulling important pieces of information which is then provided as prompt to an LLM to produce summarization.
<br><br>
With this GSoC project, we wish to include knowledge graphs to embed GitHub repository code and text  modalities to use that as a retrieval interface for the LLM to perform summarization/explanation task.
<br><br>

Expected Results
: At the end of the GSoC term, we expect integration of knowledge graphs for both text and code modalities and expose another set of API’s for summarization or explanation tasks.
<br><br>

Required Knowledge
: Python, Neo4j, Large Language Models, Hugging Face, Pytorch, Knowledge Graphs.
<br><br>

Possible Mentors
: Mehant Kammakomati
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: project-explainer
<br><br>


----------

##  2: WebiU 2.0 :- c2siorg/SCoRe Lab website

Brief explanation
: The proposed project aims to create a dynamic organization website that automatically fetches project information from GitHub repositories. This eliminates the need for manual data entry, ensuring real-time updates on the organization's website whenever a new repository is created or existing is updated. The website will also feature a configurable project template that provides essential details such as project title, description, technology stack, live demo availability, and more.

+ Admin Controls: Create an admin control panel to manage the display of projects on the website. This includes the ability to show/hide specific projects and modify their display settings.
Backend Integration: Choose a backend solution (e.g., AWS, MongoDB) to store and manage additional data, such as admin configurations and website settings.

+ Documentation: Improve and maintain documentation related to the development areas, ensuring clarity for future contributors.
<br><br>

Expected Results
: By the end of the project, the dynamic organization website should seamlessly integrate with GitHub repositories, displaying accurate and up-to-date information. The website's configurable project template will allow administrators to control which projects are showcased on the site, providing flexibility and customization options
<br><br>

Knowledge Prerequisites
: Proficiency in Angular, TypeScript, and JavaScript is essential for this project. Familiarity with backend technologies like AWS or MongoDB is beneficial. Additionally, understanding GitHub API and web development concepts will be advantageous.
<br><br>

Mentor
: Mahender Goud Thanda (Maahi10001)
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: WebiU
<br><br>

----------

## 3: RustCloud 

Brief explanation 
: RustCloud  is a rust library which hides the difference between different APIs provided by varied cloud providers (AWS, GCP, Azure etc.) and allows you to manage different cloud resources through a unified and easy to use API.
<br><br>

Documentation
: Improve and maintain documentation related to the development areas, ensuring clarity for future contributors.
<br><br>

Knowledge Prerequisites
:  Rust, Google Cloud Platform 
<br><br>

Expected Results
: By the end of the project, API for BigQuery, Vertex AI, GenAI 
<br><br>

Mentor
: Pratik Dhanave
<br><br>

Github Url
:
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: rust-cloud
<br><br>

----------

## 4: Bug connector

Brief explanation 
: The idea of this project is to create a public dataset based on openly available CVE information, the key goal is to create fully functional scapers set to gather CVE information from different sources augment comprehensive data points, and make it public

+ Data Sources and data structures will be announced

Github Url
:
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: bug-connector
<br><br>

----------

## 5: GDB UI

Brief explanation 
: GDB stands for GNU Debugger. It's a powerful and popular debugger for various programming languages, including C, C++, Ada, and others. It allows developers to observe what a program is doing while it's running. This is particularly useful when debugging to find and fix problems in the code.

: GDB consists of rich and powerful features like 
* ⁠ Start and stop the execution of the program., Examine the state of the program (variables, registers, memory, etc.), etc. 

: GDB (GNU Debugger) is operational within the terminal. Our goal of this project involves crafting a user interface (UI) using React, designed specifically to communicate with the GDB Python API. This UI aims to construct a dashboard facilitating interaction via the GDB Python API interface. to serve as a user-friendly platform enabling the execution of commands and operations through the GDB Python UI.

Github Url
:
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: gdb-ui
<br><br>

----------

## 6: CodeLabz: Deploy the first working Version of the site.

Brief Explanation
: CodeLabz is a platform where the users can engage with online tutorials and the organizations can create tutorials for the users. Currently, the project is lacking some features. 
<br><br>
+ Completing the following will ensure the deployment of the first live working version of codelabz.

1. Like/Dislike Feature Implementation:
Implement database interactions for user likes and dislikes.
Ensure the feature aligns with the existing database design.
2. Completing The Tutorial Page:
Resolve minor bugs affecting the tutorial page, including issues with comments and author data.
Implement recommendations for users on the tutorial page.
3. Notification System:
Develop backend logic for a notification system.
Ensure seamless integration with the existing platform for real-time updates.
4. Recommender System for Feed Tutorials:
Implement algorithms for generating recommended tutorials based on user preferences.
Integrate the recommender system into the platform's feed functionality.Displaying Tutorials on Profile Pages: displaying tutorials on user profile pages.
6. Rebuilding CI/CD Pipeline:
Evaluate and update the existing CI/CD pipeline for the Codelabz site.
7. Managing Org-Setting Including Roles:
Develop functionalities for managing organization settings.
Implement role-based access control to ensure secure and controlled access.
8. Searching Tutorials through Tags and Titles:
Implement a robust search mechanism for tutorials based on tags and titles.
Optimize search algorithms for quick and accurate results.
9. Tutorials Creation By Individual Users
10. Rendering Dynamic Data - Sidebar for Contributors and Who to Follow on home page.
11. Verification on Signup: Implement a secure verification process during user signup.
Ensure user accounts are validated and authenticated for enhanced security.
12. Updating Minor dependencies and migration to Typescript.
<br><br>

Expected results
: At the end of this summer we expect that All the listed tasks will be implemented, And the first version of codelabz website will be live.
<br><br>

Knowledge Prerequisite
: Javascript, React.JS, Node.JS, Firebase
<br><br>

Mentor
: Abhishek Pandey, Shiva Nanda Reddy.
<br><br>

Github Url
:
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
:  Medium
<br><br>

Slack channel
: codelabz
<br><br>

----------

## 7: NFT-TOOLBOX

Description
: An npm package for seamless integration of all NFT related functionalities in Web2 projects. This project helps web2 developers seamlessly integrate web3 functionality.
<br><br>

Expected Results
: Currently we are able to mint NFT on Ethereum chain and upload metadata to multiple storage services. The current task is to improve the existing stuff with multi-chain support like Solana, Tezos and EVM compatible chains, add more ERC’s support, make different types of on-chain and off-chain algorithms for super fast batch minting of NFT and add support for Soulbound NFTs, dynamic NFT and nested NFT. A website with all these functionalities needs to be created along with required smart contracts.
: Features we would like to implement in NFT-ToolBox Project:
: 
* You need to refactor code 
* Add onchain and offchain Batch Minting Support
* Add Multiple ERC support related to nfts in easy and feasible manner
* Add support for Solana NFT’s
* Add Support for Tezos NFT’s
* Add support for Flow Blockchian NFT’s
* Add support for Aptos Blockchian NFT’s
* Add Support for Cross Chain NFT’s
* Build An UI to mint NFT’s on any chain 
* Make UI to deploy different kinds of NFT standards (Something like Thirdweb)
   
: Note- You don’t need to implement all these features this year. You have to come up with proposal of what things can be implemented in the GSoC timeline and How.

Required Knowledge
: Solidity, NFT, Blockchain, Rust, Nodejs, Rust, ReactJs, Typescript, Cadence, Move
<br><br>

Mentors
: Mohit Bhat
<br><br>

Github Url
: https://github.com/scorelab/NFT-Toolbox
<br><br>

Estimate Project Length
: 350hr
<br><br>

Difficulty
: Medium
<br><br>

Slack channel
: nft-toolbox

