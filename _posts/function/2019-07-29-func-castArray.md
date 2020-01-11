---
layout: post
title: 'castArray'
categories: [Function]
image: assets/images/function/30/carbon.png
tag: [매일함수, castArray, javascript]
---

castArray. 제공된 값이 배열이 아닌 경우 배열로 캐스팅합니다.

Array.isArray()를 사용하여 val이 배열인지 확인한 다음 그대로 반환하거나 배열에 캡슐화합니다.

```javascript
const castArray = (val) => (Array.isArray(val) ? val : [val])

// 예시
castArray('foo') // ['foo']
castArray([1]) // [1]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
