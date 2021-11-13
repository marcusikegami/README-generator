const data = require('../index');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Description 

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}


`;

}


// TODO: Create a function to write README file
function writeToFile(fileContent) {
  return new Promise((resolve, reject) => {
      console.log(fileContent);
      fs.writeFile('./README.md', fileContent, err => {
          if(err){
          reject(err);
          return;
          } 
          resolve({
              ok: true,
              message: 'README.md created!'
          });
      });
  });
};

module.exports = {generateMarkdown, writeToFile };
