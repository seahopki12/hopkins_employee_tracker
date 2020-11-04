const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");



const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "mo7Jaquu5",
    database: "employee_trackerDB"
});

let managers = [];
let roles = [];

class Tasks {

    // MVP
    addDepartment() {
        inquirer
            .prompt([
                {
                    name: "department",
                    type: "input",
                    message: "What is the name of the department?"
                }
            ]).then(function (res) {
                connection.query("INSERT INTO department (dept) VALUES (?)", [res.department], function (err, result) {
                    if (err) throw err;
                });
            });
    };

    addRole() {
        inquirer
            .prompt([
                {
                    name: "role",
                    type: "input",
                    message: "What is the name of the role?"
                }
            ]).then(function (res) {
                roles.push(res.role);
                connection.query("INSERT INTO role (title) VALUES (?)", [res.role], function (err, result) {
                    if (err) throw err;
                });
            });
    };

    addEmployee() {
        inquirer
            .prompt([
                {
                    name: "first",
                    type: "input",
                    message: "What is the employee's first name?"
                },
                {
                    name: "last",
                    type: "input",
                    message: "What is the employee's last name?"
                }
            ]).then(function (res) {
                const values = [res.first, res.last];
                connection.query("INSERT INTO employee (first_name, last_name) VALUES (?)", [values], function (err, result) {
                    if (err) throw err;
                });
            });
    };

    viewDepts() { };

    viewRoles() { };

    viewEmployees() {
        let query = "SELECT employee.id, employee.first_name, employee.last_name FROM employee";
        console.log("Here are all the employees: ");
        connection.query(query, function (err, res) {
            if (err) throw err;
            let table = consoleTable.getTable(res);
            console.log(table);
        });
    };

    updateRole() {
        console.log("You have updated someone's role.");
    };

    // Bonus
    updateMgr() { };

    employeesByMgr() { };

    removeDepartment() { };

    removeRole() { };

    removeEmployee() { };

    deptBudget() { };
}

module.exports = Tasks;

