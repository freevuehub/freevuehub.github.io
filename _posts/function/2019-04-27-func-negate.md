---
layout: post
title: 'negate'
categories: [Function]
image: assets/images/function/11/carbon.png
tag: [매일함수, negate, javascript]
---

negate. 술어 함수를 무효화합니다. 술어 함수를 취해 인수에 not 연산자 (!)를 적용하십시오.

```javascript
const negate = (func) => (...args) => !func(...args)

// 예시
;[1, 2, 3, 4, 5, 6].filter(negate((n) => n % 2 === 0)) // [ 1, 3, 5 ]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
