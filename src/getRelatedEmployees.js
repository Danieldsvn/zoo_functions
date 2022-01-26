const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.some((manager) => manager.managers.includes(id));
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerRelated = data.employees.filter((manager) => manager.managers === managerId);
  return managerRelated;
}

module.exports = { isManager, getRelatedEmployees };
