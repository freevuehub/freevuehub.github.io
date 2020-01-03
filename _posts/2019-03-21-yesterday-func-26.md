---
layout: post
title:  "매일 함수"
date:   2019-03-21
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// pull
// 원래의 배열을 변경하여 지정된 값을 필터링합니다.
//
// Array.filter() 및 Array.include()를 사용하여 필요하지 않은 값을 추출합니다.
// Array.length = 0을 사용하면 길이를 0으로 재설정하고 Array.push()를 사용하여 전달 된 값을 변경하여 끌어온 값만 다시 채웁니다.
//
// _ (원래 배열을 변경하지 않는 스니펫의 경우 [없음] (#없이) 참조) _

const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

// 예시
let myArray = ['a', 'b', 'c', 'a', 'b',' c'];
pull(myArray, 'a', 'c'); // myArray = ['b', 'b']
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190321.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
