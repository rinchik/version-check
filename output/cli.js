var colors = require('colors');
var Table = require('cli-table');

var table = new Table({
    head: ['Module', 'Installed', 'Latest', 'Home Page']
});

module.exports = function (result) {
    for (var key in result) {
        var module = result[key];

        if (module.bump) {
            table.push([key, module.installed.bgRed, module.latest, module.homepage.underline]);
        }
    }
    console.log(table.toString());
};
