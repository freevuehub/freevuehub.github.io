---
layout: post
title: 'elementContains'
categories: [Function]
image: assets/images/function/0/20190410.png
tag: [매일함수, elementContains, javascript]
---

elementContains. 부모 요소가 자식 요소를 포함하면 true를 반환하고 그렇지 않으면 false를 반환합니다. 부모가 자식 요소와 같은 요소가 아닌지 확인하고 parent.contains (child)를 사용하여 부모 요소에 자식 요소가 있는지 확인합니다.

```javascript
const elementContains = (parent, child) => parent !== child && parent.contains(child)

// 예시
elementContains(document.querySelector('head'), document.querySelector('title')) // true
elementContains(document.querySelector('head'), document.querySelector('body')) // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
