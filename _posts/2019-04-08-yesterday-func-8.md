---
layout: post
title:  "매일 함수"
date:   2019-04-08
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// objectToPairs
// 객체에서 키 - 값 썅 배열의 배열을 만듭니다.
//
// Object.keys() 및 Array.map()을 사용하여 객체의 키를 반복하소 키 - 값 쌍이 있는 배열을 생성합니다.

const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

// 예시
objectToPairs({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190408.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
