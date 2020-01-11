---
layout: post
title: 'URLJoin'
categories: [Function]
image: assets/images/function/42/carbon.png
tag: [매일함수, URLJoin, javascript]
---

URLJoin. 지정된 모든 URL 세그먼트를 함께 결합한 다음 결과 URL을 정규화합니다.

String.join( '/')을 사용하여 URL 세그먼트를 결합한 다음 다양한 정규 표현식과 함께 일련의 String.replace() 호출을 사용하여 결과 URL을 표준화합니다 (이중 슬래시 제거, 프로토콜에 적절한 슬래시 추가, 매개 변수 앞의 슬래시 제거, 매개 변수 결합 '&'및 첫 번째 매개 변수 구분 기호를 표준화).

```javascript
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?')

// 예시
URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo') // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
