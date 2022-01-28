const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allSpeciesAmount = data.species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
    return allSpeciesAmount;
  }
  const species = data.species.find((specieFilted) => specieFilted.name === animal.specie);
  if (Object.keys(animal).length === 1) { // Entrando apenas com a chave specie
    return species.residents.length;
  }
  let animalSexCounter = 0; // Entrando com a chave specie e a chave sex
  species.residents.forEach((properties) => {
    if (properties.sex === animal.sex) {
      animalSexCounter += 1;
    }
  });
  return animalSexCounter;
}

module.exports = countAnimals;
