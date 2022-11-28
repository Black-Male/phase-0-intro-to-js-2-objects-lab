// Write your solution in this file!
const employee = {
    name: "Khalil",
    streetAdress:"0000"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const clone = {...employee};
    delete clone[key];
    return clone;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
