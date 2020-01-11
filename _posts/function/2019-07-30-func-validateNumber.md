---
layout: post
title: 'validateNumber'
categories: [Function]
image: assets/images/function/31/carbon.png
tag: [매일함수, validateNumber, javascript]
---

validateNumber. 지정된 값이 수치의 경우는 true를, 그렇지 않은 경우는 false를 돌려줍니다.

!isNaN()을 parseFloat()와 함께 사용하여 인수가 숫자인지 확인하십시오.
숫자가 유한한지 확인하려면 isFinite()를 사용하십시오.
강압이 지속되는지 확인하려면 Number()를 사용하십시오.

```javascript
const validateNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n

// 예시
validateNumber('10') // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
