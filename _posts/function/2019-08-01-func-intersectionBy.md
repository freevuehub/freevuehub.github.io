---
layout: post
title: 'intersectionBy'
categories: [Function]
image: assets/images/function/33/carbon.png
tag: [매일함수, intersectionBy, javascript]
---

intersectionBy. 두 배열의 각 배열 요소에 제공된 함수를 적용한 후 두 배열에있는 요소의 목록을 반환합니다.

b의 모든 요소에 fn을 적용한 다음 Set에 Array.filter()를 사용하면 fn이 적용될 때 b에 포함 된 값을 생성하는 요소 만 유지할 수 있습니다.

```javascript
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map((x) => fn(x)))
  return a.filter((x) => s.has(fn(x)))
}

// 예시
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [2.1]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
