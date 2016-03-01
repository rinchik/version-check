## module-version-check

> Check for outdated `npm` dependencies and report to [HipChat](http://hipchat.com/).



### Features
* Tells you what's out of date.
* Provides a link to the package's documentation so you can decide if you want the update.
* You can send output to the HipChat Room or output to the console
* Very easy to integrate as a daily (/nightly) reporting tool with HipChat notifications


### Installation

```bash
$ npm install -g module-version-check
```

### Usage

#### Node HipChat api


```js
var moduleVersionChecker = require('module-version-check');

var params = {
    "hipchat": {
        "color": "red",
        "token": "",
        "room": 1
    },
    "output": {
        "console": false, // if true, outputs result into console
        "hipchat": true // if true, sends result to HipChat
    },
    path: '' // path to the directory where to check
}

moduleVersionChecker(params).then(function(results){
    // After all output was rendered and sent to the HipChat (and/or console)
    // Do something else with detailed results here
});
```

Results will be an object that looks like this:

```js
{ 
    when: { 
        moduleName: 'when',
        homepage: 'http://cujojs.com',
        error: undefined,
        latest: '3.7.7',
        installed: '3.7.7',
        isInstalled: '3.7.7',
        notInstalled: false,
        packageWanted: '3.7.7',
        packageJson: '^3.7.7',
        isPrivate: undefined,
        devDependency: false,
        usedInScripts: undefined,
        mismatch: false,
        semverValidRange: '>=3.7.7 <4.0.0',
        semverValid: '3.7.7',
        easyUpgrade: true,
        bump: null,
        unused: false 
    } 
}
```

![hipchat](https://raw.githubusercontent.com/rinchik/binary/master/docs/module-version-check/hipchat.png)


#### Check `cwd` and send result to the console

```bash
$ module-version-check
```

![console](https://raw.githubusercontent.com/rinchik/binary/master/docs/module-version-check/console.png)


