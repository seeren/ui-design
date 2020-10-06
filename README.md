
<p align="center">
  <a href="https://seeren.github.io/ui-design">
    <img src="https://raw.githubusercontent.com/seeren/ui-design/master/resources/images/ui-design.png" alt="ui-design"/>
  </a>
</p>

___

<h3 align="center">
  Material and Mobile First Helper
</h3>

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

<p align="center">
This helper set is useful to build layout or canvas presentation, it do not include pre build component and provide fundamental css rules.
</p>

___

## Installation

```bash
npm install ui-design
```

*scss*

```scss
@import "~ui-design/src/index.scss";
```

*css*

```css
@import "./node_modules/ui-design/dist/ui-design.css";
```

*html*

```html
<link rel="stylesheet" href="./node_modules/ui-design/dist/ui-design.css">
```
___

## Features

* [Alignment](#align)
* [Card](##card)
* [Color](#color)
* [Display](#display)
* [Font](#font)
* [Gride](#gride)
* [Position](#position)
* [Spacing](#spacing)

___

<a id="align"></a>

## 🔖  Align

* `flex-[start|center|end]-[start|center|end][-[sm|md|lg|xl]]`

```html
<p class="flex-center-center">
  Align center horizontally and vertically
</p>
```

* `left|center|right|justify[-[sm|md|lg|xl]]`

```html
<p class="center left-sm">
  Align center or left on small screen
</p>
```

* `v-[middle|top|bottom][-[sm|md|lg|xl]]`

```html
<p class="v-middle v-top-sm">
  Align middle or top on small screen
</p>
```

___

<a id="card"></a>

## 🔖 Card

`card-[0-24]`

```html
<p class="card-7">
  Card with box shadow 7
</p>
```

___

<a id="color"></a>

## 🔖 Color

* `red|pink|purple|deep-purple|indigo|blue|light-blue|cyan|teal|green|light-green|lime|yellow|amber|orange|deep-orange-[50|100|200|300|400|500|600|700|800|900|a100|a200|a400|a700]`

```html
<p class="indigo-50">
  Color indigo 50
</p>
```

* `brown|grey|blue-grey-[50|100|200|300|400|500|600|700|800|900]`

```html
<p class="grey-50">
  Color grey 50
</p>
```

* `hover-[color]`

```html
<p class="hover-indigo-50">
  Color indigo 50 on hover
</p>
```

* `bg-[color]`

```html
<p class="bg-indigo-50">
  Background indigo 50
</p>
```

* `bg-hover-[color]`

```html
<p class="bg-hover-indigo-50">
  Background indigo 50 on hover
</p>
```

___

<a id="display"></a>

## 🔖 Display

* `flex|block|inline|inline-block|none[-[sm|md|lg|xl]]`

```html
<p class="none block-sm">Display none or block on small screen</p>
```

* `inline-block[-[sm|md|lg|xl]] fix[-[sm|md|lg|xl]]`

```html
<p class="inline-block-sm">Display inline-block on small screen</p>
```

* `fix[-[sm|md|lg|xl]]`

```html
<p class="inline-block-sm fix-sm">
  Display inline-block without trailing space on small screen
</p>
```

___

<a id="font"></a>

## 🔖 Font

* `font[-[sm|md|lg|xl]]-[1-6][-[25|5|75]]`

```html
<p class="font-1 font-sm-2-25">
  Font size 1 or 2.25 rem on small screen
</p>
```

* `[roboto|segoe|georgia|monospace]`

```html
<p class="segoe">
  Font family segoe
</p>
```

* `font-[thin|extra-light|light|normal|medium|semi-bold|bold|extra-bold|black]`

```html
<p class="font-thin">
  Font weight thin
</p>
```

* `hyphens|word-break|txt-scroll|ellipsis`

```html
<p class="hyphens">
  Font cesure hyphens
</p>
```

* `pointer|initial`

```html
<p class="pointer">
  Cursor pointer
</p>
```

___

<a id="gride"></a>

## 🔖 Gride

* `w|flex-w|w-auto|w-min|w-max|vw|flex-vw|vw-min|vw-max[-[sm|md|lg|xl]][1-12]`

```html
<p class="w-12 w-6-sm">
  Width 100% or 50% on small screen
</p>
```

* `h|h-auto|h-min|h-max|vh|flex-vh|vh-min|vh-max[-[sm|md|lg|xl]][1-12]`

```html
<p class="h-12 h-6-sm">
  Height 100% or 50% on small screen
</p>
```

___

<a id="position"></a>

## 🔖 Position

* `z-[1-10]`

```html
<p class="z-9">
  Z index 9
</p>
```

* `overflow[-[x|y]]-[auto|hidden|scroll]`

```html
<p class="overflow-x-hidden">
  Overflow x hidden
</p>
```

* `static|relative|absolute|fixed[-[sm|md|lg|xl]]`

```html
<p class="absolute relative-sm">
  Position absolute or relative on small screen
</p>
```

* `left|top|right|bottom[-[sm|md|lg|xl]]-[1-12]`

```html
<p class="left-0 left-sm-6">
  Left 0% or 50% on small screen
</p>
```

___

<a id="spacing"></a>

## 🔖 Spacing

* `wrap|nowrap[-[sm|md|lg|xl]]`

```html
<p class="flex wrap nowrap-sm">
  Flex wrap or no wrap on small screen
</p>
```

* `grow|nogrow[-[sm|md|lg|xl]]`

```html
<p class="flex grow nogrow-sm">
  Flex grow or no grow on small screen
</p>
```

* `shrink|noshrink[-[sm|md|lg|xl]]`

```html
<p class="flex shrink noshrink-sm">
  Flex shrink or no shrink on small screen
</p>
```

* `offset[-[r|t|b]][-[sm|md|lg|xl]]-[1-12]`

```html
<p class="offset-6 offset-sm-12">
  Offset left 50% or 100% on small screen
</p>
```

* `m|ml|mt|mr|mb[-[sm|md|lg|xl]]-[1-12]`

```html
<p class="m-4 m-sm-8">
  Margin .5em or 1em on small screen
</p>
```

* `p|pl|pt|pr|pb[-[sm|md|lg|xl]]-[1-12]`

```html
<p class="p-4 p-sm-8">
  Padding .5em or 1em on small screen
</p>
```

* `box[-[sm|md|lg|xl]]`

```html
<p class="box-sm">
  Border box on small screen
</p>
```

___

## 🎫 License
This project is licensed under the [MIT](LICENSE) License




