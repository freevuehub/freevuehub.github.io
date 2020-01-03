---
layout: post
title:  "매일 함수"
date:   2019-04-04
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// parseCookie
// HTTP 쿠키 헤더 문자열을 구분 분석하고 모든 쿠키 이름 - 값 쌍의 객체를 반환합니다.
//
// String.split(';')를 사용하여 키 - 값 쌍을 서로 분리 하십시오.
// Array.map() 및 String.split('=')을 사용하여 각 쌍의 값에서 키를 구분하십시오.
// Array.reduce() 및 decodeURIComponent()를 사용하여 모든 키 - 값 쌍이 있는 객체를 만듭니다.

const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

// 예시
parseCookie('foo=bar; equation=E=mc^2'); // { foo: 'bar', equation: 'E=mc^2' }
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190404.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
