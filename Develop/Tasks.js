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

class Tasks {

    // MVP
    addDepartment() {};

    addRole() {};

    addEmployee() {
        let managers = [];
        let roles = [];
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
                },
                {
                    name: "role",
                    type: "list",
                    message: "What is the employee's role?",
                    choices: roles
                },
                {
                    name: "manager",
                    type: "list",
                    message: "Who is the employee's manager?",
                    choices: managers
                }
            ]).then(function(res){
                console.log(res)
            });
    };

    viewDepts() {};

    viewRoles() {};

    viewEmployees() {
        let query = "SELECT employee.id, employee.first_name, employee.last_name FROM employee";
        console.log("Here are all the employees: ");
        connection.query(query, function (err, res){ 
            if (err) throw err;
            console.table(res);
        });
    };

    updateRole() {
        console.log("You have updated someone's role.");
    };

    // Bonus
    updateMgr() {};

    employeesByMgr() {};

    removeDepartment() {};

    removeRole() {};

    removeEmployee() {};

    deptBudget() {};
}

module.exports = Tasks;

