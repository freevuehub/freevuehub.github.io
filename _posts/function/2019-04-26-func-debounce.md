---
layout: post
title: 'debounce'
categories: [Function]
image: assets/images/function/10/carbon.png
tag: [매일함수, debounce, javascript]
---

debounce. 마지막으로 호출 된 이후 최소 ms 밀리 초가 경과 할 때까지 제공된 함수를 호출하는 것을 지연시키는 디 바운스 함수를 작성합니다.

디 바운스 된 함수가 호출 될 때마다 clearTimeout()을 사용하여 현재 보류중인 시간 초과를 지우고 setTimeout()을 사용하여 적어도 ms 밀리 초가 경과 할 때까지 함수를 호출하는 것을 지연시키는 새로운 시간 초과를 생성하십시오. Function.apply()를 사용하여이 컨텍스트를 함수에 적용하고 필요한 인수를 제공하십시오. 두 번째 인수 인 ms를 생략하여 기본값 인 0ms로 시간 초과를 설정하십시오.

```javascript
const debounce = (fn, ms = 0) => {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

// 예시
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 250),
) // Will log the window dimensions at most every 250ms
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
