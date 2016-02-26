#!/usr/bin/env bash

if [ -d "./bin/version-check" ]; then
    cd ./bin/version-check
else
    echo "Oops. Something went wrong :("
    exit;
fi

if [ ! -d "./node_modules" ]; then
    npm install
fi

cd ../../

node ./bin/version-check/index.js $1
