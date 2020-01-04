---
layout: post
title: 'toSnakeCase'
categories: [Function]
image: assets/images/function/0/20190331.jpeg
tag: [매일함수, toSnakeCase, javascript]
---

toSnakeCase. 문자열을 뱀 케이스로 변환합니다. 문자열을 단어로 분리하고 겅규 표현식을 사용하여 \_을 구분 기호로 추가하여 결합하십시오.

```javascript
const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('_')

// 예시
toSnakeCase('camelCase') // 'camel_case'
toSnakeCase('some_text') // 'some_text'
toSnakeCase('some-mixed_string With spaces_underscore-and-hyphens') // 'some_mixed_string_with_spaces_underscore_and_hyphens'
toSnakeCase('AllThe-small Things') // 'all_the_small_things'
toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML') // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
```

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
