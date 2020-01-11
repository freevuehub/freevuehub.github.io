---
layout: post
title: 'chainAsync'
categories: [Function]
image: assets/images/function/2/carbon.png
tag: [매일함수, chainAsync, javascript]
---

chainAsync. 체인 비동기 함수입니다. 비동기 이벤트가 포함 된 함수 배열을 반복하면서 각 비동기 이벤트가 완료 될 때 next를 호출합니다.

```javascript
const chainAsync = (fns) => {
  let curr = 0
  const next = () => fns[curr++](next)
  next()
}

// 예시
chainAsync([
  (next) => {
    console.log('0 seconds')
    setTimeout(next, 1000)
  },
  (next) => {
    console.log('1 second')
  },
])
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
