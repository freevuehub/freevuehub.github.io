---
layout: post
title: 'intersectionWith'
categories: [Function]
image: assets/images/function/0/20190411.png
tag: [매일함수, intersectionWith, javascript]
---

intersectionWith. 제공된 비교 함수를 사용하여 두 배열에 있는 요소의 목록을 반환합니다. 제공된 비교 자와 함께 Array.filter() 및 Array.findIndex()를 사용하여 교차 값을 결정합니다.

```javascript
const intersectionWith = (a, b, comp) => a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1)

// 예시
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)) // [1.5, 3, 0]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
