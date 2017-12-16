 [![Build Status](https://travis-ci.org/seeren/ui-design.svg?branch=master)](https://travis-ci.org/seeren/ui-design)  [![Coverage Status](https://coveralls.io/repos/github/seeren/ui-design/badge.svg?branch=master)](https://coveralls.io/github/seeren/ui-design?branch=master) [![npm](https://img.shields.io/npm/dt/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e933f03e70a34c7bbd45a31f521f3b02)](https://www.codacy.com/app/seeren/ui-design?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=seeren/ui-design&amp;utm_campaign=Badge_Grade) [![npm](https://img.shields.io/npm/v/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# ui-design
**Build material and mobile first interface with a simple toolkit**

## Demo

[https://seeren.github.io/ui-design/](https://seeren.github.io/ui-design/)


## Installation
Install with [npm](https://www.npmjs.com/package/ui-design)
```
npm install ui-design
```
Add link and script tag
```html
<link rel="stylesheet" type="text/css" href="./node_modules/ui-design/dist/ui-design.css" />
```
```html
<script type="text/javascript" src="./node_modules/ui-dialog/dist/ui-dialog.js"></script>
```

## UI
ui provide class modifiers

### Btn
 @see https://seeren.github.io/ui-design/#button

### Card
 @see https://seeren.github.io/ui-design/#card

### Color
Colors from material [color palette](https://material.io/guidelines/style/color.html#color-color-palette) is present for color and background-color.
```html
class="ui purple-50 bg-purple-900"
```

### Dialog
 @see https://seeren.github.io/ui-design/#dialog

## Tests
Run `npm test`
```
./node_modules/.bin/mocha --require babel-register --recursive test/unit
```
Run `npm run coverage`
```
./node_modules/.bin/cross-env NODE_ENV=test ./node_modules/.bin/nyc ./node_modules/.bin/mocha --recursive test/unit
```

##  Contributors
* [@seeren](https://github.com/seeren) - *Initial work*

## License
This project is licensed under the **MIT License** - see the [license](LICENSE) file for details.