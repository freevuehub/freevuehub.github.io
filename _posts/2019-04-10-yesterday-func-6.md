---
layout: post
title:  "매일 함수"
date:   2019-04-10
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// elementContains
// 부모 요소가 자식 요소를 포함하면 true를 반환하고 그렇지 않으면 false를 반환합니다.
//
// 부모가 자식 요소와 같은 요소가 아닌지 확인하고 parent.contains (child)를 사용하여 부모 요소에 자식 요소가 있는지 확인합니다.

const elementContains = (parent, child) => parent !== child && parent.contains(child);

// 예시
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('head'), document.querySelector('body')); // false
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190410.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
