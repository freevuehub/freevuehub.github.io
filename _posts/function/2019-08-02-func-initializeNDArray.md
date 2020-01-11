---
layout: post
title: 'initializeNDArray'
categories: [Function]
image: assets/images/function/34/carbon.png
tag: [매일함수, initializeNDArray, javascript]
---

initializeNDArray. 주어진 값으로 n 차원 배열을 만듭니다.

재귀를 사용하십시오. Array.map()을 사용하여 각 행이 initializeNDArray를 사용하여 초기화 된 새 배열 인 행을 생성하십시오.

```javascript
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({length: args[0]}).map(() => initializeNDArray(val, ...args.slice(1)))

// 예시
initializeNDArray(1, 3) // [1,1,1]
initializeNDArray(5, 2, 2, 2) // [[[5,5],[5,5]],[[5,5],[5,5]]]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
