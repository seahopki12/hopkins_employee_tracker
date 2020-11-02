const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

class Tasks {

    // constructor(task) {
    //     this.task = task;
    // }

    allEmployees() {
        console.log("Here are all the employees.");
    };
    employeesByDept() {
        console.log("Here are the Employees by Department.");
    };
    employeesByMgr() {
        console.log("Here are the Employees by Manager.")
    };
    addEmployee() {
        console.log("You've added an employee.");
    };
    removeEmployee() {
        console.log("You've removed an employee.");
    };
    updateRole() {
        console.log("You have updated someone's role.");
    };
    updateMgr() {
        console.log("You have updated someone's manager");
    };
}

module.exports = Tasks;

