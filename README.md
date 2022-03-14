<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Crud Generator" />

&#xa0;

  <!-- <a href="https://crudgenerator.netlify.app">Demo</a> -->
</div>

<h1 align="center">Crud Generator</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/wildanfadh/crud-generator?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/wildanfadh/crud-generator?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wildanfadh/crud-generator?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/wildanfadh/crud-generator?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/wildanfadh/crud-generator?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/wildanfadh/crud-generator?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/wildanfadh/crud-generator?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Crud Generator 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/wildanfadh" target="_blank">Author</a>
</p>

<br>

## :dart: About

Describe your project

## :sparkles: Features

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/wildanfadh/crud-generator

# Access
$ cd crud-generator

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:5000>
```

## Usage

```bash
# Get all data
http://localhost:5000/data/index

# Get item
http://localhost:5000/data/:id

# Get data with paginate
http://localhost:5000/data/paginate/index?page=1&limit=10

# Create item
http://localhost:5000/data/create

# Edit item
http://localhost:5000/data/:id

# Delete item
http://localhost:5000/data/:id
```

## Add CRUD

```bash
# Initial your model
const yourData = require('./models/yourData')

# Generate route path
generator(app, { path: '/data', modal: DataModal })
generator(app, { path: '/yourPath', modal: yourData })
generator(app, { path: '/antoherPath', modal: DataModal })

# Run the project
$ npm start
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/wildanfadh" target="_blank">wildanfadh</a>

&#xa0;

<a href="#top">Back to top</a>
