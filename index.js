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



async function inquiry() {
    let i = false;
    while (!i) {
        await inquirer
            .prompt([
                {
                    name: "task",
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["Add A Department", "Add A Role", "Add An Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Exit"]
                }
            ]).then(async function (response) {
                switch (response.task) {
                    case "Add A Department":
                        const taskOne = new Tasks();
                        await taskOne.addDepartment()
                        break;
                    case "Add A Role":
                        let taskTwo = new Tasks();
                        taskTwo.addRole();
                        break;
                    case "Add An Employee":
                        let taskThree = new Tasks();
                        taskThree.addEmployee();
                        break;
                    case "View Departments":
                        let taskFour = new Tasks();
                        taskFour.viewDepts();
                        break;
                    case "View Roles":
                        let taskFive = new Tasks();
                        taskFive.viewRoles();
                        break;
                    case "View Employees":
                        let taskSix = new Tasks();
                        taskSix.viewEmployees();
                        break;
                    case "Update Employee Role":
                        let taskSeven = new Tasks();
                        taskSeven.updateRole();
                        break;
                    case "Exit":
                        connection.end();
                        i = true;
                        break;
                    default:
                };
            });
    };
};



