const axios = require('axios');

class FootballDataApi {
	constructor(inputApiKey) {
		const apiKey = inputApiKey;

		this.axiosObj = axios.create({
			baseURL: 'http://api.football-data.org/v2',
			headers: {
				'X-Auth-Token': apiKey
			}
		});

		this.competitions = {
			'premier-league': 2021,
			'championship': 2016,
			'ligue-1': 2015,
			'bundesliga': 2002,
			'serie-a': 2019,
			'eredivisie': 2003,
			'primeira-liga': 2017,
			'primera-division': 2014
		};
	}

	getCompetitions() {
		// plan: TIER_ONE, filter for the free plan
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get('/competitions/', {
					params: {
						plan: 'TIER_ONE'
					}
				})
				.then((response) => {
					response.data.ajaxStatus = 'success';
					resolve(response.data);
				})
				.catch((error) => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						reject({
							ajaxStatus: 'error',
							errorMessage: error.response.data.message,
							errorCode: error.response.status
						});
					} else if (error.request) {
						// The request was made but no response was received
						reject({
							ajaxStatus: 'error',
							errorMessage: 'The request was made but no response was received'
						});
					} else {
						// Something happened in setting up the request that triggered an Error
						reject({
							ajaxStatus: 'error',
							errorMessage: error.message
						});
					}
				});
		});

		return returnedPromise;
	}

	getCompetitionsStandings() {
		let competitionsAliases = ['premier-league', 'ligue-1', 'championship'];

		const promisesArray = competitionsAliases.map((competitionAlias) => {
			return this.getCompetitionStandings(this.competitions[competitionAlias]);
		});

		return Promise.all(promisesArray);
	}

	getCompetitionStandings(comp) {
		let compId = '';
		if (typeof comp == 'number') {
			compId = comp;
		} else {
			compId = this.competitions[comp];
		}

		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${compId}/standings/`)
				.then((response) => {
					response.data.ajaxStatus = 'success';
					resolve(response.data);
				})
				.catch((error) => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						reject({
							ajaxStatus: 'error',
							errorMessage: error.response.data.message,
							errorCode: error.response.status
						});
					} else if (error.request) {
						// The request was made but no response was received
						reject({
							ajaxStatus: 'error',
							errorMessage: 'The request was made but no response was received'
						});
					} else {
						// Something happened in setting up the request that triggered an Error
						reject({
							ajaxStatus: 'error',
							errorMessage: error.message
						});
					}
				});
		});

		return returnedPromise;
	}
}

module.exports = FootballDataApi;
