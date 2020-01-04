---
layout: post
title: '알고리즘 풀이'
categories: [Algorithm]
image: assets/images/function/0/20190415.png
tag: [algorithm, javascript]
---

문제

```
문자열 배열(string array)이 주어지면, 제일 긴 공통된 접두사(prefix)의 길이를 찾으시오.

예제)
Input: [“apple”, “apps”, “ape”]
Output: 2 // “ap”

Input: [“hawaii”, “happy”]
Output: 2 // “ha”

Input: [“dog”, “dogs”, “doge”]
Output: 3 // “dog”
```

풀이

```javascript
const output = (input) => {
  const small = input.reduce((prev, cur) => (prev.length < cur.length ? prev : cur)).split('')

  return small.reduce((prev, cur) => {
    const r = new RegExp(`${prev}${cur}`)

    return input.every((l) => l.search(r) === 0) ? `${prev}${cur}` : `${prev}`
  }, '')
}

output(['apple', 'apps', 'ape']) // 'ap'
output(['hawaii', 'happy']) // 'ha'
output(['dog', 'dogs', 'doge']) // 'dog'
```

[출처: [https://mailprogramming.com/](https://mailprogramming.com/)]
