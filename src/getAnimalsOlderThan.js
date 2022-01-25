const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalsFilted = data.species.filter((animals) => animals.name === animal);
  const isOldAnimal = animalsFilted[0].residents.every((oldAnimal) => oldAnimal.age > age);
  return isOldAnimal;
}
module.exports = getAnimalsOlderThan;
