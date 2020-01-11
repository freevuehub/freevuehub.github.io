---
layout: post
title: 'isValidJSON'
categories: [Function]
image: assets/images/function/37/carbon.png
tag: [매일함수, isValidJSON, javascript]
---

isValidJSON. 제공된 인수가 유효한 JSON인지 확인합니다.

제공된 인수가 유효한 JSON인지 확인하려면 JSON.parse() 및 try ... catch 블록을 사용하십시오.

```javascript
const isValidJSON = (obj) => {
  try {
    JSON.parse(obj)
    return true
  } catch (e) {
    return false
  }
}

// 예시
isValidJSON('{"name":"Adam","age":20}') // true
isValidJSON('{"name":"Adam",age:"20"}') // false
isValidJSON(null) // true
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
