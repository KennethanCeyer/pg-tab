PIGNOSE Tab
==


[![npm version](https://badge.fury.io/js/pg-tab.svg)](https://badge.fury.io/js/pg-tab) [![Bower version](https://badge.fury.io/bo/pg-tab.svg)](https://badge.fury.io/bo/pg-popup) [![Join the chat at https://gitter.im/KennethanCeyer/PIGNOSE](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/KennethanCeyer/PIGNOSE?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

----

* [Check demo page](http://www.pigno.se/barn/PIGNOSE-Tab/)
 
![PIGNOSE Tab Sample](http://www.nhpcw.com/upload/%25EB%258B%25A4%25EC%259A%25B4%25EB%25A1%259C%25EB%2593%259C%2B%25287%2529_032416020737.png)

- This plugin supports the ```web accessibility``` perfectly
- And also supports animation. <br />
- You can choose the color of theme very easily.

Getting started
----

#### Overview
1. Normal Tab
2. Sub Tab
3. Four depth Tab (added version 2.0)
4. Article Tab
5. Styled Tab
6. Response Tab
7. Mobile Tab (added version 1.4)

#### Installation
1. Download or clone this repository.
2. Import ```jquery-1.11.0.js``` and ```pignose.tab.min.js``` on your html documents.

 ```html
<script type="text/javascript" src="demo/js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="dist/js/pignose.tab.min.js"></script>
 ```
3. Insert jQuery code lines. <br />

 ```javascript
 $(jQuery Selector).pignoseTab();
 ```

Settings
----
####options
| Option           | Default      | Values                    | Description                                           |
|:--------------------|:-------------|:--------------------------|:------------------------------------------------------|
| callback        | null         | function                  | If tab button is clicked, this callback will called.    |
| animation       | static       | static, true, false       | You can trun on/off animation to set this property, false mean `static`. |
| children        | string       | .sub-tab                  |	If you use sub tab, you need to choose children's class name. |
| animationTime   | 300          | Millisecond time          | This option can set animation time. ```(ms)``` |
| animationEasing |easeInOutCubic| Easing names              | You can use jQuery animation easing. |

Question
----

If you have a question or you are in trouble of this plugin.

Please report to us, we can fix that quickly!
