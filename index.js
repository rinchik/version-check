
var npmCheck = require('npm-check');
var cli = require('./output/cli');
var Hipchatter = require('./output/hipchat');

function moduleVersionChecker (params) {

    var toConsole = params.output.console;
    var toHipchat = params.output.hipchat;
    var hipchat = new Hipchatter(params.hipchat);
    var path = params.path ? params.path : process.cwd();

    return npmCheck({
        "path": path
    }).then(function (result) {
        if (toConsole) {
            cli(result);
        }
        if (toHipchat) {
            hipchat(result);
        }
    });
}

module.exports = moduleVersionChecker;
