const request = require('request');
const args = process.argv.splice(2);

const breedFetcher = (args) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, object) => {
    if (error) {
      console.log(error, 'Sorry, there\'s an issue');
      return;
    }
    const data = JSON.parse(object.body);
    if (data.length === 0) {
      console.log(error, 'Sorry, breed not found!');
      return;
    }
    console.log(data[0].description);
  });
};

breedFetcher(args); // Don't forget to pass in your arguments!!!


//e.g ?q=sib to search for Siberian - https://api.thecatapi.com/v1/breeds/search?q=Siberian
