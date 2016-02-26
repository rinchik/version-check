
var npmCheck = require('npm-check');
var cli = require('./output/cli');
var Hipchatter = require('./output/hipchat');

function moduleVersionChecker (params) {

    var console = params.console;
    var hipchat = new Hipchatter(params.hipchat);
    var path = params.path ? params.path : process.cwd();

    return npmCheck({
        "path": path
    }).then(function (result) {
        if (console) {
            cli(result);
        } else {
            hipchat(result);
        }
    });
}

module.exports = moduleVersionChecker;
