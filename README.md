#####################################################################################################################
# PIGNOSE Tab

## Description
`Pignose Tab` would be helping to make to complecate tab structures easily with html
This plugin's lastest version is `2.0`


Pignose support many type tabs, please see the exhibition.
+ Normal Tab
+ Sub Tab
+ Four depth Tab (added version 2.0)
+ Article Tab
+ Styled Tab
+ Response Tab
+ Mobile Tab (added version 1.4)

## Installation
1. Download <b>Pignose Tab</b> plugin
2. Import <b>jquery-1.11.0.js</b> and <b>jquery.PignoseTab.js</b> on your html documents
3. Insert js inline ```$(jQuery Selector).pignoseTab();```

## Settings
> Pignose support tab animation

| Attribute       | Default      | Values                          | Description                                           |
|:----------------|:-------------|:--------------------------------|:------------------------------------------------------|
| callback        | null         | function                        | If tab button clicked, this function called always    |
| animation       | static       | static, true, false             | Switch to use animation, `static` is same `false`     |
| animationTime   | 300          | Millisecond time                | If you use animation, this can control animation time |
| animationEasing |easeInOutCubic| Easing names                    | If you use animation, this can control animation motion easing, but it need easing plugin to be use, If you not, that use linear easing by default |
