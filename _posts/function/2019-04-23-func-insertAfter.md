---
layout: post
title: 'insertAfter'
categories: [Function]
image: assets/images/function/8/carbon.png
tag: [매일함수, insertAfter, javascript]
---

insertAfter. 지정된 요소의 끝 뒤에 HTML 문자열을 삽입합니다.

el.insertAdjacentHTML()을 'afterend'위치로 사용하여 htmlString을 파싱하고 el의 끝 뒤에 삽입합니다.

```javascript
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString)

// 예시
insertAfter(document.getElementById('myId'), '<p>after</p>') // <div id="myId">...</div> <p>after</p>
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
