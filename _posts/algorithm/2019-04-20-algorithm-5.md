---
layout: post
title: '알고리즘 풀이'
categories: [Algorithm]
image: assets/images/function/0/20190415.png
tag: [algorithm, javascript]
---

문제

```
n보다 작은 자연수 중에서 3 또는 5의 모든 배수들의 합은?

input: n = 10
output: 23 // 3 + 5 + 6 + 9 = 23
```

풀이

```javascript
const output = (input) => {
  let sum = 0

  for (let i = 0; i < input; i++) {
    ;(!(i % 3) || !(i % 5)) && (sum = sum + i)
  }

  return sum
}

output(10) // 23
output(100) // 2318
output(1000) // 233168
```

[출처: [http://euler.synap.co.kr/prob_detail.php?id=1](http://euler.synap.co.kr/prob_detail.php?id=1)]
