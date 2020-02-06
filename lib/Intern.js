const Employee = require("./Employee");

//this will add to Employees properties and methods school, getSchool() - Method, getRole()- Method ---Overridden to return Intern

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name,id, email);
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole() {
  
        return "Intern"
        }


}

module.exports = Intern;