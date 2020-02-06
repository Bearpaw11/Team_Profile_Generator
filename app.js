var inquirer = require('inquirer')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./templates/main.js")

let employeeData = [];

function questions() {
    inquirer
        .prompt([{
                type: 'input',
                message: 'What is Employee name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is Employee ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is Employee Email Address?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'What is Employee Title',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'Title'
            },

            {
                type: 'input',
                message: 'what is Employee office number?',
                name: 'officeNumber',
                when: function(answers) {
                    return answers.Title === "Manager";
                }


            },
            {
                type: 'input',
                message: 'what is Employee gitHub UserName?',
                name: 'github',
                when: function(answers) {
                    return answers.Title === "Engineer";
                }


            },

            {
                type: 'input',
                message: 'what school do Employee attened?',
                name: 'school',
                when: function(answers) {
                    return answers.Title === "Intern";
                }


            }


        ])
        .then(data => {
            switch (data.Title) {
                case "Manager":
                    const newManager = new Manager(data.name, data.id, data.email, data.officeNumber)

                    employeeData.push(newManager)
                    break;
                case "Engineer":
                    const newEngineer = new Engineer(data.name, data.id, data.email, data.github)
                    employeeData.push(newEngineer)
                    break;
                case "Intern":
                    const newIntern = new Intern(data.name, data.id, data.email, data.school)
                    employeeData.push(newIntern)
                    break;
            }
    
            inquirer
                .prompt({
                    type: 'list',
                    message: 'Do you have another Employee to add to team?',
                    name: 'another',
                    choices: ['Yes', 'No']
                })
                .then(data => {

                    if (data.another === "Yes") {
                        questions()
                    } else {
                        buildHtml()
                    }



                })
        })
}
function buildHtml(){
    console.log(employeeData)
    generateHtml(employeeData)

}
questions()