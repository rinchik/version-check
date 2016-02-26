## version-check

> Check for outdated `npm` dependencies.



### Features
* Tells you what's out of date.
* Provides a link to the package's documentation so you can decide if you want the update.
* You can send output to the HihChat Room or output to the console

### Installation

```bash
$ npm install -g module-version-check
```

### Usage

#### Check `cwd` and send result to the console


```bash
$ module-version-check
```

![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/9755cbff-ea5d-4b39-a34c-8f996f23044b/00000098.png)

#### Node HipChat api


```js
var moduleVersionChecker = require('module-version-check');
moduleVersionChecker(params);
```

Params:
```js
var params = {
    "hipchat": {
        "color": "red",
        "token": "",
        "room": 1
    },
    console: false, //required
    path: ''
}
```


`console` - if true, outputs result into console

`path` - path to the directory where to check

![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/e00c1769-af41-46e8-8588-4aa43bdec5c4/00000099.png)

