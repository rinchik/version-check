#!/usr/bin/env node

var moduleVersionChecker = require('./index');

var params = {
    "hipchat": {
        "color": "red",
        "token": "",
        "room": 1
    },
    "output": {
        "console": true,
        "hipchat": false
    },
    "path": ''
}

moduleVersionChecker(params);


