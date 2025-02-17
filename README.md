<p align="center">
  <a href="https://kibis.is">
    <img alt="Kibisis logo" src="docs/images/logo@407x128.png" height="64" />
  </a>
</p>

<h1 align="center">
  Kibisis Connect Kit
</h1>

<div align="center">

[![License: AGPL-3.0-or-later](https://img.shields.io/github/license/kibis-is/connect-kit)](./COPYING)
[![NPM Version](https://img.shields.io/npm/v/%40kibisis%2Fconnect-kit)](https://www.npmjs.com/package/%40kibisis/connect-kit)
![GitHub Pre-release](https://img.shields.io/github/v/release/kibis-is/connect-kit?include_prereleases&label=pre-release&logo=github)
![GitHub Release](https://img.shields.io/github/v/release/kibis-is/connect-kit?&logo=github)

</div>

<p align="center">
  The UI kit to allow dApps to connect to the Kibisis wallets.
</p>

---

### Table of Contents

* [1. Overview](#-1-overview)
* [2. Usage](#-2-usage)
  - [2.1. Installation](#21-installation)
  - [2.2. Getting Started](#22-getting-started)
    - [2.2.1. Initialization](#221-initialization)
    - [2.2.2. Connect](#222-connect)
* [3. API Reference](#-3-api-reference)
* [4. Development](#-4-development)
  - [4.1. Requirements](#41-requirements)
  - [4.2. Installation](#42-installation)
* [5. Appendix](#-5-appendix)
  - [5.1. Useful Commands](#51-useful-commands)
* [6. How To Contribute](#-6-how-to-contribute)
* [7. License](#-7-license)

## 🗂️ 1. Overview

...TBA.

<sup>[Back to top ^][table-of-contents]</sup>

## 🪄 2. Usage

### 2.1. Installation

Install using:
```shell
npm install @kibisis/connect-kit
```

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Getting Started

#### 2.2.1. Initialization

First you will need to initialize Kibisis connect kit:

```typescript
import { KibisisConnect } from '@kibisis/connect-kit';

const kibisisConnect = await KibisisConnect.init({
  genesisHash: '5pbhGq04byd0AgV/sbP+yITANqazgKBuaATr85n21wY=',
});
```

> ⚠️ **NOTE:** You **MUST** initialize Kibisis connect kit with a genesis hash for the desired network, but you can change this later.

<sup>[Back to top ^][table-of-contents]</sup>

#### 2.2.2. Connect

Once you have successfully initialized the Kibisis connect kit, you can fetch the accounts using the `connect()` function.

```typescript
import { KibisisConnect } from '@kibisis/connect-kit';

const accounts = await kibisisConnect.connect();
```

<sup>[Back to top ^][table-of-contents]</sup>

## 🗃️ 3. API Reference

<sup>[Back to top ^][table-of-contents]</sup>

## 🪄 4. Development

### 4.1. Requirements

* Install [Node v22+](https://nodejs.org/en/)
* Install [pnpm v10+](https://pnpm.io/installation)

<sup>[Back to top ^][table-of-contents]</sup>

### 4.2. Installation

Install the dependencies using:
```shell
pnpm install
```

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 5. Appendix

### 5.1. Useful Commands

| Command              | Description                                                                                         |
|----------------------|-----------------------------------------------------------------------------------------------------|
| `pnpm build`         | Builds the package to the `dist/`.                                                                  |
| `pnpm build:example` | Builds the example app to the `.example/`.                                                          |
| `pnpm check:types`   | Checks the types.                                                                                   |
| `pnpm generate:env`  | Copies the `.env.example` to a `.env` file. This command does not overwrite a previous `.env` file. |
| `pnpm lint`          | Runs linting.                                                                                       |
| `pnpm prettier`      | Runs `prettier` with the same configuration that is run on the pre-commit hooks.                    |
| `pnpm start:example` | Runs the example app at [http://localhost:8080](http://localhost:8080).                             |
| `pnpm test`          | Runs the tests.                                                                                     |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 6. How To Contribute

Please read the [**Contributing Guide**](./CONTRIBUTING.md) to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 7. License

Please refer to the [COPYING][copying] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- links -->
[copying]: ./COPYING
[table-of-contents]: #table-of-contents
