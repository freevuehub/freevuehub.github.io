---
layout: post
title: 'delay'
categories: [Function]
image: assets/images/function/38/carbon.png
tag: [매일함수, delay, javascript]
---

delay. 대기 밀리 세컨드 후에 제공된 함수를 호출합니다.

setTimeout()을 사용하여 fn의 실행을 지연하십시오. spread(...) 연산자를 사용하여 함수에 임의의 수의 인수를 제공하십시오.

```javascript
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args)

// 예시
delay(
  function(text) {
    console.log(text)
  },
  1000,
  'later',
) // Logs 'later' after one second.
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
