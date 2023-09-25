// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: accountInfo => {
                if (accountInfo) {
                    return true;
                } else {
                    return false;
                }
            }
         },
         {
            type: 'input',
            name: 'email',
            message: 'What is your email used for Github account?',
            validate: accountInfo
         }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
