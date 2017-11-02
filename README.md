[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ceb4fc42fea94445aabd2fd0213e0d53)](https://www.codacy.com/app/seeren/minpopup?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=seeren/minpopup&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/seeren/minpopup.svg?branch=master)](https://travis-ci.org/seeren/minpopup) [![GitHub license](https://img.shields.io/badge/license-MIT-orange.svg)](https://raw.githubusercontent.com/seeren/minpopup/master/LICENSE) [![npm](https://img.shields.io/npm/v/minpopup.svg)](https://www.npmjs.com/package/minpopup) [![npm](https://img.shields.io/npm/dt/minpopup.svg)](https://www.npmjs.com/package/minpopup)

# minpopup
A minimal popup that display a discreet notification to users. Using responsive and material design the popup provide different level of log with colors as metaphor.

## Demo
[https://seeren.github.io/minpopup/](https://seeren.github.io/minpopup/)

## Features
* Pop color
* Listen interaction
* UMD support

## Installation
Can be installed with [npm](https://www.npmjs.com/package/minpopup), there is no need to install style sheet because they are embedded.
```
npm install minpopup
```

## Usage
For display a notification by level, just use the method corresponding. These level are available: emergency, alert, critical, error, warning, notice, info, debug.
```js
minpopup.emergency("Message");
```
There is three event handler for listen user action, when the popup is closed and when the user confirm or cancel.
```js
minpopup.alert("Message").onabort(
    function () {
        console.log("Triggered when the user abort");
    }
);
```
A confirmation and cancelation button can be displayed, adding event handler for the user action.
```js
minpopup.debug("Debug message")
        .onconfirm(function () {
             console.log("Triggered when user confirm");
        })
        .oncancel(function () {
             console.log("Triggered when user cancel");
        });
```

## Inspiration
This popup is a transposition of the PHP [Psr-3](http://www.php-fig.org/psr/psr-3/) logger interface but for client side.

## Run the tests
Test can be runned in client and server side after install development dependencies.
```
npm install
```
#### Run with Node
```
./node_modules/.bin/mocha
```
#### Run in a browser
```
start ./test/index.html
```

## Authors
* **Cyril Ichti** - [www.seeren.fr](http://www.seeren.fr)