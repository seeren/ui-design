 [![Build Status](https://travis-ci.org/seeren/ui-design.svg?branch=master)](https://travis-ci.org/seeren/ui-design)  [![Coverage Status](https://coveralls.io/repos/github/seeren/ui-design/badge.svg?branch=master)](https://coveralls.io/github/seeren/ui-design?branch=master) [![npm](https://img.shields.io/npm/dt/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e933f03e70a34c7bbd45a31f521f3b02)](https://www.codacy.com/app/seeren/ui-design?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=seeren/ui-design&amp;utm_campaign=Badge_Grade) [![npm](https://img.shields.io/npm/v/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# ui-design
**Build material and mobile first interface with a simple toolkit**

## Demo

* [https://seeren.github.io/ui-design/](https://seeren.github.io/ui-design/)


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

# Usage
ui provide class modifiers

## Button
 * [@see #button](https://seeren.github.io/ui-design/#button)

Type
```
ui btn [btn-{raised|floating}] [disabled]
```
Level
```
ui btn [btn-flat|btn-floating] btn-{primary|link}
```
Color
```
ui btn [btn-flat|btn-floating] btn-{emergency|alert|critical|error|warning|notice|info|debug|cure|restore|reset|hazard|poison}
```
Action
```
ui btn tn-floating btn-{add|less|close|right|left|refresh|nav|v-elipsis|elipsis|pencil|mail|position|clock}
```

## Card
 * [@see #card](https://seeren.github.io/ui-design/#card)

Dp
```
ui card-{[0,24]}
```
## Color

 * [@see material color palette](https://material.io/guidelines/style/color.html#color-color-palette)

Color & Background
```
ui [bg-]{red|pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|light-green|lime|yellow|ambre|orange|deep-orange|brown|grey|blue-gray}-{[0-900]}
```

## Dialog
 * [@see #dialog](https://seeren.github.io/ui-design/#dialog)

Level
```
ui.dialog.{emergency|alert|critical|error|warning|notice|info|debug}([title, ]message);
```
Event
```
ui.dialog.onabort([callback])
         .onconfirm([btn_text, ]callback)
         .oncancel([btn_text, ]callback);
```
## Gride
 * [@see #gride](https://seeren.github.io/ui-design/#gride)

Column
```
ui col-[{min|max}-][{xs|sm|md|lg|xl}-]{[0-12]}
```
Vertical
```
ui col-v-[{min|max}-][{xs|sm|md|lg|xl}-]{[0-12]}
```

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