---
layout: post
title:  "매일 함수"
date:   2019-04-13
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// isBrowserTabFocused
// 페이지의 브라우저 탭에 포커스가 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다.
//
// 페이지 가시성 API에서 도입 된 Document.hidden 속성을 사용하여 페이지의 브라우저 탭이 표시되는지 또는 숨겨 지는지 확인합니다.

const isBrowserTabFocused = () => !document.hidden;
// 예시
isBrowserTabFocused(); // true
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190413.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
