const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalSchedule(animal) { // Parte 4
  const animals = species.find((animalFinded) => animalFinded.name === animal);
  if (animals === undefined) {
    return undefined;
  }
  return animals.availability;
}

function exhibition(day) { // Função acessória: valores da chave exhibition
  const speciesArray = [];
  species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      speciesArray.push(animal.name);
    }
  });
  return speciesArray;
}

function officeHour(day) { // Função acessória: valores da chave officeHour
  const days = Object.keys(data.hours);
  let daysIndex = 0;
  for (let index = 0; index < days.length; index += 1) {
    if (days[index] === day) {
      daysIndex = index;
    }
  }
  const workingTime = Object.values(data.hours)[daysIndex];
  const officeHourParams = Object.values(workingTime);
  const officeHourTxt = `Open from ${officeHourParams[0]}am until ${officeHourParams[1]}pm`;
  return officeHourTxt;
}

function getScheduleByDay(day) { // Parte 3
  const isDay = Object.keys(data.hours).find((param) => (param === day));
  if (isDay === undefined) {
    return undefined;
  }
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const schedule = {};
  schedule[day] = { officeHour: officeHour(day), exhibition: exhibition(day) };
  return schedule;
}

function getScheduleOfTheWeek() { // Parte 1
  const days = Object.keys(data.hours);
  const week = {};
  for (let day = 0; day < days.length; day += 1) {
    if (day <= 5) {
      week[days[day]] = { officeHour: officeHour(days[day]), exhibition: exhibition(days[day]) };
    } else {
      week[days[day]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  }
  return week;
}

function getSchedule(scheduleTarget) {
  if (getScheduleByDay(scheduleTarget) !== undefined) {
    return getScheduleByDay(scheduleTarget);
  }
  if (animalSchedule(scheduleTarget) !== undefined) {
    return animalSchedule(scheduleTarget);
  }
  return getScheduleOfTheWeek();
}

module.exports = getSchedule;
