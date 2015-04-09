var mapLoader = require('./map'),
    moment = require('moment'),
    stateLoader = require('./state'),
    util = require('./util');

module.exports = main;

function main(outputPath) {
    var startTime = moment();
    util.log('Started.');

    var state = stateLoader.load(outputPath);
    logPlayersState(state);

    var map = mapLoader.load(outputPath);
    logMap(map);

    var move = getRandomMove();
    util.outputMove(move, outputPath, function() {
        var endTime = moment();
        var runTime = endTime.diff(startTime);
        util.log('Finished in ' + runTime + 'ms.');
    });
}

function logPlayersState(state) {
    if (state === null) {
        util.logError('Failed to load state.');
        return;
    }

    util.log('Game state:')
    util.log('\tRound: ', state.RoundNumber);

    for (var i = 0; i < state.Players.length; i++) {
        logPlayerState(state.Players[i]);
    }
}

function logPlayerState(player) {
    var playerName = '\tPlayer ' + player.PlayerNumberReal + ' (' + player.PlayerName + ')';

    util.log(playerName, '\tKills:', player.Kills);
    util.log(playerName, '\tLives: ', player.Lives);
    util.log(playerName, '\tMissiles:', player.Missiles.length, '/', player.MissileLimit);
}

function logMap(map) {
    if (map === null) {
        util.logError('Failed to load map.');
    }

    util.log('Map:\n' + map.text);
}

function getRandomMove() {
    var moves = [
        'Nothing',
        'MoveLeft',
        'MoveRight',
        'Shoot',
        'BuildShield',
        'BuildAlienFactory',
        'BuildMissileController'
    ];

    return moves[util.randomInt(0, moves.length)];
}
