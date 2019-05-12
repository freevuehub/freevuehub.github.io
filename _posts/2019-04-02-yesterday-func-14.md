---
layout: post
title:  "매일 함수"
date:   2019-04-02
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// allEqual
// 모든 요소가 같은지 확인
//
// Array.every()를 사용하여 배열의 모든 요소가 첫번째 요소와 동일한 지 확인합니다.

const allEqual = arr => arr.every(val => val === all[0]);

// 예시
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190402.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
