var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter();

function hipchat(config) {
    var room = config.room; // FE Devs - AEM

    var params = {
        color: config.color,
        token: config.token,
        message: ''
    };

    return function (result) {
        for (var key in result) {
            var module = result[key];
            params.message = '<strong>Oudated</strong>: ' + key + ',' +
                ' installed: <strong>' + module.installed + '</strong>,' +
                ' latest: <strong>' + module.latest + '</strong>,' +
                ' <a href="' + module.homepage + '">info</a>';

            if (module.bump) {
                this.notify(room, params);
            }
        }

    }.bind(this);
};

hipchat.prototype.notify = function (room, params) {
    hipchatter.notify(room, params,  this.errorHandler);
};

hipchat.prototype.errorHandler = function (error) {
    if (error) {
        console.log(error);
    }
};

module.exports = hipchat;
