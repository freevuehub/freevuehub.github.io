---
layout: post
title: 'matchesWith'
categories: [Function]
image: assets/images/function/0/20190325.jpeg
tag: [매일함수, matchesWith, javascript]
---

matchesWith. 두 객체를 비교하여 첫번째 객체가 제공된 함수를 기반으로 두번째 객체와 동일한 속성 값을 포함하는지 확인합니다.

Object.keys(source)를 사용하여 두번째 객체의 모든 키를 가져온 다음 Array.every(), Object.hasOwnProperty() 및 제공된 함수를 하용하여 모든 키가 첫번째 객체에 존재하는지 확인하고 동일한 값을 갖는지 확인합니다. 함수가 제공되지 않으면 항등 연산자를 사용하여 값을 비교합니다.

```javascript
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] === source[key],
  )

//예시
const isGreeting = (val) => /^h(?:i|ello)$/.test(val)
matchesWith({greeting: 'hello'}, {greeting: 'hi'}, (oV, sV) => isGreeting(oV) && isGreeting(sV)) // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
