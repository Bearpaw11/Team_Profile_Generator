//this is the Employee parent class with properties of name, id, title. Methods of getName(), getId(), getEmail(), getRole()-This Overrides employee and Returns Employee//
const answers = require =('../app')
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager= require("./Manger");

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
getName(){
return `${answers.name}`
}

getId() {
return `${answers.id}`
}

getEmail() {
return `${answers.email}`
}

getRole() {
return 'Employee'
}
}

module.exports = Employee;