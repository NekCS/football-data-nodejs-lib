console.log('=== Testing Started ===');
require('dotenv').config();
const FootballDataApi = require('../lib/FootballDataApi');
const util = require('util')

// console.log(util.inspect(error, false, null, true /* enable colors */))
//const footballDataApiKey = 'YOUR-API-KEY';
const footballDataApiKey = process.env.FOOTBALL_DATA_APIKEY;
const fd = new FootballDataApi(footballDataApiKey)

fd.getCompetitions().then(response => {

})



//console.log('=== Testing Finished ===');
