---
layout: post
title: 'v-model'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

> ## v-model

v-model사용법을 알아보겠습니다.

```html
<div id="app">
  텍스트: <input type="text" v-model="message" />

  <p>결과: {% raw %}{{ message }}{% endraw %}</p>
</div>

...

<script>
  var App = new Vue({
    el: '#app',
    data: {
      message: '안녕하세요.',
    },
  })
</script>
```

결과를 확인해보면 재미있는 결과를 확인할 수 있습니다.

input의 value는 data의 message가 됩니다.

> ## watch

```javascript
var App = new Vue({
  el: '#app',

  data: {
    message: '안녕하세요.',
  },

  watch: {
    message: function(v) {
      console.log(v) // 안녕하세요.
    },
  },
})
```

watch속성은 v-model의 변화값을 활용할 수 있는 속성입니다.

함수로 작성되어야 하며, 함수명은 v-model의 값과 동일해야 합니다.
