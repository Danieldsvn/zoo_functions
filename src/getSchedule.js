const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalSchedule(animal) { // Parte 4
  const animals = species.find((animalFinded) => animalFinded.name === animal);
  if (animals === undefined) {
    return undefined;
  }
  return animals.availability;
}

function exhibition(day) {
  const speciesArray = []; // valores da chave exhibition
  species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      speciesArray.push(animal.name);
    }
  });
  return speciesArray;
}

function officeHour(day) {
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

function getScheduleByDay(day) {
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

function getScheduleOftheWeek() {
  const days = Object.keys(data.hours);
  const week = {};
  week[days[0]] = { officeHour: officeHour('Tuesday'), exhibition: exhibition('Tuesday') };
  week[days[1]] = { officeHour: officeHour('Wednesday'), exhibition: exhibition('Wednesday') };
  week[days[2]] = { officeHour: officeHour('Thursday'), exhibition: exhibition('Thursday') };
  week[days[3]] = { officeHour: officeHour('Friday'), exhibition: exhibition('Friday') };
  week[days[4]] = { officeHour: officeHour('Saturday'), exhibition: exhibition('Saturday') };
  week[days[5]] = { officeHour: officeHour('Sunday'), exhibition: exhibition('Sunday') };
  week[days[6]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return week;
}

function getSchedule(scheduleTarget) {
  if (getScheduleByDay(scheduleTarget) !== undefined) {
    return getScheduleByDay(scheduleTarget);
  }
  if (animalSchedule(scheduleTarget) !== undefined) {
    return animalSchedule(scheduleTarget);
  }
  return getScheduleOftheWeek();
}

console.log(getSchedule('tapioca'));
// console.log(getSchedule());

module.exports = getSchedule;
