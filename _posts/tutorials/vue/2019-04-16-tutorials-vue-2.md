---
layout: post
title: 'v-html, v-text'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

지난 글은 단순히 Vue.js 파일을 불러와 data를 실제 View단에 추가하는 것을 했습니다.

그 중에서

```html
<h3>{% raw %}{{ message1 }}{% endraw %}</h3>
```

data를 다른 태그를 감싸서 보여주는 방법을 위 코드처럼 작성했습니다. 이번에는 이렇게 작성을 하지 않고 태그도 data에 추가해서 View단에 보여지게 해보겠습니다.

여기서 새롭게 사용하는 Vue.js의 기능이 v-html, v-text입니다.

예제를 보겠습니다.

```html
<div id="app">
  <div v-html="message1"></div>
  <div v-html="message2"></div>
</div>

<script>
  var model = {
    msg1: '<h1>v-html이용하기</h1>',
    msg2: '<p>Hello World</p>',
  }

  var App = new Vue({
    el: '#app',
    data: {
      message1: model.msg1,
      message2: model.msg2,
    },
  })
</script>
```

![결과 이미지 1]({{ site.baseurl }}/assets/images/tutorials/vue/2/img1.jpg)

저번과 다르게 이번에는 태그들이 텍스트가 아닌 태그로서 일을 잘 하고 있습니다.

그런데 이 v-html은 많이 사용하지 않습니다.

코드를 작성할때 html을 이용하는 것 같지만 실제 v-html은 스크립트로 태그를 그리는 부분입니다. 스크립트로 html을 그리면 XSS 해킹의 위험이 있습니다.

그래서 v-html은 정말 필요한 경우가 아닌 이상 사용하지 않는 것이 좋습니다.

v-html을 대신 v-text를 사용하는 것이 좋습니다. 우선 스크립트 부분을 수정해보겠습니다.

```javascript
var model = {
  msg1: '<h1>v-html이용하기</h1>',
  msg2: 'Hello World',
}

var App = new Vue({
  el: '#app',
  data: {
    message1: model.msg1,
    message2: model.msg2,
  },
})
```

위와 같이 mse2부분에서 <p>태그를 빼고 text만 넣었습니다.

```html
<div id="app">
  <div v-html="message1"></div>
  <div>
    <p v-text="message2"></p>
  </div>
</div>
```

그리고 <div id="app">태그를 위와 같이 수정했습니다. 그러면 결과는

![결과 이미지 2]({{ site.baseurl }}/assets/images/tutorials/vue/2/img2.jpg)

달라지는 것은 없습니다.

v-text는 태그를 text로 받아와서 그대로 그려냅니다.

그런데 지난 글과 뭔가 겹치는 부분이 있습니다.

```html
<p v-text="message2"></p>
```

바로 이 부분인데 지난번에 사용했던 콧수염 표현식 \{\{ ... \}\} 작성법과 결과가 같습니다.

그래서 v-text대신

```html
<p>{% raw %}{{ message2 }}{% endraw %}</p>
```

이렇게 작성하셔도 됩니다. 어떤 것을 사용할지는 그때 상황에 맞추어 사용하시면 됩니다.
