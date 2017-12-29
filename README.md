 [![Build Status](https://travis-ci.org/seeren/ui-design.svg?branch=master)](https://travis-ci.org/seeren/ui-design)  [![Coverage Status](https://coveralls.io/repos/github/seeren/ui-design/badge.svg?branch=master)](https://coveralls.io/github/seeren/ui-design?branch=master) [![npm](https://img.shields.io/npm/dt/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e933f03e70a34c7bbd45a31f521f3b02)](https://www.codacy.com/app/seeren/ui-design?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=seeren/ui-design&amp;utm_campaign=Badge_Grade) [![npm](https://img.shields.io/npm/v/ui-design.svg)](https://www.npmjs.com/package/ui-design) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# ui-design
**Build material and mobile first interface**

Open source library for developing with HTML, SASS and JavaScript. Fix your design with classes, variables and mixins, program components with grid system, material colors, elevations and buttons.

## Documentation
@see [https://seeren.github.io/ui-design/](https://seeren.github.io/ui-design/)

## Installation
Install with [npm](https://www.npmjs.com/package/ui-design).
```
npm install ui-design
```
```html
<link rel="stylesheet" type="text/css" href="./node_modules/ui-design/dist/ui-design.css" />
```
```html
<script type="text/javascript" src="./node_modules/ui-dialog/dist/ui-design.js"></script>
```

## Usage
> Features use HTMLElement class attribute value or script instruction.

### [Button](https://seeren.github.io/ui-design/#button)
Button type can be flat, raised or floating. Each type can be disabled, primary, link or colored whereas floating button can have action with icons.

```js
ui btn [btn-{raised|floating}] [btn-{primary|link}] [disabled]
```
```js
// Color
ui btn btn-{emergency|alert|critical|error|warning|notice|info|debug|cure|restore|reset|hazard|tilt}
```
```js
// Action
ui btn btn-floating btn-{add|less|close|right|left|refresh|nav|v-elipsis|elipsis|pencil|mail|position|clock}
```

### [Card](https://seeren.github.io/ui-design/#card)
Card represent a container that can be elevated for 24 depth.

```js
ui card card-{[0,24]}
```
### [Color](https://seeren.github.io/ui-design/#color)
About 19*10 color and background-color available.

```js
ui [bg-]{red|pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|light-green|lime|yellow|ambre|orange|deep-orange|brown|grey|blue-gray}-{50|100|200|300|400|500|600|700|800|900}
```

### [Dialog](https://seeren.github.io/ui-design/#dialog)
Component for display simple message, confirmation, cancellation or different combinaison allow to dialog and listen user choices.

```js
ui.dialog.{emergency|alert|critical|error|warning|notice|info|debug}([title, ]message);
```
```js
// Event
ui.dialog
  .onabort([callback])
  .onconfirm([[btn_text, ]callback])
  .oncancel([[btn_text, ]callback]);
```
### [Gride](https://seeren.github.io/ui-design/#gride)
Gride system on classique verbose to display inline and align on vertice. Width, min, max, offset and height can be applied for breakpoints.

```js
// Column
ui col-[{min|max}-][{xs|sm|md|lg|xl}-]{[0,12]}
```
```js
// Offset
ui col-offset-[{xs|sm|md|lg|xl}-]{[0,12]}
```
```js
// Vertical
ui col-v-[{min|max}-][{xs|sm|md|lg|xl}-]{[0,12]}
```

### [Wave](https://seeren.github.io/ui-design/#wave)
Elements can have a wave background on mousedown based on the targeted rules.

```js
ui btn wave [wave-{right|left}}
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
[@seeren](https://github.com/seeren)

## License
This project is licensed under the [MIT License](LICENSE).