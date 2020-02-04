const Employee = require("./Employee");
const answers = require('./../app');
//this will add to Employees properties and methods officeNumber and getRole()---Overridden to return Manager

class Manager extends Employee {
    costructor(name, id, title, officeNumber) {
        super(name, id, email)
        this.officeNumber= officeNumber
    }
    getRole() {
        return "Manager";
    } 
    getOfficeNumber() {
        return `${answers.officeNumber}`;
    }
}

module.exports = Manager; 

