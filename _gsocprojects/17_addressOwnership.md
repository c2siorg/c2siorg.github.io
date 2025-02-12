---
num: 17
title: ProofOfMine - Address Ownership Proof Protocol Service
---

Brief explanation 
: Address Ownership Proof Protocol (AOPP) provides a streamlined way to verify ownership of a cryptocurrency address. Traditionally, users had to manually sign a message from an exchange using third-party wallets like Electrum to prove that they are the ones who own the wallet, which was time-consuming and error-prone.<br>
This project aims to build a self-hosted, web-based AOPP signing service that simplifies the verification process. The web application will allow users to sign messages using self hosted software wallets (electrum, blue wallet) and hardware wallets (Ledger, Trezor, BitBox) while ensuring seamless backend communication. Once a message is signed, the service will notify a backend, confirming wallet ownership.
<br><br>

Expected Results
: By the end of the project, the following features will be implemented:

* Web-based AOPP Service – A web app where users can sign ownership proof messages.
* Self-Hosted Wallet Support – Enable compatibility with wallets like Electrum, Sparrow, and others supporting message signing.
* Hardware Wallet Integration – Direct support for signing via Ledger, Trezor, and BitBox.
* AOPP-URL Handling – Implement the parsing and generation of AOPP-URLs for smooth integration.
* Backend Notification System – Securely notify the backend once a signature is verified.
* Security & Compliance Enhancements – Implement best practices for cryptographic security.
* Testing & Error Handling – Comprehensive unit tests, integration tests, and fail-safe mechanisms.
* Only Bitcoin for bitcoin wallets
<br><br>

Tech Stack
: This project will be built using Go for backend development due to its efficiency, concurrency support, and compatibility with cryptographic libraries. The proposed stack includes:
*  Backend: Go, PostgreSQL
*  Cryptographic Libraries: btcsuite/btcd, github.com/decred/dcrd/dcrec/secp256k1, github.com/btcsuite/btcutil
*  Wallet Integrations: ledgerhq/ledger-go, trezor-go, bitbox-go
*  Web Interface: React/Vue.js for a simple, intuitive UI
*  Deployment: Self-hostable via Docker
<br><br>

Knowledge Prerequisite
: 
* Go programming & API development
* Bitcoin cryptography (ECDSA, Schnorr signatures, secp256k1) 
* Experience with wallet integrations & hardware wallet communication
* Web technologies (REST APIs, WebSockets, OAuth/WebAuthn)
* Database management with PostgreSQL                        
<br>

Mentor
: Raveen Harith Perera, Adem Bilican
<br><br>

Github URL
: <https://github.com/c2siorg/ProofOfMine>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Medium to Hard
<br><br>

Slack channel
: proof-of-mine
<br><br>
