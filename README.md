<p align="center">
  <a href="https://kibis.is">
    <img alt="Kibisis logo" src=".github/assets/logo@407x128.png" style="padding-top: 15px" height="64" />
  </a>
</p>

<h1 p align="center">
  Kibisis Connect Kit
</h1>

<p p align="center">
  The UI kit to allow dApps to connect to the Kibisis wallets.
</p>

<p align="center">
  <a href="https://github.com/kibis-is/connect-kit/releases/latest">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/kibis-is/connect-kit?&logo=github">
  </a>
  <a href="https://github.com/kibis-is/connect-kit/releases/latest">
    <img alt="GitHub Release Date - Published At" src="https://img.shields.io/github/release-date/kibis-is/connect-kit?logo=github">
  </a>
</p>

<p align="center">
  <a href="https://github.com/kibis-is/connect-kit/releases">
    <img alt="GitHub Pre-release" src="https://img.shields.io/github/v/release/kibis-is/connect-kit?include_prereleases&label=pre-release&logo=github">
  </a>
  <a href="https://github.com/kibis-is/connect-kit/releases">
    <img alt="GitHub Pre-release Date - Published At" src="https://img.shields.io/github/release-date-pre/kibis-is/connect-kit?label=pre-release date&logo=github">
  </a>
</p>

<p align="center">
  <a href="https://github.com/kibis-is/website/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/kibis-is/connect-kit">
  </a>
</p>

### Table Of Contents

* [1. Overview](#-1-overview)
* [2. Getting Started](#-2-getting-started)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Installation](#22-installation)
* [3. Appendix](#-3-appendix)
  - [3.1. Useful Commands](#31-useful-commands)
* [4. How To Contribute](#-4-how-to-contribute)
* [5. License](#-5-license)

## 🗂️ 1. Overview

...TBA.

<sup>[Back to top ^][table-of-contents]</sup>

## 🪄 2. Getting Started

### 2.1. Requirements

* Install [Node v20.9.0+][node] (LTS as of 20th October 2024)

<sup>[Back to top ^][table-of-contents]</sup>

### 2.2. Installation

Install the dependencies using:
```shell
npm install @kibisis/connect-kit
```

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 3. Appendix

### 3.1. Useful Commands

| Command              | Description                                                                                         |
|----------------------|-----------------------------------------------------------------------------------------------------|
| `yarn build`         | Builds the package to the `dist/`.                                                                  |
| `yarn build:example` | Builds the example app to the `.example/`.                                                          |
| `yarn check:types`   | Checks the types.                                                                                   |
| `yarn generate:env`  | Copies the `.env.example` to a `.env` file. This command does not overwrite a previous `.env` file. |
| `yarn lint`          | Runs linting.                                                                                       |
| `yarn prettier`      | Runs `prettier` with the same configuration that is run on the pre-commit hooks.                    |
| `yarn start:example` | Runs the example app at [http://localhost:8080](http://localhost:8080).                             |
| `yarn test`          | Runs the tests.                                                                                     |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 4. How To Contribute

Please read the [**Contributing Guide**][contribute] to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 5. License

Please refer to the [COPYING][copying] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- Links -->
[contribute]: ./CONTRIBUTING.md
[copying]: ./COPYING
[node]: https://nodejs.org/en/
[table-of-contents]: #table-of-contents
