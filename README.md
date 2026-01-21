# Playwright + TypeScript — Setup, Installation, Clone, Extensions and Run test in Playwright

This repository uses **Playwright** for E2E (end-to-end) testing with **TypeScript**.

---

## Requirements

Link to install **Node.js** and **npm**: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- **Node.js**: recommended versions above **20+** 
- **npm**

## Steps for macOS

You need to have homebrew installed.

- **Homebrew**: 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- **Node.js**: 
brew install node

## Check the node and npm versions:
Open your terminal (or console) and run the following commands:
```bash 
node -v
npm -v
```
## Cloning the project

- Clone the repository:
```bash
git clone <repo-url>
cd <repo-folder> 
```
## Install dependencies:
node_modules is not included in the repository because it is ignored in .gitignore.
- Run **npm install** to download and install the dependencies listed in package.json.

## Useful VS Code Extensions

- Playwright Test Snippets (Mark Skelton)
- Playwright Test for VS Code (Microsoft)

## 1 Initialize Playwright

This will scaffold the project and create the config files:
- npm init playwright@latest

## Run Tests
- Run all test: npx playwright test
- Run tests with UI mode: npx playwright test --ui
- View the HTML report: npx playwright show-report