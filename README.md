# Ionic 5 Workshop - Dilo Medan
Welcome to Ionic 5 Workshop


### Description

## Requirements
1. Node installed, I have version 10.16.2 but anything that supports async await is great!
1. [TypeScript](https://www.typescriptlang.org/) - Typescript knowledge
1. [Ionic](https://github.com/ionic-team/ionic/) - Latest Ionic Framework knowledge

## Installation
* npm install -g @ionic/cli
* npm install @ionic/angular@latest --save

## Directories
* angular-basic - Data binding, services, simple navigation
* ionic-tabs - Implementing simple HTTP GET Observable request and data binding
* ionic-list - Ionic list template
* [ionic-conference-app](https://github.com/ionic-team/ionic-conference-app) - A conference app built with Ionic to demonstrate Ionic

## Local Preview (Browser)
```bash
cd angular-basic
npm i 
ionic serve
```

## Build and Deploy to your Hosting (copy www folder)
How to build the application for upload to a server
```bash
ionic build
```

## iOS Build
```bash
npm install --save @capacitor/core @capacitor/cli
npx cap init
npx cap add ios
npx cap sync
npx cap open ios
```
