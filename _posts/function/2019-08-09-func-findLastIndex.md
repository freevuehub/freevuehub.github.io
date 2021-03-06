---
layout: post
title: 'findLastIndex'
categories: [Function]
image: assets/images/function/40/carbon.png
tag: [매일함수, findLastIndex, javascript]
---

findLastIndex. 제공된 함수가 truey 값을 반환하는 마지막 요소의 인덱스를 반환합니다.

Array.map()을 사용하여 각 요소를 색인 및 값이있는 배열에 매핑하십시오. Array.filter()를 사용하여 fn이 false 값을 반환하는 요소를 제거하고 Array.pop()을 사용하여 마지막 값을 가져옵니다.

```javascript
const findLastIndex = (arr, fn) =>
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0]

// 예시
findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1) // 2 (index of the value 3)
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
