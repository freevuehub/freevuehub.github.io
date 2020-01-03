---
layout: post
title: 'permutations'
categories: [Function]
image: assets/images/function/0/20190406.png
tag: [매일함수, permutations, javascript]
---

permutations. ** WARNING ** : 이 함수의 실행 시간은 각 배열 요소에 따라 기하 습수적으로 증가합니다. 8-10 항목을 초과하는 항목은 브라우저에서 모든 다른 조합을 해결하려고 할 때 중단됩니다. 배열 요소의 모든 순열을 생성합니다. (중복 포함). 재귀를 사용하십시오. 주어진 배열의 각 요소에 대해 나머지 요소에 대한 모든 부분 순열을 작성하십시오. Array.map()을 사용하여 요소를 각 부분 순열과 결합한 다음 Array.reduce()를 사용하여 모든 순열을 하나의 배열로 결합합니다. 기본 케이스는 배열 길이가 2 또는 1 인 경우입니다.

```javascript
const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [item, ...val]),
      ),
    [],
  )
}

// 예시
permutations([1, 33, 5]) // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
