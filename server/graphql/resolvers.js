const characters = require('./model');
const axios = require('axios');

module.exports = {
  Query: {
    people: () => characters.map(x => {
      return {...x, homeWorld: axios.get(x.homeworld).then(response => response.data)}
    })
  }
}