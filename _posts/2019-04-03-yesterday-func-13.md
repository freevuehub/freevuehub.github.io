---
layout: post
title:  "매일 함수"
date:   2019-04-03
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// hide
// 지정된 모든 요소를 숨깁니다.
//
// spread 연산자 (...) 및 Array.forEach()를 사용하여 지정된 각 요소에 display: none을 적용합니다.

const hide = (...el) => [...el].forEach(e => e.style.display = 'none');

// 예시
hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190403.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
