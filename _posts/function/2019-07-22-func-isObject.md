---
layout: post
title: 'isObject'
categories: [Function]
image: assets/images/function/23/carbon.png
tag: [매일함수, isObject, javascript]
---

isObject. 건네받은 값이 객체인가 어떤가를 판정하는 불리언 값을 돌려줍니다.

Object 생성자를 사용하여 지정된 값에 대한 객체 래퍼를 만듭니다.
값이 null 또는 미정 도리의 경우, 빈 상태 (empty)의 객체를 작성해 돌려줍니다. Οtherwise, 주어진 값에 해당하는 유형의 객체를 반환합니다.

```javascript
const isObject = (obj) => obj === Object(obj)

// 예시
isObject([1, 2, 3, 4]) // true
isObject([]) // true
isObject(['Hello!']) // true
isObject({a: 1}) // true
isObject({}) // true
isObject(true) // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
