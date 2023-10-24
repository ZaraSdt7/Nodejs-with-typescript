#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const package_json = path.resolve('./package.json');
const tsconfig_json = path.resolve('./tsconfig.json');
const webpack_config_js = path.resolve('./webpack.config.js');
const karma_config_js = path.resolve('./karma.conf.js');
const git_ignore_file = path.resolve('./.gitignore');
const execSync = require('child_process').execSync;

// webpack 2.x
const webpack_config = `module.exports = {
  entry: './index.ts',
  output: {
    filename: './[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}`;

// karma config
const karma_config = `var webpackConfig = require('./webpack.config');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine"],
    files: [
      { pattern: "tests/*.spec.*" }
    ],
    exclude: [
    ],
    preprocessors: {
      'tests/*.spec.*': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ["progress"],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    mime: {
      'text/x-typescript': ['ts','tsx']
    }
  })
}`;

const git_ignore = `
.DS_Store
node_modules
*.log
`;

if (!fs.existsSync(package_json)) {
  console.log('Initializing package.json');
  execSync('npm init -y');
}

console.log('Installing packages. This might take a couple minutes.');
execSync('npm install webpack webpack-dev-server ts-loader typescript --save-dev');
execSync('npm install @types/jasmine jasmine-core karma karma-jasmine karma-webpack karma-chrome-launcher --save-dev');

if (!fs.existsSync(tsconfig_json)) {
  console.log('Creating tsconfig.json');
  execSync('tsc --init');
}

let tsconfig_raw = fs.readFileSync(tsconfig_json, 'utf8');
tsconfig_raw = tsconfig_raw.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/igm, '');
const tsconfig = JSON.parse(tsconfig_raw);

if (!tsconfig.compilerOptions || ! tsconfig.compilerOptions.lib) {
  tsconfig["compilerOptions"]["lib"] = ["dom", "es2015.promise", "es5"];
}

console.log('Updating tsconfig.json');
fs.writeFileSync(
  tsconfig_json,
  JSON.stringify(tsconfig, null, 2)
);

RegExp.prototype.toJSON = RegExp.prototype.toString;
if (!fs.existsSync(webpack_config_js)) {
  console.log('Creating webpack.config.js');
  fs.writeFileSync(
    webpack_config_js,
    webpack_config
  );
}

if (!fs.existsSync(karma_config_js)) {
  console.log('Creating karma.conf.js');
  fs.writeFileSync(
    karma_config_js,
    karma_config
  );
}

console.log('Initializing git');
execSync('git init');

if (!fs.existsSync(git_ignore_file)) {
  console.log('Creating .gitignore');
  fs.writeFileSync(
    git_ignore_file,
    git_ignore
  );
}

console.log('Adding npm scripts');
const package_info = require(package_json);
if (!package_info.scripts || ! package_info.scripts['dev']) {
  package_info["scripts"]["dev"] = 'webpack-dev-server --inline --hot';
}
if (!package_info.scripts || ! package_info.scripts['build:prod']) {
  package_info["scripts"]["build"] = 'webpack -p';
}
if (package_info.scripts) {
  package_info["scripts"]["test"] = 'karma start';
}
fs.writeFileSync(
  package_json,
  JSON.stringify(package_info, null, 2)
);