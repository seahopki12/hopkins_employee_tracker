const inquirer = require("inquirer");
const mysql = require("mysql");
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
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    inquiry();
});

function inquiry() {
    inquirer
        .prompt([
            {
                name: "task",
                type: "list",
                message: "What would you like to do?",
                choices: ["Add A Department", "Add A Role", "Add An Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Exit"]
            }
        ]).then(function (response) {
            const task = new Tasks();
            switch (response.task) {
                case "Add A Department":
                    task.addDepartment()
                    break;
                case "Add A Role":
                    task.addRole();
                    break;
                case "Add An Employee":
                    task.addEmployee();
                    break;
                case "View Departments":
                    task.viewDepts();
                    break;
                case "View Roles":
                    task.viewRoles();
                    break;
                case "View Employees":
                    task.viewEmployees();
                    break;
                case "Update Employee Role":
                    task.updateRole();
                    break;
                case "Exit":
                    connection.end();
                    i = true;
                    break;
                default:
            };
        });
};



