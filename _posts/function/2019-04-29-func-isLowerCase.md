---
layout: post
title: 'isLowerCase'
categories: [Function]
image: assets/images/function/13/carbon.png
tag: [매일함수, isLowerCase, javascript]
---

isLowerCase. 문자열이 소문자인지 검사합니다.

String.toLowerCase()를 사용하여 주어진 문자열을 소문자로 변환하고 원본과 비교하십시오.

```javascript
const isLowerCase = (str) => str === str.toLowerCase()

// 예시
isLowerCase('abc') // true
isLowerCase('a3@$') // true
isLowerCase('Ab4') // false
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
