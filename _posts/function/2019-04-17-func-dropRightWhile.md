---
layout: post
title: 'dropRightWhile'
categories: [Function]
image: assets/images/function/1/carbon.png
tag: [매일함수, dropRightWhile, javascript]
---

dropRightWhile. 전달 된 함수가 true를 반환 할 때까지 배열 끝에서 요소를 제거합니다. 배열의 나머지 요소를 반환합니다.

Array.slice()를 사용하여 배열의 루프를 반복하여 함수의 반환 값이 true가 될 때까지 배열의 마지막 요소를 삭제합니다. 나머지 요소를 반환합니다.

```javascript
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1)
  return arr
}

// 예시
dropRightWhile([1, 2, 3, 4], (n) => n < 3) // [1, 2]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
