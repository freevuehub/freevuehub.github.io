---
layout: post
title:  "매일 함수"
date:   2019-03-30
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// everyNth
// 배열의 모든 n 번째 요소를 반환합니다.
//
// Array.filter()를 사용하여 지정된 배열의 모든 n 번째 요소를 포함하는 새 배열을 반듭니다.

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

// 예시
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190330.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
