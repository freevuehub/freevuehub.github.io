---
layout: post
title: '알고리즘 풀이'
categories: [Algorithm]
image: assets/images/function/0/20190415.png
tag: [algorithm, javascript]
---

#### 문제

```
n 이하 소수의 합을 구하시오?

input n = 10
output 17 // 2 + 3 + 5 + 7 = 17
```

#### 풀이

```javascript
const output = (input) => {
  const isPrime = (num) => {
    // 소수를 확인할 함수
    const sqrt = Math.sqrt(num) // num의 제곱근을 선언

    // 소수를 비교할 자연수 i와 return에 넘길 Boolean의 check선언
    let i = 2
    let check = true

    // 제곱근까지 반복
    //
    // 제곱근의 값이 자연수가 아닌 경우 소숫점 뒤는 전부 버림
    while (i <= parseInt(sqrt)) {
      // 자연수 i와 비교하여 나누어 떨어지면 false
      if (num % i === 0) {
        check = false

        // false가 나온 경우 더 이상 비교할 필요가 없어서 반복을 중단한다.
        break
      }

      // 자연수 i를 1씩 더한다.
      i++
    }

    // 반복문이 정상적으로 완료되면 true, 중단되면 false 출력
    return check
  }

  // 1씩 더할 자연수와 소수들의 합을 담을 변수 선언
  let nature = 2
  let sum = 0

  // 해당 조건까지 반복
  while (nature <= input) {
    // 자연수가 소수일 경우 sum에 해당 자연수를 더한다.
    if (isPrime(nature)) sum += nature

    // 자연수를 1씩 더해 비교한다.
    nature++
  }

  // 최종 sum을 출력
  return sum
}

output(10) // 17
output(10000) // 5736396
output(2000000) // 142913828922
```

#### 구조

![결과 이미지 1]({{ site.baseurl }}/assets/images/algorithm/14/diagram.png)

[출처: [http://euler.synap.co.kr/prob_detail.php?id=10](http://euler.synap.co.kr/prob_detail.php?id=10)]
