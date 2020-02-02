var inquirer = require('inquirer')

inquirer
    .prompt([{
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your User ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your Email Address?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What is your Role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },

        {
            type: 'input',
            message: 'what is your office number?',
            name: 'officeNumber',
            when: function(answers) {
                return answers.Role === "Manager";
            }


        },
        {
            type: 'input',
            message: 'what is your gitHub UserName?',
            name: 'gitHub',
            when: function(answers) {
                return answers.Role === "Engineer";
            }


        },

        {
            type: 'input',
            message: 'what school do you attened?',
            name: 'school',
            when: function(answers) {
                return answers.Role === "Intern";
            }


        }


    ])
    .then(answers => {
        console.log(answers);
    })