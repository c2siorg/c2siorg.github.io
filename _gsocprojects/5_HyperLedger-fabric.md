---
num: 5
title: LedgerLens - A transaction validation and querying engine for Hyperledger Fabric
---

Brief explanation 
: This project aims to develop a data storing and querying engine for Hyperledger Fabric that leverages the SmartQC transaction model proposed in the paper (arxiv.org). The goal is to enable efficient storage and retrieval of complex data transactions while ensuring immutability, auditability, and efficient query execution on Hyperledger Fabric. The transaction model introduces a novel way of structuring data that goes into the ledger (Similar to a relational database schema). The idea of this project is to implement an off-chain service/node that provides endpoints to manage transactions and act as the intermediary validator before pushing the transaction into the hyperledger. Then utilise the structure and schema (metadata) of the transactions to perform advanced querying.
<br><br>

Key Objectives
: 
 * Implementation of the transaction model validator node in GoLang
   * A rest API to facilitate transactions
   * A rest API to facilitate transactions
 * Implement a Hyperledger Fabric Smart Contract (Chain code) to manage transactions 
 * An architecture for the querying engine that facilitates faster and more complex queries (using an Off-chain DB that keeps a ledger copy or indexing mechanism before putting it into the ledger)
 * Performance analysis 
<br><br>

Expected Outcome
: 
* Go Gin Rest API that implements the CRUD operations for transaction management.
* A connector to the Hyperledger Fabric 
* Ledgerlens Hyperleder Fabric Chain code
* Querying algorithm 
<br><br>

Knowledge Prerequisite
: Go Programming Language (Gin), Docker, Blockchain & Distributed Ledger, Hyperledger Fabric, SmartQC Transaction Model
<br><br>

Mentor
: Tharindu Ranathunga, Alan McGibney 
<br><br>

Github URL
: <https://github.com/c2siorg/LedgerLens>
<br><br>

Estimate Project Length
: 350 Hours
<br><br>

Difficulty
: Intermediate
<br><br>

Slack channel
: LedgerLens
<br><br>
