const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const getFirst = data.employees.filter((first) => first.firstName === employeeName);
  if (getFirst.length === 1) {
    return getFirst[0];
  }
  const getLast = data.employees.filter((last) => last.lastName === employeeName);
  return getLast[0];
}

module.exports = getEmployeeByName;
