## version-check

> Check for outdated `npm` dependencies.



### Features
* Tells you what's out of date.
* Provides a link to the package's documentation so you can decide if you want the update.
* You can send output to the HihChat Room or output to the console

### Installation

```bash
$ npm install module-version-check
```

### Usage

#### Check `cwd` and send result to the console


```bash
$ npm run start
```

#### Check in path and send result to the console


```bash
$ npm run start -- -p ~/path/to/the/project
```

![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/9755cbff-ea5d-4b39-a34c-8f996f23044b/00000098.png)

#### Check in 'cwd' and result to the HipChat


```bash
$ npm run start -- -c
```

or

```bash
$ npm run start -- --hipchat
```

#### Check in path and result to the HipChat


```bash
$ npm run start -- -c -p ~/path/to/the/project
```

or

```bash
$ npm run start -- --hipchat -p ~/path/to/the/project
```

![cli](http://content.screencast.com/users/rinat.ussenov/folders/Jing/media/e00c1769-af41-46e8-8588-4aa43bdec5c4/00000099.png)


To modify HipCHat end-point yu can edit HipChat section in `config.js`


#### Help

```bash
$ npm run version-check -- -h [--help]

  Usage: version-check [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -c, --hipchat  send results to HipChat
```

