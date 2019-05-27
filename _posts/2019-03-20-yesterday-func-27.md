---
layout: post
title:  "매일 함수"
date:   2019-03-20
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

test

```javascript
// dig
// 지정된 키를 기반으로 중첨 JSON 객체의 대상 값을 반환합니다.
//
// in 연산자를 사용하여 대상이 obj에 있는지 확인합니다.
// 발견된, obj [target]의 값을 반환하고 그렇지 않으면 Object.values(obj) 및 Array.reduce()를 사용하여 첫번째 일치하는 키 / 값 쌍이 발견될 때까지 각 중첩 객체에서 dig를 재위 적으로 호출합니다.

const dig = (obj, target) => 
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);

// 예시
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190320.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
