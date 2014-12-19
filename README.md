PIGNOSE Tab
==
* Version 2.0.0
* Update JUL 11 2014
* [Show demo](http://kennethan.dothome.co.kr/barn/PIGNOSE-Tab/demo.html)

> `Pignose Tab` would be helping to make to complecate tab structures easily with html

#### Overview
1. Normal Tab
2. Sub Tab
3. Four depth Tab (added version 2.0)
4. Article Tab
5. Styled Tab
6. Response Tab
7. Mobile Tab (added version 1.4)

#### Getting Start
1. Download ```Pignose Tab``` plugin
2. Import ```jquery-1.11.0.js``` and ```jquery.PignoseTab.js``` on your html documents
```html
<script type="text/javascript" src="assets/js/jquery-1.11.0.js"></script>
<script type="text/javascript" src="assets/js/jquery.pignoseTab.min.js"></script>
```

3. Insert jQuery code line.
 ```javascript
 $(jQuery Selector).pignoseTab();
 ```

## Settings
> Pignose support tab animation

| Attribute           | Default      | Values                    | Description                                           |
|:--------------------|:-------------|:--------------------------|:------------------------------------------------------|
| callback        | null         | function                  | If tab button clicked, this function will called.    |
| animation       | static       | static, true, false       | Switch for animation, ```static``` has same mean of ```false```     |
| animationTime   | 300          | Millisecond time          | This attribute support animation time ```(ms)``` |
| animationEasing |easeInOutCubic| Easing names              | You can use jQuery animation easing. |

