PIGNOSE Tab
==


[![npm version](https://badge.fury.io/js/pg-tab.svg)](https://badge.fury.io/js/pg-tab) [![Bower version](https://badge.fury.io/bo/pg-tab.svg)](https://badge.fury.io/bo/pg-popup) [![Join the chat at https://gitter.im/KennethanCeyer/PIGNOSE](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/KennethanCeyer/PIGNOSE?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

----

- [See demo](http://www.pigno.se/barn/PIGNOSE-Tab/)
 
Web accessibility be supported a responsible tab plugin.
 
![Screenshot Main](http://www.pigno.se/barn/PIGNOSE-Tab/demo/img/screenshot_main.png)

- This plugin supports the ```web accessibility``` perfectly
- And also supports CSS animation.
- You can choice themes very easily.

## Getting started

### Overview

1. Normal Tab
2. Sub Tab
3. Multiple depth Tab
4. Article Tab
5. Styled Tab
6. Response Tab
7. Mobile Tab

### Installation

1. Download or Clone this repository.
2. Import `jquery.js 1.11.x higher`, `dist/pignose.tab.min.js`, and `dist/pignose.tab.min.css` in your head element.

 ```html
<link rel="stylesheet" href="dist/pignose.tab.min.css" />
<script type="text/javascript" src="demo/js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="dist/pignose.tab.min.js"></script>
 ```
3. Insert a snippet code as follows.

 ```javascript
 $({selector}).pignoseTab();
 ```

### Options

| Option           | Default      | Values                    | Description                                           |
|:--------------------|:-------------|:--------------------------|:------------------------------------------------------|
| callback        | null         | function                  | If tab button is clicked, this callback will called.    |
| animation       | static       | static, true, false       | You can trun on/off animation to set this property, false mean `static`. |
| children        | string       | .sub-tab                  |	If you use sub tab, you need to choose children's class name. |
| animationTime   | 300          | Millisecond time          | This option can set animation time. ```(ms)``` |
| animationEasing |easeInOutCubic| Easing names              | You can use jQuery animation easing. |

----

### Question

If you found something problem of this plugin, or you have some question.

Please send me a message to use either [gitter](https://gitter.im/KennethanCeyer/PIGNOSE) or [Github issue](https://github.com/KennethanCeyer/PIGNOSE-Tab/issues). (gitter url is on the top of the manual)
