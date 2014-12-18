PIGNOSE Tab
==
* Version 2.0.0
* Update Dev 10 2014
* [Show demo](http://kennethan.dothome.co.kr/barn/PIGNOSE-Tab/demo.html)

> `Pignose Tab` would be helping to make to complecate tab structures easily with html

Pignose support many type tabs, please see the exhibition.
1. Normal Tab
2. Sub Tab
3. Four depth Tab (added version 2.0)
4. Article Tab
5. Styled Tab
6. Response Tab
7. Mobile Tab (added version 1.4)

#### Getting Start
1. Download <b>Pignose Tab</b> plugin
2. Import <b>jquery-1.11.0.js</b> and <b>jquery.PignoseTab.js</b> on your html documents
3. Insert js inline ```$(jQuery Selector).pignoseTab();```

## Settings
> Pignose support tab animation

| Attribute           | Default      | Values                    | Description                                           |
|:--------------------|:-------------|:--------------------------|:------------------------------------------------------|
| **callback**        | null         | function                  | If tab button clicked, this function called always    |
| **animation**       | static       | static, true, false       | Switch to use animation, `static` is same `false`     |
| **animationTime**   | 300          | Millisecond time          | If you use animation, this can control animation time |
| **animationEasing** |easeInOutCubic| Easing names              | If you use animation, this can control animation motion easing, but it need easing plugin to be use, If you not, that use linear easing by default |
