const axios = require('axios');
const express = require('express');

const app = express();

const token = '';

let instance = axios.create({
  baseURL: 'https://api.football-data.org/v1/',
  timeout: 1000,
  headers: {'X-Auth-Token': token}
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/competitions', function (req, res) {
    instance.get('competitions/').then(response => {
        //console.log(response)
        res.send(response.data);
    })
});

app.get('/competitions/:id/leagueTable', function (req, res) {
    instance.get(`competitions/${req.params.id}/leagueTable`)
    .then(response => {
        let data = response.data;
        if (data.standing) {
            data.standing = data.standing.map(stand => {
                console.log(stand)
                let href = stand._links.team.href.split('/');
                stand.id = Number(href[href.length - 1]);
                return stand;
            })
        }
        res.send(response.data);
    })
});


app.get('/teams/:id', function (req, res) {
  axios.all([
    instance.get(`teams/${req.params.id}`),
    instance.get(`teams/${req.params.id}/fixtures`)
  ])
  .then(axios.spread(function (teamResponse, fixturesResponse) {
    let fixtures = fixturesResponse.data.fixtures;
    fixtures = fixtures.map(fixture => {
        fixture.homeWin = fixture.result.goalsHomeTeam > fixture.result.goalsAwayTeam;
        return fixture;
    })
    teamResponse.data.games = fixtures;
    teamResponse.data.teamId = req.params.id;
    res.send(teamResponse.data);
  }));
});

app.get('/players/:id', function (req, res) {
  instance.get(`/teams/${req.params.id}/players`)
  .then(response => {
      console.log(response.data)
        res.send(response.data);
    })
});

app.listen(3000, function () {
    console.log('express running at http://localhost:%d', 3000);
});


