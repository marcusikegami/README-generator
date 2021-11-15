const inquirer = require('inquirer');
const { writeToFile, generateMarkdown, renderLicenseBadge, renderLicenseFile, writeLicenseFile } = require('./utils/generateMarkdown');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title (required):',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your software.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description (required):',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your software:.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for a complete installation of your software (required):',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your software.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information regarding software usage:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your software.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (link auto-generated)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username. (link auto-generated)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email that users can contact you with questions',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your software.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter your first and last name seperated by a space:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter information that explains how users can reach out to you with questions:',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter the name of your GitHub repository for this software. If not hosted on GitHub / you do not wish to license your product, leave blank',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your product on. Information regarding these licenses can be browsed at https://choosealicense.com/. If you do not wish to license your software, return None.',
            choices: ['Apache-2.0', 'GPL-3', 'MIT', 'None'],
            default: false
        }
    ])
    
    
};

promptUser()
.then(data => renderLicenseBadge(data))
.then(data => renderLicenseFile(data))
// .then(data => writeLicenseFile(data))
.then(data => generateMarkdown(data))
.then(data => writeToFile(data));

