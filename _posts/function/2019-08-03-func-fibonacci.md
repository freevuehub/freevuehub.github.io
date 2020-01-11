---
layout: post
title: 'fibonacci'
categories: [Function]
image: assets/images/function/35/carbon.png
tag: [매일함수, fibonacci, javascript]
---

fibonacci. n 번째 항까지 피보나치 시퀀스를 포함하는 배열을 생성합니다.

최초의 2 개의 값 (0과 1)을 초기화 해, 특정의 길이의 하늘의 배열을 작성합니다. Array.reduce()를 사용하여 처음 두 개를 제외한 마지막 두 값의 합계를 사용하여 배열에 값을 추가합니다.

```javascript
const fibonacci = (n) =>
  Array.from({length: n}).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    [],
  )

// 예시
fibonacci(6) // [0, 1, 1, 2, 3, 5]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
