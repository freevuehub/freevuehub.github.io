---
layout: post
title: 'isBrowserTabFocused'
categories: [Function]
image: assets/images/function/0/20190413.png
tag: [매일함수, isBrowserTabFocused, javascript]
---

isBrowserTabFocused. 페이지의 브라우저 탭에 포커스가 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다. 페이지 가시성 API에서 도입 된 Document.hidden 속성을 사용하여 페이지의 브라우저 탭이 표시되는지 또는 숨겨 지는지 확인합니다.

```javascript
const isBrowserTabFocused = () => !document.hidden
// 예시
isBrowserTabFocused() // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
