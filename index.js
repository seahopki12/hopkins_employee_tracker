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


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    inquirer
        .prompt([
            {
                name: "task",
                type: "list",
                message: "What would you like to do?",
                choices: ["View All Employees", "View All Employees By Department", "View All Employees By Role", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
            }
        ]).then(function (response) {
            console.log(response.task);
            
        });
}