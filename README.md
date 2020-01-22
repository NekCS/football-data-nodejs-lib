# football-data-nodejs-lib
A simple promise-based NodeJs library for getting data from https://www.football-data.org/<br>

[football-data.org](https://www.football-data.org) provides football data and statistics (live scores, fixtures, tables, squads, lineups/subs, etc.) in a machine-readable way.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

* NodeJS
* npm

### Installing

Get an API Key from [football-data.org](https://www.football-data.org/)

Download or clone the repository. For cloning:

```
git clone https://github.com/NekCS/football-data-nodejs-lib.git
```

If you already have a project then copy the FootballDataApi.js file and install the [axios package](https://github.com/axios/axios) in your project's folder.

```
npm install axios
```

### Usage

A simple example:

```javascript
const FootballDataApi = require('FILE_PATH/FootballDataApi');

const fd = new FootballDataApi(footballDataApiKey);
fd.getCompetitions()
.then(res => {
  // DO SOMETHING CLEVER WITH THE DATA
  console.info(JSON.stringify(res, null, 4));
})
.catch(err => {
  // HANDLE ERROR
  console.error(JSON.stringify(err, null, 4));
});
```

A simple example usings filters

```javascript
const FootballDataApi = require('FILE_PATH/FootballDataApi');

const fd = new FootballDataApi(footballDataApiKey);
fd.getCompetitions({
  plan: 'TIER_ONE'
})
.then(res => {
  // DO SOMETHING CLEVER WITH THE DATA
  console.info(JSON.stringify(res, null, 4));
})
.catch(err => {
  // HANDLE ERROR
  console.error(JSON.stringify(err, null, 4));
});
```

The response for the example using filters

```json

{
    "count": 12,
    "filters": {
        "plan": "TIER_ONE"
    },
    "competitions": [
        {
            "id": 2013,
            "area": {
                "id": 2032,
                "name": "Brazil"
            },
            "name": "Série A",
            "code": "BSA",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 460,
                "startDate": "2019-04-28",
                "endDate": "2019-12-08",
                "currentMatchday": 38,
                "winner": null
            },
            "numberOfAvailableSeasons": 3,
            "lastUpdated": "2019-12-09T22:25:01Z"
        },
        {
            "id": 2021,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Premier League",
            "code": "PL",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 468,
                "startDate": "2019-08-09",
                "endDate": "2020-05-17",
                "currentMatchday": 24,
                "winner": null
            },
            "numberOfAvailableSeasons": 27,
            "lastUpdated": "2020-01-22T00:15:03Z"
        },
        {
            "id": 2016,
            "area": {
                "id": 2072,
                "name": "England"
            },
            "name": "Championship",
            "code": "ELC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 503,
                "startDate": "2019-08-02",
                "endDate": "2020-05-27",
                "currentMatchday": 14,
                "winner": null
            },
            "numberOfAvailableSeasons": 3,
            "lastUpdated": "2020-01-21T23:59:39Z"
        },
        {
            "id": 2018,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "European Championship",
            "code": "EC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 507,
                "startDate": "2020-06-12",
                "endDate": "2020-07-12",
                "currentMatchday": 1,
                "winner": null
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-08-23T12:16:01Z"
        },
        {
            "id": 2001,
            "area": {
                "id": 2077,
                "name": "Europe"
            },
            "name": "UEFA Champions League",
            "code": "CL",
            "emblemUrl": "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 495,
                "startDate": "2019-06-25",
                "endDate": "2020-05-30",
                "currentMatchday": 6,
                "winner": null
            },
            "numberOfAvailableSeasons": 19,
            "lastUpdated": "2019-12-12T20:20:00Z"
        },
        {
            "id": 2015,
            "area": {
                "id": 2081,
                "name": "France"
            },
            "name": "Ligue 1",
            "code": "FL1",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 499,
                "startDate": "2019-08-09",
                "endDate": "2020-05-31",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 9,
            "lastUpdated": "2020-01-15T21:19:23Z"
        },
        {
            "id": 2002,
            "area": {
                "id": 2088,
                "name": "Germany"
            },
            "name": "Bundesliga",
            "code": "BL1",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 474,
                "startDate": "2019-08-16",
                "endDate": "2020-05-16",
                "currentMatchday": 19,
                "winner": null
            },
            "numberOfAvailableSeasons": 24,
            "lastUpdated": "2020-01-19T23:59:40Z"
        },
        {
            "id": 2019,
            "area": {
                "id": 2114,
                "name": "Italy"
            },
            "name": "Serie A",
            "code": "SA",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 530,
                "startDate": "2019-08-24",
                "endDate": "2020-05-24",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 15,
            "lastUpdated": "2020-01-21T13:50:00Z"
        },
        {
            "id": 2003,
            "area": {
                "id": 2163,
                "name": "Netherlands"
            },
            "name": "Eredivisie",
            "code": "DED",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 481,
                "startDate": "2019-08-09",
                "endDate": "2020-05-25",
                "currentMatchday": 20,
                "winner": null
            },
            "numberOfAvailableSeasons": 10,
            "lastUpdated": "2020-01-20T20:40:04Z"
        },
        {
            "id": 2017,
            "area": {
                "id": 2187,
                "name": "Portugal"
            },
            "name": "Primeira Liga",
            "code": "PPL",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 484,
                "startDate": "2019-08-10",
                "endDate": "2020-05-19",
                "currentMatchday": 18,
                "winner": null
            },
            "numberOfAvailableSeasons": 9,
            "lastUpdated": "2020-01-20T20:45:04Z"
        },
        {
            "id": 2014,
            "area": {
                "id": 2224,
                "name": "Spain"
            },
            "name": "Primera Division",
            "code": "PD",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 519,
                "startDate": "2019-08-16",
                "endDate": "2020-05-24",
                "currentMatchday": 21,
                "winner": null
            },
            "numberOfAvailableSeasons": 27,
            "lastUpdated": "2020-01-20T20:45:04Z"
        },
        {
            "id": 2000,
            "area": {
                "id": 2267,
                "name": "World"
            },
            "name": "FIFA World Cup",
            "code": "WC",
            "emblemUrl": null,
            "plan": "TIER_ONE",
            "currentSeason": {
                "id": 1,
                "startDate": "2018-06-14",
                "endDate": "2018-07-15",
                "currentMatchday": 3,
                "winner": {
                    "id": 773,
                    "name": "France",
                    "shortName": "France",
                    "tla": "FRA",
                    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
                }
            },
            "numberOfAvailableSeasons": 2,
            "lastUpdated": "2018-08-23T12:16:17Z"
        }
    ],
    "ajaxStatus": "success"
}

```


## Author

Nektarios Liakis [NekCS](https://github.com/NekCS)<br>
Reach out to me at one of the following places!

* [Linkedin](https://www.linkedin.com/in/nektarios-liakis/)
* Email at nek.liakis@gmail.com

## License

This project is licensed under the GNU GPL v3.0 License - see the [LICENSE.md](https://github.com/NekCS/football-data-nodejs-lib/blob/master/LICENSE) file for details

## Acknowledgments

* **[Axios](https://github.com/axios/axios)**
* **[football-data.org](https://www.football-data.org/)**

