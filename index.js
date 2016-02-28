
var npmCheck = require('npm-check');
var cli = require('./output/cli');
var Hipchatter = require('./output/hipchat');
var when = require('when');

function moduleVersionChecker (params) {

    var deferred = when.defer();
    var toConsole = params.output.console;
    var toHipchat = params.output.hipchat;
    var hipchat = new Hipchatter(params.hipchat);
    var path = params.path ? params.path : process.cwd();

    npmCheck({
        "path": path
    }).then(function (result) {
        if (toConsole) {
            cli(result);
        }
        if (toHipchat) {
            hipchat(result);
        }

        deferred.resolve(result);

    });

    return deferred.promise;
}

module.exports = moduleVersionChecker;
