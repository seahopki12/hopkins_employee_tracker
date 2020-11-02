const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
const Tasks = require("./Develop/Tasks");

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
                choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
            }
        ]).then(function (response) {
            console.log(response.task);
            switch (response.task) {
                case "View All Employees":
                    const taskOne = new Tasks();
                    taskOne.allEmployees();
                    break;
                case "View All Employees By Department":
                    let taskTwo = new Tasks();
                    taskTwo.employeesByDept();
                    break;
                case "View All Employees By Manager":
                    let taskThree = new Tasks();
                    taskThree.employeesByMgr();
                    break;
                case "Add Employee":
                    let taskFour = new Tasks();
                    taskFour.addEmployee();
                    break;
                case "Remove Employee":
                    let taskFive = new Tasks();
                    taskFive.removeEmployee();
                    break;
                case "Update Employee Role":
                    let taskSix = new Tasks();
                    taskSix.updateRole();
                    break;
                case "Update Employee Manager":
                    let taskSeven = new Tasks();
                    taskSeven.updateMgr();
                    break;
                default:
            };
            connection.end();
        });
}