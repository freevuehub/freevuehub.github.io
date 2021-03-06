---
layout: post
title: 'counter'
categories: [Function]
image: assets/images/function/27/carbon.png
tag: [매일함수, counter, javascript]
---

counter. 지정된 범위의 지정된 범위, 단계 및 지속 기간을 사용하여 카운터를 만듭니다.

단계에 적절한 부호가 있는지 확인하고 적절하게 변경하십시오.
setInterval()을 Math.abs() 및 Math.floor()와 함께 사용하여 각각의 새 텍스트 그리기 사이의 시간을 계산합니다. document.querySelector().innerHTML을 사용하여 선택한 요소의 값을 업데이트합니다. 기본 단계 인 1을 사용하려면 네 번째 매개 변수 인 step을 생략하십시오. 다섯 번째 매개 변수 인 duration을 생략하고 기본 기간 인 2000ms를 사용하십시오.

```javascript
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step
      document.querySelector(selector).innerHTML = current
      if (current >= end) document.querySelector(selector).innerHTML = end
      if (current >= end) clearInterval(timer)
    }, Math.abs(Math.floor(duration / (end - start))))
  return timer
}

// 예시
counter('#my-id', 1, 1000, 5, 2000) // Creates a 2-second timer for the element with id="my-id"
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
