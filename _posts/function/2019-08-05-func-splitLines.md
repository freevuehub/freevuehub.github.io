---
layout: post
title: 'splitLines'
categories: [Function]
image: assets/images/function/36/carbon.png
tag: [매일함수, splitLines, javascript]
---

splitLines. 여러 줄 문자열을 줄 배열로 나눕니다.

줄 바꿈을 일치시키고 배열을 만들려면 String.split ()과 정규 표현식을 사용하십시오.

```javascript
const splitLines = (str) => str.split(/\r?\n/)

// 예시
splitLines('This\nis a\nmultiline\nstring.\n') // ['This', 'is a', 'multiline', 'string.' , '']
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
