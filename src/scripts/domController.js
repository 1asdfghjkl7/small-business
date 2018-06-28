const $ = require("jquery");
const grabData = require("./grabData")

const $wrapper = $("#wrapper");

grabData.grabEmployees().then((response) => {
    console.log(response);
    response.forEach(element => {
        console.log(element);
        const $articleRef = $("<article>").addClass("employee").append($("<header>").addClass("employee__name").append($("<h1>").text(`${element.name}`)))
        grabData.grabDepartments(element.deptId).then((response)=>{
            console.log(element.deptId);
            console.log(response);
            $articleRef.append($("<section>").addClass("employee__department").text(`Works in ${response[0].dept}`));
            grabData.grabComputers(element.compId).then(response => {
                $articleRef.append($("<section>").addClass("employee__computer").text(`Currently using a ${response[0].OS}`))
                $articleRef.appendTo($wrapper)
            })
        })
    })
})