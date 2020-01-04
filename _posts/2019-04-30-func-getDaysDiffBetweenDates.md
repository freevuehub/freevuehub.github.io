---
layout: post
title: 'getDaysDiffBetweenDates'
categories: [Function]
image: assets/images/function/14/carbon.png
tag: [매일함수, getDaysDiffBetweenDates, javascript]
---

getDaysDiffBetweenDates. 두 날짜 간의 차이 (일)를 반환합니다. 두 Date 객체 간의 차이 (일)를 계산합니다.

```javascript
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24)

// 예시
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')) // 9
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
