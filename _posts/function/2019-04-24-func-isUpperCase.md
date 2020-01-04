---
layout: post
title: 'isUpperCase'
categories: [Function]
image: assets/images/function/8/carbon.png
tag: [매일함수, isUpperCase, javascript]
---

isUpperCase. 문자열이 대문자인지 검사합니다.

String.toUpperCase()를 사용하여 주어진 문자열을 대문자로 변환하고 원본과 비교하십시오.

```javascript
const isUpperCase = (str) => str === str.toUpperCase()

// 예시
isUpperCase('ABC') // true
isLowerCase('A3@$') // true
isLowerCase('aB4') // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
