---
layout: post
title: 'curry'
categories: [Function]
image: assets/images/function/6/carbon.png
tag: [매일함수, times, javascript]
---

times. 콜백을 n 번 반복합니다.

Function.call()을 사용하여 fn을 n 번 또는 false를 반환 할 때까지 호출합니다.
정의되지 않은 개체 (또는 비 엄격 모드에서 전역 개체)를 사용하려면 마지막 인수 인 context를 생략하십시오.

```javascript
const times = (n, fn, context = undefined) => {
  let i = 0
  while (fn.call(context, i) !== false && ++i < n) {}
}

// 예시
var output = ''
times(5, (i) => (output += i))
console.log(output) // 01234
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
