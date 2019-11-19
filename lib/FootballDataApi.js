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

	getCompetitions(filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get('/competitions/', {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getCompetition(competitionId) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${competitionId}`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getCompetitionTeams(competitionId, filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${competitionId}/teams`, {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getCompetitionStandings(competitionId) {

		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${competitionId}/standings/`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});

		return returnedPromise;
	}

	getCompetitionsStandings(competitionsArray = []) {

		const promisesArray = competitionsArray.map((competitionId) => {
			return this.getCompetitionStandings(competitionId);
		});

		return Promise.all(promisesArray);
	}

	getCompetitionMatches(competitionId, filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${competitionId}/matches`, {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getCompetitionScorers(competitionId, filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/competitions/${competitionId}/scorers`, {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getMatches(filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get('/matches', {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getMatch(matchId) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/matches/${matchId}`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getTeamMatches(teamId, filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/teams/${teamId}/matches/`, {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getTeam(teamId) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/teams/${teamId}/`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getAreas() {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get('/areas/')
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getArea(areaId) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/areas/${areaId}`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getPlayer(playerId) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/players/${playerId}`)
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}

	getPlayerMatches(playerId, filters) {
		const returnedPromise = new Promise((resolve, reject) => {
			this.axiosObj
				.get(`/players/${playerId}/matches`, {
					params: filters
				})
				.then((response) => {
					handleAxiosSuccess(response, resolve);
				})
				.catch((error) => {
					handleAxiosError(error, reject);
				});
		});
		return returnedPromise;
	}
}

const handleAxiosSuccess = (response, resolve) => {
	response.data.ajaxStatus = 'success';
	resolve(response.data);
};

const handleAxiosError = (error, reject) => {
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
}

module.exports = FootballDataApi;
