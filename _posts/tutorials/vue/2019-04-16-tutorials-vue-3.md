---
layout: post
title: 'v-bind'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

```html
<input type="text" v-bind:placeholder="placeholder" />
```

위와 같이 input태그를 추가하고 placeholder부분을 v-bind시켰습니다. 이제 스크립트를 추가해보겠습니다.

```javascript
var model = {
  placeholder: 'Hello Vue.js World',
}

var App = new Vue({
  el: '#app',
  data: {
    placeholder: model.placeholder,
  },
})
```

위와 같이 data에 placeholder에 넣었습니다. 결과는

![결과 이미지 1]({{ site.baseurl }}/assets/images/tutorials/vue/3/img1.jpg)

placeholder가 추가되었습니다. 이런 식으로 href, src등의 태그의 속성을 추가하고 수정할 수 있습니다.

v-bind의 경우 좀 더 간단하게 작성할 수 있는데

```html
<input type="text" :placeholder="placeholder" />
```

이런 식으로 v-bind 생략하고를 : 로만 작성이 가능합니다.

```html
<div id="app">
  <input type="text" :placeholder="placeholder" />
</div>

<script>
  var model = {
    placeholder: 'Hello Vue.js World',
  }

  var App = new Vue({
    el: '#app',
    data: {
      placeholder: model.placeholder,
    },
  })
</script>
```
