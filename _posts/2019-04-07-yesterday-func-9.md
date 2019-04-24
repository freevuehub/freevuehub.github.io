---
layout: post
title:  "매일 함수"
date:   2019-04-07
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// memoize
// memoized (캐시 된) 함수를 돌려줍니다.
//
// 새 Map 객체를 인스턴스화하여 빈 캐시를 만듭니다.
// 먼저 특정 입력 값에 대한 함수 출력이 이미 캐시되어 있는지 확인하거나 그렇지 않은 경우 저장하고 반환합니다. 필요한 경우 memoized 함수가 이 컨스턴트를 변경하도록 하려면 function 키워드를 사용해야합니다.
// 이를 반환 된 함수의 속성으로 설정하여 캐시에 대한 엑세스를 허용합니다.

const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  }
  cached.cache = cache;
  return cached;
};

// 예시
const anagramsCached = memoize(anagrams);
anagramsCached('javascript'); // takes a long time
anagramsCached('javascript'); // return virtually instantly since it's now cached
console.log(anagramsCached.cache); // The cached anagrams map
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190407.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
