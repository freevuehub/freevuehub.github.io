---
layout: post
title: 'round'
categories: [Function]
image: assets/images/function/25/carbon.png
tag: [매일함수, round, javascript]
---

round. 숫자를 지정된 자릿수로 올림합니다.

숫자를 지정된 자릿수로 반올림하려면 Math.round () 및 템플릿 리터럴을 사용하십시오.
두 번째 인수는 생략하고 정수로 반올림합니다.

```javascript
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

// 예시
round(1.005, 2) // 1.01
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
