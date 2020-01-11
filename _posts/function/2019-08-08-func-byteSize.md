---
layout: post
title: 'byteSize'
categories: [Function]
image: assets/images/function/39/carbon.png
tag: [매일함수, byteSize, javascript]
---

byteSize. 캐릭터 라인의 길이를 바이트 단위로 돌려줍니다.

주어진 문자열을 [Blob Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)로 변환하고 그 크기를 찾으십시오.

```javascript
const byteSize = (str) => new Blob([str]).size

// 예시
byteSize('😀') // 4
byteSize('Hello World') // 11
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
