const Employee = require("./Employee");

//this will take employee and add engineer properties and methods gethum getGitHub() and getRole() ---this should be overridden to return Engineer//

    class Engineer extends Employee {
        constructor(name, id, email, github) {
            super(name, id, email);
            this.github = github;
        }
        getRole() {
           
            return "Engineer"
            }
        getGithub() {
            return this.github;
        }
    }
    

    module.exports = Engineer;