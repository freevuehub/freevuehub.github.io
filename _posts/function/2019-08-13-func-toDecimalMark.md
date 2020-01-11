---
layout: post
title: 'toDecimalMark'
categories: [Function]
image: assets/images/function/43/carbon.png
tag: [매일함수, toDecimalMark, javascript]
---

toDecimalMark. toLocaleString()을 사용하여 부동 소수점 산술을 [소수점 이하 자릿수](https://en.wikipedia.org/wiki/Decimal_mark) 형식으로 변환하십시오.

숫자와 쉼표로 구분 된 문자열을 만듭니다.

```javascript
const toDecimalMark = (num) => num.toLocaleString('en-US')

// 예시
toDecimalMark(12305030388.9087) // "12,305,030,388.909"
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
