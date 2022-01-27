const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    
  } 
  if (Object.keys(animal).length > 0) {
    const species = data.species.find((specieFilted) => specieFilted.name === animal.specie);    
    if (Object.keys(animal).length === 1) { // Entrando apenas com a chave specie
      const speciesAmount = species.residents.length;
      return speciesAmount;
    } 
    else { // Entrando com a chave specie e a chave sex
      let animalSexCounter = 0;      
      const sexSpecies = species.residents.forEach((properties) => {
        if (properties.sex === animal.sex) {
          animalSexCounter += 1;    
        }
        return animalSexCounter;
      }); 
      return animalSexCounter;
    }
  } 
}

module.exports = countAnimals;
