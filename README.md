PIGNOSE Tab
==

* [Check demo page](http://www.pigno.se/barn/PIGNOSE-Tab/)
 
![PIGNOSE Tab Sample](http://www.pigno.se/barn/PIGNOSE-Tab/assets/image/sample.jpg)

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
2. Import ```jquery-1.11.0.js``` and ```pignose.tab.js``` on your html documents.

 ```html
<script type="text/javascript" src="assets/js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="assets/js/pignose.tab.js"></script>
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
