---
layout: post
title:  "매일 함수"
date:   2019-04-12
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// getStyle
// 지정된 요소에 대한 CSS 규칙 값을 반환합니다.
//
// Window.getComputedStyle()을 사용하여 지정된 요소에 대한 CSS 규칙 값을 가져옵니다.

const getStyle = (el, rulName) => getComputedStyle(el)[rulName];

// 예시
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190412.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
