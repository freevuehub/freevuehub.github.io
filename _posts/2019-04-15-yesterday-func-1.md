---
layout: post
title:  "매일 함수"
date:   2019-04-15
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// toHash
// 주어진 Array-like를 값 해시 (키 저장 데이터 스토어)로 축소합니다.
//
// Iterable 또는 Array와 유사한 구조가 있으면 제공된 객체에서 Array.prototype.reduce.call()을 호출하여 단계를 건너 뛰고 참조 값에 의해 키가 있는 객체를 반환합니다.

const toHash = (object, key) =>
    Array.prototype.reduce.call(
        object,
        (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
        {}
    );

// 예시
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 1: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:
let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable referende, but a closure referencing the hash would work too.
managers.forEach(
    manager =>
        (manager.employees = manager.employees.map(function(id) {
            return this[id];
        }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] }]
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190415.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
