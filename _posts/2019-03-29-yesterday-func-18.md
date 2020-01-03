---
layout: post
title: 'isPrimitive'
categories: [Function]
image: assets/images/function/0/20190329.png
tag: [매일함수, isPrimitive, javascript]
---

isPrimitive. 건네받은 값이 프리미티브 (primitive)인지 어떤지를 판정하는 boolean를 돌려줍니다. 프리미티브가 아닌 유형 문자열의 배열에 대하 Array.includes()를 돌려줍니다.
typeof를 사용하여 유형을 제공합니다. typeof null은 'object'로 평가되므로 직접 비교해야합니다.

```javascript
const isPrimitive = (val) => !['object', 'function'].includes(typeof val) || val === null

// 예시
isPrimitive(null) // true
isPrimitive(50) // true
isPrimitive('Hello!') // true
isPrimitive(false) // true
isPrimitive(symbol()) // true
isPrimitive([]) // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
