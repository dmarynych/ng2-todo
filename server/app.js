const axios = require('axios');
const express = require('express');

const app = express();

const token = '';

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/competitions', function (req, res) {
    axios.get('https://api.football-data.org/v1/competitions/', {
        headers: { 'X-Auth-Token': token },
    }).then(response => {
        console.log(response)
        res.send(response.data);
    })

});

app.get('/competitions/:id/leagueTable', function (req, res) {
    axios.get(`https://api.football-data.org/v1/competitions/${req.params.id}/leagueTable`, {
        headers: { 'X-Auth-Token': token },
    }).then(response => {
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
    axios.get(`https://api.football-data.org/v1/teams/${req.params.id}`, {
        headers: { 'X-Auth-Token': token },
    }),
    axios.get(`https://api.football-data.org/v1/teams/${req.params.id}/fixtures`, {
        headers: { 'X-Auth-Token': token },
    })
  ])
  .then(axios.spread(function (teamResponse, fixturesResponse) {
    teamResponse.data.games = fixturesResponse.data.fixtures
    res.send(teamResponse.data);
  }));

});

app.listen(3000, function () {
    console.log('express running at http://localhost:%d', 3000);
});


