const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = data.employees.filter((manager) => manager.id === stephanieId); 
  return managers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager());
module.exports = { isManager, getRelatedEmployees };
