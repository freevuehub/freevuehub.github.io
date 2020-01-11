---
layout: post
title: 'sortedIndex'
categories: [Function]
image: assets/images/function/5/carbon.png
tag: [매일함수, sortedIndex, javascript]
---

sortedIndex. 정렬 순서를 유지하기 위해 배열에 값을 삽입해야하는 가장 작은 인덱스를 반환합니다.

배열이 내림차순으로 정렬되는지 (느슨하게) 확인하십시오. Array.findIndex()를 사용하여 요소가 삽입되어야하는 적절한 인덱스를 찾습니다.

```javascript
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.findIndex((el) => (isDescending ? n >= el : n <= el))
  return index === -1 ? arr.length : index
}

// 예시
sortedIndex([5, 3, 2, 1], 4) // 1
sortedIndex([30, 50], 40) // 1
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
