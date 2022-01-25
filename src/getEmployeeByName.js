const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const getFirst = data.employees.find((first) => first.firstName === employeeName);
  if (getFirst !== undefined) {
    return getFirst;
  }
  const getLast = data.employees.find((last) => last.lastName === employeeName);
  return getLast;
}

module.exports = getEmployeeByName;
