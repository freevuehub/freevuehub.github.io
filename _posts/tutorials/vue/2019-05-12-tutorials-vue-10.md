---
layout: post
title: 'computed'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

```html
<div id="app">
  <!-- Message 1 -->
  <h1>나는 메시지입니다.</h1>
  <p>나는 {% raw %}{{ message }}{% endraw %}입니다.</p>

  <!-- Message 2 -->
  <h2>나는 다른 메시지입니다.</h2>
  <p>{% raw %}{{ AnotherMessage }}{% endraw %}</p>
</div>

<script>
  var App = new Vue({
    el: '#app',
    data: {
      message: 'Vue.js',
    },
  })
</script>
```

이 소스를 실행하면 에러가 발생합니다.

`AnotherMessage`를 찾을 수 없다는 내용입니다.

![결과 이미지 1]({{ site.baseurl }}/assets/images/tutorials/vue/10/img1.jpg)

이 에러를 computed를 활용하여 해결해보겠습니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js',
  },
  computed: {
    AnotherMessage: function() {
      return '나는 javascript입니다.'
    },
  },
})
```

computed는 함수를 담아야하기 때문에 각 함수마다 return값이 필요합니다.

이제 새로고침을 하면은 에러가 사라졌습니다.

![결과 이미지 2]({{ site.baseurl }}/assets/images/tutorials/vue/10/img2.jpg)

이 기능은 data를 사용할 때의 기능 차이를 확인해보겠습니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js',
  },
  computed: {
    AnotherMessage: function() {
      if (this.message.split('.')[1] === 'js') {
        return '나는 javascript입니다.'
      } else {
        return '나는  javascript가 아닙니다.'
      }
    },
  },
})
```

위 소스처럼 AnotherMessage을 프로그래밍적으로 작성하면 더 다양한 결과를 얻을 수 있습니다.

v-model을 이용하여 더 재미있는 결과를 얻을 수 있습니다.

```html
<div id="app">
  <!-- Message 1 -->
  <h1>나는 메시지입니다.</h1>
  <p>나는 {% raw %}{{ message }}{% endraw %}입니다.</p>

  <!-- Message 2 -->
  <h2>나는 다른 메시지입니다.</h2>
  <p>{% raw %}{{ AnotherMessage }}{% endraw %}</p>

  <!-- Message Change -->
  <input type="text" v-model="message" />
</div>
```

HTML부분을 수정했습니다.

![결과 이미지 3]({{ site.baseurl }}/assets/images/tutorials/vue/10/img3.jpg)

input의 값이 바꾸면 v-model에 의해서 변화값을 관찰하고, message의 값이 바뀝니다.

그리고 message의 값의 조건에 따라서 AnotherMessage의 return의 값이 달라집니다.
