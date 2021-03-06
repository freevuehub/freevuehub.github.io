---
layout: post
title: 'Vue의 style 지원'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

Style을 작성하는 방법은 다양합니다. 단순 CSS를 이용하는 방법도 있고 SASS나 LESS로 조금 더 쉽게 작성하는 방법을 사용할 수도 있습니다. 작성을 하다 보면 모두 공통점이 있는데 그 중 하나가 중복해서 작성하지 않으려고 노력하는 점입니다.

Vue는 주로 Component로 부분 부분을 나누어 관리합니다. 이 점에서 편한 부분이 DOM과 Style을 같은 파일에 작성을 할 수 있어서 작성하기 편하다고 생각합니다.

```html
<template>
  <div class="inner">
    여기는 DOM입니다.
  </div>
</template>

<script>
  export default {
    // ...
  }
</script>

<style>
  .inner {
    // ...
  }
</style>
```

하지만 SPA의 장점으로 모든 파일을 하나로 모으기 때문에 style이 겹치는 경우가 생기게됩니다. 그 부분을 방지하기 위한 방법을 소개하겠습니다.

Vue에서 style태그에 scoped와 module을 지원하고 있습니다. 각각의 기능은 비슷합니다. style을 난수화하여 겹치지 않게 해줍니다.

> scoped 기본 사용법
> ```html
> <!-- ... -->
>
> <style scoped>
> /* css */
> </style>
>
> <!-- ... -->
> ```
>
> module 기본 사용법
> ```html
> <!-- ... -->
> <style module>
> /* css */
> </style>
>
> <!-- ... -->
> ```

각각의 차이점을 알기 위해서는 검사창이 필요합니다.

scoped는 난수의 속성을 지정하여 class명이 겹치지 않게 합니다. module은 class명을 난수화하여 겹치지 않게 만들어 줍니다. 차이점을 알았으니 작성법을 소개하겠습니다.

scoped는 일반적으로 html에 class를 작성하는 방법과 같습니다.

> scoped 작성법은 다음과 같습니다.
> ```html
> <template>
>   <div class="container">
>   </div>
> </template>
>
> <style scoped>
> .container {
>   /* css 작성 */
> }
> </style>
> ```

하지만 module작성법은 조금 다릅니다. class명을 난수화하기 때문에 난수화된 class를 html에 bind하는 방법으로 작성이 되어야 합니다.

> module 작성법은 다음과 같습니다.
> ```html
> <template>
>   <div :class="$style.container">
>   </div>
> </template>
>
> <style module>
> .container {
>   /* css 작성 */
> }
> </style>
> ```
