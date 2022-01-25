const data = require('../data/zoo_data');

function getSpeciesByIds(id) {
  // seu código aqui
  if (id === undefined) {
    return [];
  }
  const idFiltred = data.species.filter((specie) => specie.id === id);
  return idFiltred;
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
