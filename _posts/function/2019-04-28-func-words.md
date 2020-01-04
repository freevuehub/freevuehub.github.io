---
layout: post
title: 'words'
categories: [Function]
image: assets/images/function/12/carbon.png
tag: [매일함수, words, javascript]
---

words. 주어진 문자열을 단어 배열로 변환합니다.

String.split()을 제공된 패턴 (기본값은 정규 표현식으로 알파가 아닌 문자열)과 함께 사용하여 문자열 배열로 변환합니다. Array.filter()를 사용하여 빈 문자열을 제거하십시오. 기본 정규 표현식을 사용하려면 두 번째 인수를 생략하십시오.

```javascript
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean)

// 예시
words('I love javaScript!!') // ["I", "love", "javaScript"]
words('python, javaScript & coffee') // ["python", "javaScript", "coffee"]
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
