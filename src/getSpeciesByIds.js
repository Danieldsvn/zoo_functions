const data = require('../data/zoo_data');

function getSpeciesByIds(...id) {
  // seu código aqui
  if (id === undefined) {
    return [];
  }
  const idFiltred = data.species.filter((specie) => id.includes(specie.id));
  return idFiltred;
}
module.exports = getSpeciesByIds;
