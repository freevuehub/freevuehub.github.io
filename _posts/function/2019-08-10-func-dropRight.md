---
layout: post
title: 'dropRight'
categories: [Function]
image: assets/images/function/41/carbon.png
tag: [매일함수, dropRight, javascript]
---

dropRight. 오른쪽에서 n 개 요소가 제거 된 새 배열을 반환합니다.

Array.slice()를 사용하여 오른쪽에서 지정된 수의 요소를 제거합니다.

```javascript
const dropRight = (arr, n = 1) => arr.slice(0, -n)

// 예시
dropRight([1, 2, 3]) // [1,2]
dropRight([1, 2, 3], 2) // [1]
dropRight([1, 2, 3], 42) // []
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
