# RedVerse - Advanced Local Agentic Coding Environment

RedVerse is a powerful, fully localized AI agentic coding environment built for developers who want private, robust, and highly efficient AI assistance. It natively integrates with local Ollama models to perform code analysis, autocompletion, and complex reasoning without relying on cloud APIs.

## Key Features
- **100% Local Inference:** Keep your codebase private. RedVerse leverages local models (like Llama 3.2 and Qwen 2.5 Coder) via Ollama.
- **Dynamic Context Awareness:** Natively understands your workspace, file structure, and syntax.
- **Auto-Installation:** Seamlessly installs Ollama and downloads the best coding models directly through the setup wizard.

## Installation Methods

We provide two installation methods to suit your needs. **Both are version v1.0.0.**

### 1. Web Installer (`RedVerse_Web_Setup_v1.0.0.exe`) - *Recommended*
- **Size:** ~12 MB
- **How it works:** A lightweight stub installer. It calculates exactly how much space and data you need (based on the AI models you select) and downloads the core application (`RedVerse_Payload_v1.0.0.zip`) and dependencies on the fly. 
- **Requirement:** Must have an active internet connection.

### 2. Offline Installer (`RedVerse_Offline_Setup_v1.0.0.exe`)
- **Size:** ~350 MB
- **How it works:** Bundles the entire core RedVerse application inside the `.exe`. 
- **Requirement:** Can install the base application entirely offline (though an internet connection is still required during setup if you choose to download extra AI models).

## System Requirements
- Windows 10 / 11
- Minimum 8GB RAM (16GB recommended for running larger 7B models like Qwen 2.5)

## How to Uninstall
RedVerse registers securely with Windows. To uninstall, simply navigate to **Settings > Apps > Installed Apps**, search for `RedVerse`, and click **Uninstall**. This will cleanly remove all directories, models, shortcuts, and registry entries.
