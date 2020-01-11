---
layout: post
title: 'mapValues'
categories: [Function]
image: assets/images/function/28/carbon.png
tag: [매일함수, mapValues, javascript]
---

mapValues. 제공된 객체와 동일한 키를 가진 객체와 각 값에 대해 제공된 함수를 실행하여 생성 된 값을 만듭니다.

Object.keys(obj)를 사용하여 객체 키를 반복합니다. Array.reduce()를 사용하여 fn을 사용하여 동일한 키와 매핑 된 값으로 새 객체를 만듭니다.

```javascript
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj)
    return acc
  }, {})

// 예시
const users = {
  fred: {user: 'fred', age: 40},
  pebbles: {user: 'pebbles', age: 1},
}
mapValues(users, (u) => u.age) // { fred: 40, pebbles: 1 }
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
