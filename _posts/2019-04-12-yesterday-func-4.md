---
layout: post
title: 'getStyle'
categories: [Function]
image: assets/images/function/0/20190412.png
tag: [매일함수, getStyle, javascript]
---

getStyle. 지정된 요소에 대한 CSS 규칙 값을 반환합니다. Window.getComputedStyle()을 사용하여 지정된 요소에 대한 CSS 규칙 값을 가져옵니다.

```javascript
const getStyle = (el, rulName) => getComputedStyle(el)[rulName]

// 예시
getStyle(document.querySelector('p'), 'font-size') // '16px'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
