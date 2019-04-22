---
layout: post
title:  "어제 함수"
date:   2019-04-11
excerpt: "지나간 함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// intersectionWith
// 제공된 비교 함수를 사용하여 두 배열에 있는 요소의 목록을 반환합니다.
//
// 제공된 비교 자와 함께 Array.filter() 및 Array.findIndex()를 사용하여 교차 값을 결정합니다.

const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

// 예시
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190411.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
