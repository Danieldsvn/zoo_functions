const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getFirstAnimalId(personId) {
  const getEmployeeObject = employees.find((employee) => (employee.id === personId));
  const getFirstAnimal = getEmployeeObject.responsibleFor[0];
  return getFirstAnimal;
}
function getOldestFromFirstSpecies(id) {
  const animalId = getFirstAnimalId(id);
  const animalObject = data.species.find((aniId) => (aniId.id === animalId));
  const sortedByAge = animalObject.residents.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
  const oldest = sortedByAge[sortedByAge.length - 1];
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
