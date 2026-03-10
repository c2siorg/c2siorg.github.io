---
num: 11
title: LensMint Web3 Camera
---

Brief explanation 
: LensMint Camera is a Web3-enabled camera system built on Raspberry Pi that captures media with cryptographic provenance and signed metadata and mints photos as nft on the blockchain. This project will rewrite and strengthen the camera OS and interface in Rust, and build a secure device key generation and identity layer to improve authenticity, tamper resistance, and integration with future decentralized systems.<br><br>

How it works:
: Inputs:
* Camera sensor image/video data via Raspberry Pi CSI interface.
* User interaction via touchscreen/UI or hardware buttons.
: Processing:
* Rust-based/Python-based firmware/OS controls board peripherals.
* Secure entropy collection for device keypair generation.
* Camera capture and processing pipeline.
* Cryptographic signing and metadata generation.
* Blockchain Processing for NFT generation.
* ZK proof generation.
: Output:
* Signed photo/video data.
* Unique device identity for provenance.
* Stable camera UI and control interface.
* An NFT that can be shared.
<br><br>

Expected Results
: 
* Rust-native core OS/firmware and improved camera interface
* Secure device cryptographic key generation using hardware entropy
* Safe key storage abstraction (flash/secure enclave)
* Rust API for camera control and capture pipeline
* Modular identity layer for verifiable device signatures
* Performance optimizations and reliability improvements
* Improve blockchain processing 
* Add AI features - Agentic camera support
* OS/UI design improvement
* Note: Not all features need to be implemented; you can work on a subset of features or all, depending on what you can accomplish during gsoc period. Also, you can suggest more improvements on your side that are not listed here
<br><br>

Tech stack / Tools
: Hardware
* Raspberry Pi (4, Zero, etc.) with CSI camera modules (e.g., Raspberry Pi Camera Module) [Raspberry Pi](https://www.raspberrypi.com/documentation/accessories/camera.html)
: Programming languages:
* Rust (embedded where applicable)
* Python
* Javascript
: OS / Firmware:
* Rust OS / embedded crate stack (embedded-hal, rp-pico SDK etc.)
* Camera control via libcamera ecosystem (Linux stack) (GitHub)
: Cryptography:
* Rust crypto crates (e.g., ed25519-dalek, rand)
* ZK Proof 
: Build & tooling:
* <code>cargo</code>, cross-compile toolchains
* Embedded flashing tools (OpenOCD / Pi Imager) (Wikipedia)
: Technology:
* Blockchain
<br><br>

Knowledge Prerequisite
: 
* Rust programming and systems-level coding
* Embedded/Linux systems (Raspberry Pi environment)
* Cryptographic key management and signatures
* Understanding of camera hardware interfaces
* Blockchain Knowledge
<br><br>

Mentor
: Mohit Bhat
<br><br>

Github URL
: <https://github.com/c2siorg/lensmint-camera>
<br><br>

Estimate Project Length
: 350 hours
<br><br>

Difficulty
: Hard
<br><br>

Slack channel
: #gsoc-lensmint
<br><br>
