const inquirer = require('inquirer');
const { writeToFile, generateMarkdown } = require('./utils/generateMarkdown');
const fs = require('fs');


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
                    console.log('Please enter a title for your program.');
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
                    console.log('Please enter a description for your program:.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for a complete installation of your program (required):',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your program.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter information regarding program usage:',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your program.');
                    return false;
                }
            }
        },
    ])
    
};

promptUser()
.then(data => generateMarkdown(data))
.then(data => writeToFile(data));

