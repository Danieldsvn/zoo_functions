const data = require('../data/zoo_data');

function animalSchedule(animal) { // Parte 4
  const animals = data.species.find((animalFinded) => animalFinded.name === animal);
  if (animals === undefined) {
    return undefined;
  }
  return animals.availability;
}

function getSchedule(scheduleTarget) {
  // if (scheduleTarget === undefined) { // Parte 1
  // }
  if (animalSchedule(scheduleTarget) !== undefined) {
    return animalSchedule(scheduleTarget);
  }
  return 'lindão';
}

// function zooClosed(day) {
// }

console.log(getSchedule('lions'));
// console.log(getSchedule());

module.exports = getSchedule;
