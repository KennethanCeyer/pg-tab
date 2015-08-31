PIGNOSE Tab
==
* Version 2.0.0
* Update Jul 11 2014
* [See demo](http://kennethan.dothome.co.kr/barn/PIGNOSE-Tab/demo.html)

> **PIGNOSE Tab IS** <br />
> This plugin support ```accessibility``` perfectly. <br />
> And also support animation. <br />
> You can choose color theme easily for those plugin.

Getting start
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
1. Download the ```Pignose Tab``` plugin
2. Import ```jquery-1.11.0.js``` and ```jquery.PignoseTab.js``` on your html documents <br />

 ```html
<script type="text/javascript" src="assets/js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="assets/js/jquery.pignoseTab.min.js"></script>
 ```
3. Insert jQuery code lines. <br />

 ```javascript
 $(jQuery Selector).pignoseTab();
 ```

Settings
----
####options
| Attribute           | Default      | Values                    | Description                                           |
|:--------------------|:-------------|:--------------------------|:------------------------------------------------------|
| callback        | null         | function                  | If tab button clicked, this function will called.    |
| animation       | static       | static, true, false       | Switch for animation, ```static``` has same mean of ```false```     |
| animationTime   | 300          | Millisecond time          | This attribute support animation time ```(ms)``` |
| animationEasing |easeInOutCubic| Easing names              | You can use jQuery animation easing. |

