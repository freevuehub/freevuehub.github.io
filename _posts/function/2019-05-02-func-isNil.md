---
layout: post
title: 'isNil'
categories: [Function]
image: assets/images/function/16/carbon.png
tag: [매일함수, isNil, javascript]
---

isNil. 지정된 값이 null 또는 미정 도리의 경우는 true를, 그렇지 않은 경우는 false를 리턴합니다.

완전 항등 연산자를 사용하여 값과 val이 null 또는 undefined인지 확인하십시오.

```javascript
const isNil = (val) => val === undefined || val === null

// 예시
isNil(null) // true
isNil(undefined) // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
