---
layout: post
title:  "매일 함수"
date:   2019-03-28
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// deepClone
// 객체의 딥 클론을 작성합니다.
//
// 재귀를 사용하십시오.
// Object.assign() 및 빈 객체 ({})를 사용하여 원본의 얕은 복제본을 만듭니다.
// Object.keys() 및 Array.forEach()를 사용하여 어떤 키 - 값 쌍을 깊이 복제해야하는지 결정합니다.

const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

// 예시
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190328.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
