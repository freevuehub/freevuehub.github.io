---
layout: post
title: 'initializeArrayWithValues'
categories: [Function]
image: assets/images/function/21/carbon.png
tag: [매일함수, initializeArrayWithValues, javascript]
---

initializeArrayWithValues. 배열을 초기화하고 지정된 값으로 채 웁니다.

Array (n)을 사용하여 원하는 길이의 배열을 만들고 채우기 (v)하여 원하는 값으로 채 웁니다.
val을 생략하면 기본값 0을 사용할 수 있습니다.

```javascript
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)

// 예시
initializeArrayWithValues(5, 2) // [2,2,2,2,2]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
