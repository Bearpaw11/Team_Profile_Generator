const Employee = require("./Employee");

//this will add to Employees properties and methods school, getSchool() - Method, getRole()- Method ---Overridden to return Intern

class Intern extends Employee {
    costructor(name, id, email, school) {
        super(name,id, email)
    }

    getSchool(){
        return `${answers.school}`
    }

    get role(){
        return 'Intern'
    }


}