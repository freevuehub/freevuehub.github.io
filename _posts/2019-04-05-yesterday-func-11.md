---
layout: post
title: 'countBy'
categories: [Function]
image: assets/images/function/0/20190405.png
tag: [매일함수, countBy, javascript]
---

countBy. 지정된 함수를 기반으로 배열의 요소를 그룹화하고 각 그룹의 요소 수를 반환합니다. Array.map()을 사용하여 배열 값을 함수 또는 속성 이름에 매핑합니다. Array.reduce()를 사용하여 매핑 된 결과에서 키가 생성되는 객체를 만듭니다.

```javascript
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((arr, val, i) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

// 예시
countBy([6.1, 4.2, 6.3], Math.floor) // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length') // {3: 2, 5: 1}
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
