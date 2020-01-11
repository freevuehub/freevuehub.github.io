---
layout: post
title: 'serializeCookie'
categories: [Function]
image: assets/images/function/18/carbon.png
tag: [매일함수, serializeCookie, javascript]
---

serializeCookie. 쿠키 이름 - 값 쌍을 Set-Cookie 헤더 문자열로 serialize합니다.

템플릿 리터럴과 encodeURIComponent()를 사용하여 적절한 문자열을 만듭니다.

```javascript
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`

// 예시
serializeCookie('foo', 'bar') // 'foo=bar'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
