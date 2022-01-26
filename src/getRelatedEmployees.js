const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.some((manager) => manager.managers.includes(id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const objEmployees = data.employees.filter((employee) => employee.managers.includes(managerId));
  const finalResult = [];
  objEmployees.forEach((element) => {
    finalResult.push(`${element.firstName} ${element.lastName}`);
  });
  return finalResult;
}

module.exports = { isManager, getRelatedEmployees };
