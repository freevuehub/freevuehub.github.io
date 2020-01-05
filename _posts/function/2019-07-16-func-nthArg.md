---
layout: post
title: 'nthArg'
categories: [Function]
image: assets/images/function/17/carbon.png
tag: [매일함수, nthArg, javascript]
---

nthArg. 인덱스 n에서 인수를 가져 오는 함수를 만듭니다. n가 음수이면 끝에있는 n 번째 인수가 반환됩니다.

Array.slice()를 사용하여 인덱스 n에서 원하는 인수를 가져옵니다.

```javascript
const nthArg = (n) => (...args) => args.slice(n)[0]

// 예시
const third = nthArg(2)
third(1, 2, 3) // 3
third(1, 2) // undefined
const last = nthArg(-1)
last(1, 2, 3, 4, 5) // 5
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
