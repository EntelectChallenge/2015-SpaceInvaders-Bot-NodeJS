var fs = require('fs'),
    path = require('path'),
    util = require('./util');

var stateFile = 'state.json';

module.exports = {
    load: function(outputPath) {
        var filename = path.join(outputPath, stateFile);

        if (!fs.existsSync(filename)) {
            util.logError('State file not found: ' + filename);
            return null;
        }

        var gameState = JSON.parse(fs.readFileSync(filename));

        // TODO: Enhance the game state with some functions for manipulating it...

        return gameState;
    }
};
