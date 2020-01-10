---
layout: post
title: 'cli로 작업하면서 달라지는 점'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

오랜만에 작성하는 포스팅입니다. 그동안 글을 정리하거나 어떻게 포스팅을 이어갈지 고민을... 했다기 보다는 일이 바쁘고 블로그 관리에 대한 노하우가 없어서 작성을 미루게 되었습니다. 2020년이 된 지금 다시 한번 마음을 잡고 주기적으로 포스팅을 이어나갈 생각입니다.

이전 글은 `vue-cli`로 제작된 프로젝트에서 앞서 소개한 방법과 달라지는 점을 소개할 생각입니다. 이 포스팅을 읽으시면서 아시겠지만, Vue.js는 SPA를 만들기 위한 프레임워크입니다. 그래서 JS버전이 ES6이상의 문법을 지원합니다. 그리고 앞으로도 해당 버전 이상의 문법을 작성하게 됩니다.

추가로 이제 webpack을 활용하게 됩니다.

#### template 부분

이전 CDN을 활용할 때에는 template이라는 부분이 없었습니다. 하지만 이제 각각의 파일들에 렌더링을 해줄 부분을 작성하기 위하여 template이라는 문법이 새로 생겼습니다. html부분은 이제 template안에 작성을 해주시면 됩니다.

하나를 더 강조하자면 해당 template안에는 하나의 html태그만 들어갈 수 있습니다.

```html
<template>
  <div>Hello World!</div>
</template>
```

> 아래와 같이 작성을 하면 에러가 발생합니다.
>
> ```html
> <template>
>   <div>Hello World!</div>
>   <div>I'm FreeVue~</div>
> </template>
> ```

#### script 부분

실제로 앞 포스팅에서 template 및 script, style을 소개하여 전체적인 틀 구조에 개한 설명은 생략하겠습니다. 대신 가장 중요한 script부분을 소개하겠습니다.

작성을 하면 `export default`로 시작해야합니다.

```javascript
export default {
  // ...
}
```

이제 webpack을 활용하기에 각각의 파일들을 내보내야 다른 파일들에서 활용이 가능합니다. 추가로 data가 함수로 작성이 되어야 합니다.

```javascript
export default {
  data() {
    return {
      // ...
    }
  },
}
```

이렇게 객체를 return하는 함수로 작성을 해주셔야합니다.
