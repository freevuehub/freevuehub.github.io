---
layout: post
title:  "매일 함수"
date:   2019-04-09
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// runPromisesInSeries
// 일련의 약속을 실행합니다.
//
// Array.reduce()를 사용하여 약속 체인을 만듭니다. 여기서 각 약속은 해결 될 때 다음 약속을 반환합니다.

const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

// 예시
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Excutes each promise sequentially, taking a total of 3 seconds to complete
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190409.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
