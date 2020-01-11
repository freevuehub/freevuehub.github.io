---
layout: post
title: 'createElement'
categories: [Function]
image: assets/images/function/29/carbon.png
tag: [매일함수, createElement, javascript]
---

createElement. 문자열에 요소를 추가합니다 (문서에 추가하지 않고). 지정된 캐릭터 라인에 복수의 요소가있는 경우, 최초의 요소 만이 리턴됩니다.

document.createElement()를 사용하여 새 요소를 만듭니다. innerHTML을 인수로 제공된 문자열로 설정합니다. ParentNode.firstElementChild를 사용하여 문자열의 요소 버전을 반환합니다.

```javascript
const createElement = (str) => {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.firstElementChild
}

// 예시
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`,
)
console.log(el.className) // 'container'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
