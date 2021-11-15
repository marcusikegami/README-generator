const data = require('../index');
const fs = require('fs');

function renderLicenseBadge(data) {
if(data.license, data.repo) {
  data.licenseBadge = `[![License](https://img.shields.io/github/license/${data.github}/${data.repo})](LICENSE.txt)`;
  data.licenseText = `## License

  Copyright (c) ${new Date().getFullYear()} by ${data.name}
  
  Licensed under the [${data.license}](LICENSE.txt) license.
  `
} else if(data.license === "None") {
  data.licenseBadge = "";
  data.licenseText = "";
}
return data;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseFile(data) {
  
if(data.license === 'Apache-2.0'){
  data.licenseFile = `Apache License 2.0
  Copyright (c) ${new Date().getFullYear()} ${data.name}

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
`;
return data;
}
if(data.license === 'GPL-3'){
  data.licenseFile = `GNU Affero General Public License v3.0
  Copyright (C) ${new Date().getFullYear()} ${data.name}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.
  
  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  `;
  return data;
}
if(data.license === 'MIT'){
  data.licenseFile = `MIT License

  Copyright (c) ${new Date().getFullYear()} ${data.name}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;
  return data;
}
if(data.license === 'None'){
  return data;
}

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function writeLicenseFile(data) {
  if(data.license === 'None') {
    return data;
  } else {
    const fileContent = data.licenseFile;
  return new Promise((resolve, reject) => {
    
    fs.writeFile('./LICENSE.txt', fileContent, err => {
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
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${data.licenseBadge}

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

## Questions

[GitHub](https://github.com/${data.github})

**${data.email}**

${data.questions}

${data.licenseText}
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

      if(data.license === 'None') {
        return data;
      } else {
        const licenseContent = data.licenseFile;
      return new Promise((resolve, reject) => {
        
        fs.writeFile('./LICENSE.txt', licenseContent, err => {
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

  });
};

module.exports = {generateMarkdown, writeToFile,  renderLicenseBadge, renderLicenseFile, writeLicenseFile };
