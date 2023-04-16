const employee = { 
    name : "streetAddress"
}
function updateEmployeeWithKeyAndValue(emplyee, name, value) {
const newEmployee = {...employee};
newEmployee[name] = value; 
return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employes, name, value) {
    employee[name] = value;
    return employee; 
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee) { 
 delete employee.name;
 return employee 
}