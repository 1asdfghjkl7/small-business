const $ = require("jquery")
const grabData = Object.create({},{
    grabEmployees: {
        value: () => {
            return $.ajax("http://localhost:3000/Employees")
        }
    },
    grabDepartments: {
        value: (deptId) => {
            return $.ajax(`http://localhost:3000/Departments?deptId=${deptId}`)
        }
    },
    grabComputers: {
        value: (compId) => {
            return $.ajax(`http://localhost:3000/Computers?compId=${compId}`)
        }
    }
})

module.exports = grabData