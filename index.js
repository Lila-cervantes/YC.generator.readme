// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const question = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must enter your Github username')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email used for Github account?',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must enter your github email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: ' What is the name of your project?',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must enter your projrct name')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description of your projrct. ',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must enter a short description of projrct')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a type of license for your project.',
            choices: ['GNU', 'MIT'],
            default: ['MIT'],
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must choose a license for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are steps needed to install your project?',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Enter steps needed to install project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your application used for?',
            validate: function (accountInfo) {
                if (accountInfo) {
                    return true;
                } else {
                    console.log('Must describe application uses')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command to run tests? ',
            defauly: 'npm test'
        },
        {
            type: 'input',
            name: 'contributors',
            message: ''
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
const writeFile = data => {
    fs.writeFile('readme.md', data, err => {
        if (err) {
            console.log(err)
            return;
        }else{
            console.log('Your readme was created!')
        }
    })
}
// TODO: Create a function to initialize app
question()
.then(answer => {
    return generate(answer)
})
.then(data => {
    return writeFile(data)
})