---
layout: post
title: 'maxBy'
categories: [Function]
image: assets/images/function/15/carbon.png
tag: [매일함수, maxBy, javascript]
---

maxBy. 제공된 함수를 사용하여 각 요소를 값에 매핑 한 후 배열의 최대 값을 반환합니다.

Array.map()을 사용하여 각 요소를 fn, Math.max()에서 반환 한 값에 매핑하여 최대 값을 가져옵니다.

```javascript
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : (val) => val[fn]))

// 예시
maxBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], (o) => o.n) // 8
maxBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n') // 8
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
