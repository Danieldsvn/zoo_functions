const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childrenCounter = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      childrenCounter += 1;
    }
  });
  const children = { child: childrenCounter };
  let adultsCounter = 0;
  entrants.forEach((element) => {
    if (element.age >= 18 && element.age < 50) {
      adultsCounter += 1;
    }
  });
  const adults = { adult: adultsCounter };
  const seniorsCounter = entrants.length - adultsCounter - childrenCounter;
  const seniors = { senior: seniorsCounter };
  const entrantsClassified = {};
  return Object.assign(entrantsClassified, adults, children, seniors);
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalAdults = countEntrants(entrants).adult * data.prices.adult;
  const totalChildren = countEntrants(entrants).child * data.prices.child;
  const totalSeniors = countEntrants(entrants).senior * data.prices.senior;
  const totalAcc = totalAdults + totalChildren + totalSeniors;
  return totalAcc;
}

module.exports = { calculateEntry, countEntrants };
