#!/usr/bin/env node

var moduleVersionChecker = require('./index');

var params = {
    "hipchat": {
        "color": "red",
        "token": "",
        "room": 1
    },
    "output": {
        "console": false,
        "hipchat": true
    },
    "path": ''
}

moduleVersionChecker(params);


