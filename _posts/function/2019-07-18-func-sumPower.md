---
layout: post
title: 'sumPower'
categories: [Function]
image: assets/images/function/19/carbon.png
tag: [매일함수, sumPower, javascript]
---

sumPower. 시작부터 끝까지 (모든 값 포함) 모든 숫자의 거듭 제곱을 반환합니다.

Array.fill()을 사용하여 대상 범위 인 Array.map () 및 지수 연산자 (\*\*)에있는 모든 숫자의 배열을 만들어 전원을 높이고 Array.reduce()를 함께 추가합니다.
두 번째 인수 인 power를 생략하고 기본값 인 2를 사용합니다.
기본 시작 값인 1을 사용하려면 세 번째 인수 인 start를 생략하십시오.

```javascript
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0)

// 예시
sumPower(10) // 385
sumPower(10, 3) //3025
sumPower(10, 3, 5) //2925
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
