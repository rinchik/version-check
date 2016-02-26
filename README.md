## version-check

> Check for outdated dependencies.



### Features
* Tells you what's out of date.
* Provides a link to the package's documentation so you can decide if you want the update.
* You can send output to the HihChat Room or output to the console


### Usage

`check.sh` is added to the `package.json` in saks.com root.

#### Send result to the console


```bash
$ npm run version-check
```

![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/9755cbff-ea5d-4b39-a34c-8f996f23044b/00000098.png)

#### Send result to the HipChat


```bash
$ npm run version-check -- -c
```

or

```bash
$ npm run version-check -- --hipchat
```


![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/e00c1769-af41-46e8-8588-4aa43bdec5c4/00000099.png)


TO modify HipCHat end-point yu can edit HipChat section in `config.js`

#### Help

```bash
$ npm run version-check -- -h [--help]

  Usage: version-check [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -c, --hipchat  send results to HipChat
```

