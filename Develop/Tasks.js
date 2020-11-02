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

    // constructor(task) {
    //     this.task = task;
    // }

    allEmployees() {
        let query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary";
        query += "FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id";
        console.log("Here are all the employees: ");
        connection.query("SELECT * FROM employee", function (err, res){ 
            if (err) throw err;
            console.table("Multiple Items",[
                {
                    name: 'foo',
                    age: 10
                  }, {
                    name: 'bar',
                    age: 20
                  }
            ]);
        });
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

