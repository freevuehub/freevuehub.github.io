---
layout: post
title: 'curry'
categories: [Function]
image: assets/images/function/4/carbon.png
tag: [매일함수, curry, javascript]
---

curry. 함수를 커링합니다.

재귀를 사용하십시오. 제공된 인수 (args)의 수가 충분하면 전달 된 함수 fn을 호출하십시오. 그렇지 않으면 나머지 인수를 예상하는 카 트리 함수 fn을 리턴하십시오. 다양한 수의 인수 (가변 인수 함수, 예 : Math.min())를 허용하는 함수를 카레하려고하는 경우 선택적으로 인수의 수를 두 번째 매개 변수 arity로 전달할 수 있습니다.

```javascript
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

// 예시
curry(Math.pow)(2)(10) // 1024
curry(Math.min, 3)(10)(50)(2) // 2
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
