console.log('=== Testing Started ===');
require('dotenv').config();
const FootballDataApi = require('../lib/FootballDataApi');
const util = require('util')

const footballDataApiKey = process.env.FOOTBALL_DATA_APIKEY;
const fd = new FootballDataApi(footballDataApiKey)