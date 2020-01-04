---
layout: post
title: 'hashNode'
categories: [Function]
image: assets/images/function/9/carbon.png
tag: [매일함수, hashNode, javascript]
---

hashNode. [SHA-256](https://en.wikipedia.org/wiki/SHA-2) 알고리즘을 사용하여 값에 대한 해시를 만듭니다. 약속을 반환합니다.

crypto API를 사용하여 주어진 값에 대한 해시를 생성하십시오.

```javascript
const crypto = require('crypto')
const hashNode = (val) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex'),
        ),
      0,
    ),
  )

// 예시
hashNode(JSON.stringify({a: 'a', b: [1, 2, 3, 4], foo: {c: 'bar'}})).then(console.log) // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
