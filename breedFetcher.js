const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback('Sorry, there\'s an issue!', error);
      return;
    }
    if (data.length === 0) {
      callback('Sorry, breed not found!', null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };


// const breedFetcher = (args) => {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, object) => {
//     if (error) {
//       console.log(error, 'Sorry, there\'s an issue');
//       return;
//     }
//     const data = JSON.parse(object.body);
//     if (data.length === 0) {
//       console.log(error, 'Sorry, breed not found!');
//       return;
//     }
//     console.log(data[0].description);
//   });
// };

// breedFetcher(args); // Don't forget to pass in your arguments!!!

