---
layout: post
title:  "매일 함수"
date:   2019-03-27
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// nest
// 서로 연결된 객체의 편평한 배열이 주어지면, 객체를 반복적으로 중첩합니다.
// reddit.com에서와 같이 주석을 중첩하는 데 유용합니다.
//
// 재귀를 사용하십시오.
// Array.filter()를 사용하여 id가 링크와 일치하는 항목을 필터링 한 다음 Array.map()을 사용하여 각 항목을 현재 아이의 항목을 기반으로항목을 재위 적으로 중첩하는 children 속성이 있는 새 객체에 매핑합니다.
// 두번째 인자인 id가 객체가 다른 객체 (즉, 최상위 객체) 링크되어 있지 않음을 나타내는 null로 기본 설정하지 않습니다.
// 세번째 인자인 link를 생략하면 'parent_id'가 id로 다른 객체에 링크하는 기본 속성으로 사용됩니다.

const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

// 예시
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190327.jpeg)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
