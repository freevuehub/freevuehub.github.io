---
layout: post
title:  "매일 함수"
date:   2019-03-24
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// isNumber
// 지정된 인수가 수치 일지 어떨지를 판정합니다.
// 
// 값이 숫자 프리미티브로 분류되는지 확인하려면 typeof를 사용하십시오.

const isNumber = val => typeof val === 'number';

// 예시
isNumber('1'); // false
isNumber(1); // true
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190324.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
