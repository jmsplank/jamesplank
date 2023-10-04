# James Plank (Personal Website)

<p align="center">
   <img src="content/logo.png" width="40%"/>
   <br>
   <a href="https://jamesplank.co.uk">jamesplank.co.uk</a>
</p>

![Static Badge](https://img.shields.io/badge/Hugo_version-0.118.2-pink)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jmsplank/jmsplank.github.io/main)
![GitHub deployments](https://img.shields.io/github/deployments/jmsplank/jmsplank.github.io/github-pages?logo=github&color=orange)
![Website](https://img.shields.io/website?up_message=online&up_color=blue&down_message=offline&down_color=red&url=https%3A%2F%2Fjamesplank.co.uk%2F)
![GitHub](https://img.shields.io/github/license/jmsplank/jmsplank.github.io)

This is the repository for my personal website [jamesplank.co.uk](https://jamesplank.co.uk), created using HUGO and deployed using GitHub pages.

## Install

1. Clone the repository using

   ```bash
   git clone git@github.com:jmsplank/jmsplank.github.io.git
   ```

1. Install hugo and other requirements
   ```bash
   cd jmsplank.github.io
   npm ci
   ```
   This installs Hugo, autoprefixer, bootstrap, and postcss

## About

- The website is made with Hugo static site builder
- Bootstrap 5 and SCSS is used for easier styling
- Katex is used to display math
- The theme is entirely custom built

## Structure

### Build scripts

Some useful scripts are in `package.json`, these are:

`npm run dev`: Run the development server, live reload, include draft pages

`npm run dev:nodraft`: As above but drafts are disabled

`npm run build`: Build/compile the Hugo into static html, writes to `public/`

`npm run build:serve`: Start a python http.server running on port 8000 that serves the `public/` dir

### SCSS & postCss

Find the scss in `assets/scss`. The main file is `index.scss`, all the `_` prefixed files are imported into `index.scss`.

On compilation, the SCSS is compiled into plain css using libsass, the bootstrap ccss (located in `node_modules/bootstrap`) is also included in this single file. Source maps are included in development builds but not in production, where the css is returned compressed.

The output from libsass is piped into postcss, the config for which can be found at `config/postcss.config.js`, currently this only applies the autoprefixer plugin.

This is all configured in the head, the html describing it can be found at `layouts/partials/head/libsass.html`.
