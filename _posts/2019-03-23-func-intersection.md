---
layout: post
title: 'intersection'
categories: [Function]
image: assets/images/function/0/20190323.jpeg
tag: [매일함수, intersection, javascript]
---

intersection. 두 배열에 있는 요소의 목록을 반환합니다.

b에서 Set을 만든 다음 a에 Array.filter()를 사용하여 b에 포합된 값만 유지합니다.

```javascript
const intersection = (a, b) => {
  const s = new Set(b)
  return a.filter((x) => s.has(x))
}

// 예시
intersection([1, 2, 3], [4, 3, 2]) // [2, 3]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
