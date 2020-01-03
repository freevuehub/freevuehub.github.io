---
layout: post
title: 'isNumber'
categories: [Function]
image: assets/images/function/0/20190324.png
tag: [매일함수, isNumber, javascript]
---

isNumber. 지정된 인수가 수치 일지 어떨지를 판정합니다. 값이 숫자 프리미티브로 분류되는지 확인하려면 typeof를 사용하십시오.

```javascript
const isNumber = (val) => typeof val === 'number'

// 예시
isNumber('1') // false
isNumber(1) // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
