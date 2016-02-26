var program = require('commander');
var npmCheck = require('npm-check');
var config = require('./config.json');

var Hipchatter = require('./output/hipchat');
var cli = require('./output/cli');

var hipchat = new Hipchatter(config.hipchat);

program
    .version(config.version)
    .option('-c, --hipchat', 'send results to HipChat')
    .option('-p, --path', 'path to the project where version-check checks')
    .parse(process.argv);

var path = program.path && program.args ? program.args[0] : './';

npmCheck({
    "path": path
}).then(function (result) {
    if (program.hipchat) {
        hipchat(result);
    } else {
        cli(result);
    }
});
