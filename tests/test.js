console.log('=== Testing Started ===');
require('dotenv').config();
const FootballDataApi = require('../lib/FootballDataApi');
const util = require('util')

const footballDataApiKey = process.env.FOOTBALLDATA_APIKEY;
const fd = new FootballDataApi(footballDataApiKey)


fd.getCompetitions()
	.then(res => {
		console.info(JSON.stringify(res, null, 4));
	})
	.catch(err => {
		console.error(JSON.stringify(err, null, 4));
	})