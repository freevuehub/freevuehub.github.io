---
layout: post
title: 'matches'
categories: [Function]
image: assets/images/function/0/20190326.jpeg
tag: [매일함수, matches, javascript]
---

matches. 두 객체를 비교하여 첫번째 객체가 두번째 객체와 동일한 속성 값을 포함하는지 확인합니다.

Object.keys(source)를 사용하여 두번째 객체의 모든 키를 얻은 다음 Array.every(), Object.hasOwnProperty() 및 엄격한 비교를 수행하여 모든 키가 첫번째 객체에 존재하고 동일한 값을 갖는지 확인합니다.

```javascript
const matches = (obj, source) =>
  Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])

// 예시
matches({age: 25, hair: 'long', bread: true}, {hair: 'long', bread: true}) // true
matches({hair: 'long', bread: true}, {age: 25, hair: 'long', bread: true}) // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
