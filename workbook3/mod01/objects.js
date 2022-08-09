let emp1 = {
  employeeId: "1",
  name: "Ezra",
  jobTitle: "Theater teacher",
  payRate: 38.46
};

let emp2 = {
  employeeId: "2",
  name: "Damy",
  jobTitle: "Code teacher",
  payRate: 38.46
};

console.log("emp 1:", emp1.name);
console.log("emp 2:", emp2.name);

function printEmployeeDetails(emp) {
  console.log("Name: ", emp.name, "Jobtitle:", emp.jobTitle);
}

printEmployeeDetails(emp1);
printEmployeeDetails(emp2);

function createEmployee(id, name, jobTitle, payRate) {
  let emp = {
    employeeId: id,
    name: name,
    jobTitle: jobTitle,
    payRate: payRate
  };

  return emp;
}

let newHire = createEmployee(3, "Bobby", "Company dog", "cookies");
console.log(newHire);

class Employee {
  constructor(id, name, jobTitle, payRate) {
    this.employeeId = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  printDetails() {
    console.log("Name:", this.name);
    console.log("Id:", this.employeeId);
    console.log("Job title:", this.jobTitle);
    console.log("Pay rate:", this.payRate);
  }
}

let emp4 = new Employee(4, "Malle sander", "company salamander", "mosquito babies");

console.log(emp4);
printEmployeeDetails(emp4);
console.log(emp4.jobTitle);

emp4.printDetails();
newHire.printDetails();