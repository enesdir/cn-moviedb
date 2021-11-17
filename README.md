# CN-MOVIEDB - Example Movie Search Application

This is a [Next.js](https://nextjs.org/) project starter with **dev dependencies only**. It saves your time on initial setup and can be used for any kind of project. Based on the basic `create-next-app` starter.

## Features

- Typescript
- ESLint config that works well with Prettier and Typescript
- opinionated project structure
- testing environment
- import aliases with auto-sorting
- pre-commit hooks with husky and lint-staged
- CSS reset and globals
- bundle analyzer
- format and lint on save (for VSCode)

## Table of Contents

- [CN-MOVIEDB - Example Movie Search Application](#cn-moviedb---example-movie-search-application)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [NPM scripts](#npm-scripts)
  - [Project Structure](#project-structure)
  - [FAQ](#faq)

## Installation

- Clone this repository:

```shell
git clone git@github.com:codenuru/cn-moviedb.git --depth=1
```

- Install dependencies:

```shell
cd cn-moviedb
yarn
```

- Before beginning, please make sure you have the following enviroment variable set.
  - copy to ".env.example" to ".env.local". you don't need to set variables Next.js has built-in support for loading environment variables.

    ```shell
    cp .env.example .env.local
    ```

## NPM scripts

- `dev` - start development server on <http://localhost:3000>
- `build` - create a production build
- `start` - start serving production build
- `type-check` - run Typescript checks
- `lint` - run lint checks
- `test-all` - runs lint and type checking
- `analyze` - analyze production build with Webpack Bundle Analyzer

## Project Structure

```
src/
+-- assets/
+-- components/
+-- constants/
+-- hooks/
+-- layout/
+-- pages/
+-- styles/
+-- typings/
+-- utils/
+-- views/
```

`assets/` - media files (may require additional webpack loader configuration)

`components/` - reusable React components shared between views

`constants/` - files containing constant values and configs

`context/` - context provider components that use React Context API and render children

`hooks/` - reusable custom hooks

`layout/` - building blocks of the layout structure: header, footer, sidebars etc.

`pages/` - directory with a <a href="https://nextjs.org/docs/basic-features/pages" >file-based routing</a> that contains pages and API routes

`styles/` - everything related to styling and theming

`typings/` - type declarations for Typescript

`utils/` - helper functions

`views/` - container blocks that define a page structure and contain unique components for a particular view

## FAQ

Q: What is the difference between pages and views?

A: Pages define and generate route locations, get initial or static data, and optionally configure the head element. Views define the unique structure of components and spread data among children. Page components may render different views conditionally.
