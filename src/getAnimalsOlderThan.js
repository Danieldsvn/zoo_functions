const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalsFilted = data.species.find((animals) => animals.name === animal);
  const isOldAnimal = animalsFilted.residents.every((oldAnimal) => oldAnimal.age > age);
  return isOldAnimal;
}
module.exports = getAnimalsOlderThan;
