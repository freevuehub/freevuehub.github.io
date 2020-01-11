---
layout: post
title: 'partition'
categories: [Function]
image: assets/images/function/32/carbon.png
tag: [매일함수, partition, javascript]
---

partition. 각 요소에 대해 제공된 함수의 진실성에 따라 요소를 두 개의 배열로 그룹화합니다.

Array.reduce()를 사용하여 두 배열의 배열을 만듭니다. Array.push()를 사용하여 fn이 true를 반환하는 요소를 첫 번째 배열에 추가하고 fn이 두 번째 배열에 false를 반환하는 요소를 추가합니다.

```javascript
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val)
      return acc
    },
    [[], []],
  )

// 예시
const users = [
  {user: 'barney', age: 36, active: false},
  {user: 'fred', age: 40, active: true},
]
partition(users, (o) => o.active) // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
