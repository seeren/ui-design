
<p align="center">
  <a href="https://seeren.github.io/ui-design">
    <img src="https://raw.githubusercontent.com/seeren/ui-design/master/resources/ui-design.png" alt="ui-design"/>
  </a>
</p>
<h4 align="center">
  Material and Mobile First Helper
</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/ui-design">
    <img src="https://img.shields.io/npm/dt/ui-design.svg">
  </a>
  <a href="https://www.codacy.com/app/seeren/ui-design?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=seeren/ui-design&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/e933f03e70a34c7bbd45a31f521f3b02">
  </a>
  <a href="https://www.npmjs.com/package/ui-design">
    <img src="https://img.shields.io/npm/v/ui-design.svg">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p >

## Installation

```bash
npm install ui-design
```

Helper for build components with fundamentals rules. Layout oriented the library provide [alignment](#align), [card](##card), [color](#color), [display](#display), [font](#font), [gride](#gride), [position](#position) and [spacing](#spacing) rules.

___

## Usage

SCSS usage

```scss
@import "~ui-design/src/index.scss";
```

CSS usage

```css
@import "./node_modules/ui-design/dist/ui-design.css";
```

HTML usage

```html
<link rel="stylesheet" type="text/css" href="./node_modules/ui-design/dist/ui-design.css" />
```

___

## Documentation

Classes provided are exposed here.

<a id="align"></a>

### **Align**

* Text

`[left|center|right|justify]`

```html
<p class="center">Center</p>
```

* Vertical

`v-[middle|top|bottom]`

```html
<p class="v-middle">Middle</p>
```

<a id="card"></a>

### **Card**

`card-[0-24]`

```html
<p class="card-7">Card</p>
```

<a id="color"></a>

### **Color**

* Font

`[red||pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|light-green|lime|yellow|amber|orange|deep-orange]-[50|100|200|300|400|500|600|700|800|900|a100|a200|a400|a700]`

```html
<p class="indigo-50">Indigo</p>
```

`[brown|grey|blue-grey]-[50|100|200|300|400|500|600|700|800|900]`

```html
<p class="grey-50">Grey</p>
```

* Font hover

`hover-[color]`

```html
<p class="hover-indigo-100">Indigo hover</p>
```

* Background

`bg-[color]`

```html
<p class="bg-indigo-50">Background indigo</p>
```

* Background hover

`bg-hover-[color]`

```html
<p class="bg-hover-indigo-100">Background indigo hover</p>
```

<a id="display"></a>

### **Display**

`[block|inline|inline-block|none][-[sm|md|lg|xl]]`

```html
<p class="none block-sm">None or block on small</p>
```

`inline-block[-[sm|md|lg|xl]] fix[-[sm|md|lg|xl]]`

```html
<p class="inline-block fix-sm">Inline block without space on small screen</p>
```

<a id="font"></a>

### **Font**

* Size

`font[-[sm|md|lg|xl]]-[1-6][-[25|5|75]]`

```html
<p class="font-1 font-lg-2-25">Size 2.25 on large screen</p>
```

* Family

`[roboto|segoe|georgia|monospace]`

```html
<p class="segoe">Family segoe</p>
```

* Weight

`font-[thin|extra-light|light|normal|medium|semi-bold|bold|extra-bold|black]`

```html
<p class="font-thin">Weight thin</p>
```

* Cesure

`[hyphens|word-break|txt-scroll|ellipsis]`

```html
<p class="hyphens">Cesure hyphens</p>
```

* Cursor

`[pointer|initial]`

```html
<p class="pointer">Cursor pointer</p>
```

<a id="gride"></a>

### **Gride**

* Width

`[w|w-auto|w-min|w-max|vw|vw-min|vw-max][-[sm|md|lg|xl]]`

```html
<p class="w-12 w-6-sm">Width 100% or 50% on small screen</p>
```

* Height

`[h|h-auto|h-min|h-max|vh|vh-min|vh-max][-[sm|md|lg|xl]]`

```html
<p class="h-12 h-6-sm">Height 100% or 50% on small screen</p>
```

<a id="position"></a>

### **Position**

* Z-index

`z-[1-10]`

```html
<p class="z-9">Z index 9</p>
```

* Overflow

`overflow[-[x|y]]-[auto|hidden|scroll]`

```html
<p class="overflow-x-hidden">Overflow x hidden</p>
```

* Position

`[static|relative|absolute|fixed][-[sm|md|lg|xl]]`

```html
<p class="absolute relative-sm">Position absolute or relative on small screen x hidden</p>
```

* Sides

`[left|top|right|bottom][-[sm|md|lg|xl]]-[1-12]`

```html
<p class="left-6 left-sm-12">Left 50% or 100% on small screen</p>
```

<a id="spacing"></a>

### **Spacing**

* Offset

`offset[-[r|t|b]][-[sm|md|lg|xl]]-[1-12]`

```html
<p class="offset-6 offset-sm-12">Offset left 50% or 100% on small screen</p>
```

* Margin

`[m|ml|mt|mr|mb][-[sm|md|lg|xl]]-[1-12]`

```html
<p class="m-6 m-sm-12">Margin 50% or 100% on small screen</p>
```

* Padding

`[p|pl|pt|pr|pb][-[sm|md|lg|xl]]-[1-12]`

```html
<p class="p-6 p-sm-12">Padding 50% or 100% on small screen</p>
```

___

## 🎫 License
This project is licensed under the [MIT](LICENSE) License




