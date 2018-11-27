const characters = require('./model');
const axios = require('axios');

module.exports = {
  Query: {
    people: () => characters.map(x => {
      return {...x, homeWorld: axios.get(x.homeworld).then(response => response.data)}
    }),
    person: (parent, args) => {
      const p = characters.find(x => x.id === args.id);
      return { ...p, homeWorld: axios.get(p.homeworld).then(response => response.data)}
    }
  }
}