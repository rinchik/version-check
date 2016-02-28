## version-check

> Check for outdated `npm` dependencies.



### Features
* Tells you what's out of date.
* Provides a link to the package's documentation so you can decide if you want the update.
* You can send output to the HipChat Room or output to the console

### Installation

```bash
$ npm install -g module-version-check
```

### Usage

#### Check `cwd` and send result to the console


```bash
$ module-version-check
```

![console](https://raw.githubusercontent.com/rinchik/binary/master/docs/module-version-check/console.png)

#### Node HipChat api


```js
var moduleVersionChecker = require('module-version-check');

moduleVersionChecker(params).then(function(results){
    // Do something else with detailed results here
});
```

**Params**:
```js
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
    path: ''
}
```


`console` - if true, outputs result into console

`hipchat` - if true, outputs sends result to HipChat

`path` - path to the directory where to check

![hipchat](https://raw.githubusercontent.com/rinchik/binary/master/docs/module-version-check/hipchat.png)

