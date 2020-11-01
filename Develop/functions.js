const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            name: "task",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Role", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
        }
    ]).then(function(response){
        console.log(response.task);
    })