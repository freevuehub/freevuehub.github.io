---
layout: post
title: 'objectToPairs'
categories: [Function]
image: assets/images/function/0/20190408.png
tag: [매일함수, objectToPairs, javascript]
---

objectToPairs. 객체에서 키 - 값 썅 배열의 배열을 만듭니다.

Object.keys() 및 Array.map()을 사용하여 객체의 키를 반복하소 키 - 값 쌍이 있는 배열을 생성합니다.

```javascript
const objectToPairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]])

// 예시
objectToPairs({a: 1, b: 2}) // [['a', 1], ['b', 2]]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
