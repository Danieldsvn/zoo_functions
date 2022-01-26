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
  return [`${objEmployees[0].firstName} ${objEmployees[0].lastName}`, `${objEmployees[1].firstName} ${objEmployees[1].lastName}`, `${objEmployees[2].firstName} ${objEmployees[2].lastName}`];   
}

module.exports = { isManager, getRelatedEmployees };
