---
layout: post
title: 'symmetricDifferenceBy'
categories: [Function]
image: assets/images/function/24/carbon.png
tag: [매일함수, symmetricDifferenceBy, javascript]
---

symmetricDifferenceBy. 두 함수의 각 배열 요소에 제공된 함수를 적용한 후 두 배열 간의 대칭 차이를 반환합니다.

각 배열의 요소에 fn을 적용한 집합을 만든 다음 각 배열의 요소에 Array.filter()를 사용하여 다른 배열에 포함되지 않은 값만 유지합니다.

```javascript
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map((v) => fn(v))),
    sB = new Set(b.map((v) => fn(v)))
  return [...a.filter((x) => !sB.has(fn(x))), ...b.filter((x) => !sA.has(fn(x)))]
}

// 예시
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [ 1.2, 3.4 ]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
