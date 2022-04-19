$(document).ready(onReady)

function onReady(){
    $('#submitButton').on('click', appendData)
    $(document).on('click', '#deleteButton' ,deleteThis)
}



//Variables
let employeeArray= [];


//functions


//Add Employee to Employee Array
function appendData(){
    console.log('click')
    let objectEmployee = {
        firstName: $('#firstname').val() ,
        lastName: $('#lastname').val(),
        id: $('#empid').val() ,
        title: $('#title').val() ,
        salary: $('#salary').val()
    }
    console.log(objectEmployee)
    employeeArray.push(objectEmployee);
    employeeArrayTable();
}

//Update the table with new info
function employeeArrayTable(){
    $('#empList').empty();
    for (let employee of employeeArray){
        $('#empList').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            <td><button id="deleteButton" data-id="${employee.id}">DELETE</button></td>
        <tr>

        `)
    }        
    let lastEmployee = employeeArray[employeeArray.length - 1];
    let salary = Number(lastEmployee.salary);
    let MonthlySalary = (salary / 12).toFixed(2); 


    if ( MonthlySalary > 20000){
        $('#costs').html(`<h1>Monthly Salary:$<span id="salSpan" style="color: red">${MonthlySalary}</span> </h1>`)

    }
    else{
        $('#costs').html(`<h1>Monthly Salary:$<span id="salSpan" style="color: black ">${MonthlySalary}</span> </h1>`)

    }

}

//deleteButton
function deleteThis(){
    console.log('click')
    let a = $(this).data("id")
    console.log(a)
    for(let i = 0; i < employeeArray.length; i++){
        let object = employeeArray[i]
        if(Number(a) === Number(object.id)){
            employeeArray.splice(i, 1);
            console.log('Employee Deleted')
            deleteThis();
        }
    }
    employeeArrayTable();
}