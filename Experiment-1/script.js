let employees = [];

function addEmployee(){

let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let salary=parseFloat(document.getElementById("salary").value);
let dept=document.getElementById("dept").value;

let emp={
name:name,
id:id,
salary:salary,
department:dept
};

employees.push(emp);

alert("Employee Added");
}

function displayEmployees(){

let text="";

employees.forEach(function(emp){
text += "Name: "+emp.name+"<br>";
text += "ID: "+emp.id+"<br>";
text += "Salary: "+emp.salary+"<br>";
text += "Department: "+emp.department+"<br><br>";
});

document.getElementById("output").innerHTML=text;
}

function filterSalary(){

let text="";

employees.filter(emp=>emp.salary>50000)
.forEach(function(emp){

text += emp.name+" - "+emp.salary+"<br>";

});

document.getElementById("output").innerHTML=text;
}

function totalSalary(){

let total=employees.reduce((sum,emp)=>sum+emp.salary,0);

document.getElementById("output").innerHTML="Total Salary = "+total;
}

function averageSalary(){

let avg=employees.reduce((sum,emp)=>sum+emp.salary,0)/employees.length;

document.getElementById("output").innerHTML="Average Salary = "+avg;
}

function countByDepartment(){

let dept=prompt("Enter department");

let count=employees.filter(emp=>emp.department==dept).length;

document.getElementById("output").innerHTML="Employees in "+dept+" = "+count;
}