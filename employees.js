//Employees

var Employee = function() {
  this.firstName = null;
  this.lastName = null;
  this.department = null;
  this.fieldOffice = null;
  this.clinician = null;
  this.operations = null;
}

var Clinician = function() {
  this.expertise = null;
}
Clinician.prototype = new Employee();

var Operations = function() {
  this.area = null;
}
Operations.prototype = new Operations();

//Departments

var Department = function() {
  this.name = null;
}

var FieldOffice = function() {
  this.city = null;
}
FieldOffice.prototype = new Department();

var Headquarters = function() {

}
Headquarters.prototype = new Headquarters();

///Constructors

var Employee_1 = new Employee();
  Employee_1.firstName = "Amanda";
  Employee_1.lastName = "Huginkis";
var Health_1 = new Department();
  // health.name = "Health";
  Employee_1.department = "Health";
var Office_1 = new FieldOffice();
  // FieldOffice.city = "Chicago";
  Employee_1.fieldOffice = "Chicago";
var Clin_1 = new Clinician();
  // Clinician.expertise = "Urology";
  Employee_1.clinician = "Urologist";
var Oper_1 = new Operations();
  // Operations.area = "Research and development";
  Employee_1.operations = "Research & Development";
var HQ_1 = new Headquarters();


  console.log(Employee_1);

var Employee_2 = new Employee();
  Employee_2.firstName = "Kaneda";
  Employee_2.lastName = "Tetsuo";
var Health_2 = new Department();
  // health.name = "Health";
  Employee_2.department = "Sports Science";
var Office_1 = new FieldOffice();
  // FieldOffice.city = "Chicago";
  Employee_2.fieldOffice = "Los Angeles";
var Clin_1 = new Clinician();
  // Clinician.expertise = "Urology";
  Employee_2.clinician = "Sports Medicine";
var Oper_1 = new Operations();
  // Operations.area = "Research and development";
  Employee_2.operations = "Treasury";
var HQ_2 = new Headquarters();
  FieldOffice.city = "Chicago"
  Employee_2.FieldOffice = FieldOffice

  console.log(Employee_2);

var Employee_3 = new Employee();
  Employee_3.firstName = "Naruto";
  Employee_3.lastName = "Uzumaki";
var Health_3 = new Department();
  // health.name = "Health";
  Employee_3.department = "Jutsu";
var Office_3 = new FieldOffice();
  // FieldOffice.city = "Chicago";
  Employee_3.fieldOffice = "Konoha";
var Clin_3 = new Clinician();
  // Clinician.expertise = "Urology";
  Employee_3.clinician = "Shinobi";
var Oper_3 = new Operations();
  // Operations.area = "Research and development";
  Employee_3.operations = "Hokage";
var HQ_1 = new FieldOffice();
  FieldOffice.city = "Chicago"
  Employee_1.FieldOffice = FieldOffice

  console.log(Employee_3);

var Employee_1 = new Employee();
  Employee_1.firstName = "Amanda";
  Employee_1.lastName = "Huginkis";
var Health_1 = new Department();
  // health.name = "Health";
  Employee_1.department = "Health";
var Office_1 = new FieldOffice();
  // FieldOffice.city = "Chicago";
  Employee_1.fieldOffice = "Chicago";
var Clin_1 = new Clinician();
  // Clinician.expertise = "Urology";
  Employee_1.clinician = "Urologist";
var Oper_1 = new Operations();
  // Operations.area = "Research and development";
  Employee_1.operations = "Research & Development";
var HQ_1 = new FieldOffice();
  FieldOffice.city = "Chicago"
  Employee_1.FieldOffice = FieldOffice

  console.log(Employee_1);

function logEmployee (Employee) {
console.log("firstName :", Employee.firstName);
console.log("lastName :", Employee.lastName);
console.log("Department :", Department.name);
console.log("FieldOffice :", FieldOffice.city);
console.log("Clinician :", Clinician.expertise);
console.log("Operations :", Operations.area);

}

document.getElementById("output").innerHTML = `${Employee_1.firstName} ${Employee_1.lastName} is a ${Employee_1.clinician} and she works in ${Employee_1.department} department in ${Employee_1.operations} area.`;

// document.getElementById("output").innerHTML = `${Employee_2.firstName}`;








