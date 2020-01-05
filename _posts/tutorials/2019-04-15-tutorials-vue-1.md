---
layout: post
title: 'Vue.js CDN으로 시작하기'
categories: [Tutorials]
image: assets/images/function/0/20190415.png
tag: [Vue.js, javascript]
---

```vue
<!DOCTYPE html>
<html>
  <head>
    <title>CDN 이용하기</title>

    <!-- Vue CDN 링크. -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  </head>

  <body>
    <h1>CDN을 이용하여 페이지를 그립니다.</h1>

    <!-- Vue를 이용하여 message를 받을 #app 태그. -->
    <div id="app">{% raw %}{{ message }}{% endraw %}</div>

    <script>
      /* Vue를 선언 후 #app에 그려줄 message 작성. */
      var App = new Vue({
        el: '#app',
        data: {
          message: 'Hello World',
        },
      })
    </script>
  </body>
</html>
```

이런 식으로 cdn을 사용하면은 html 문법을 활용하는 곳에서 언제든지 사용할 수 있습니다. (제이쿼리를 이용하듯...)

위 코드로 작성을 하면 아래와 같은 결과를 얻을 수 있습니다.

![결과 이미지 1]({{ site.baseurl }}/assets/images/vue/1/img1.png)

코드를 분석해보면

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

를 이용하여 Vue.js 파일을 불러옵니다. 그리고

```vue
<div id="app">
  {% raw %}{{ message }}{% endraw %}
</div>
```

Element를 지정해줄 id를 가진 태그를 만듭니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
  },
})
```

그리고 Vue의 el : '#app'부분을 이용해서 Element를 지정해줍니다.

data에는 위 '<div id="app">'태그안에 있는 \{\{ message \}\}에 담을 내용을 추가하는데 콧수염 표현식 또는 보간법이라 불리는 \{\{ ... \}\} 이 안에 있는 객체와 data안에 있는 객체의 이름이 같아야 합니다.

조금 더 응용을 하면은

```javascript
var model = 'Hello World'

var App = new Vue({
  el: '#app',
  data: {
    message: model,
  },
})
```

이렇게 작성을 하면 data관리를 조금 더 쉽게 할 수 있습니다.

여기서 조금 더 테스트를 해보겠습니다.

```javascript
var model = '<h3>Hello World</h3>'

var App = new Vue({
  el: '#app',
  data: {
    message: model,
  },
})
```

![결과 이미지 2]({{ site.baseurl }}/assets/images/vue/1/img2.png)

이미지처럼 태그가 문자로 들어갑니다. 만약 태그로 한번 더 감싸고 싶으면

```vue
<div id="app">
  <h3>{% raw %}{{ message }}{% endraw %}</h3>
</div>
```

이렇게 {{ message }}부분을 원하시는 태그로 한번 더 감싸면 원하는 결과가 나옵니다.

![결과 이미지 3]({{ site.baseurl }}/assets/images/vue/1/img3.png)

또 다르게 응용을 해보겠습니다.

```javascript
var model1 = 'Hello World'
var model2 = '오늘은 여기까지'

var App = new Vue({
  el: '#app',
  data: {
    message1: model1,
    message2: model2,
  },
})
```

이렇게 data에 model을 하나 더 만들어서 추가하고

```vue
<div id="app">
  <h3>{% raw %}{{ message1 }}{% endraw %}</h3>
  <p>{% raw %}{{ message2 }}{% endraw %}</p>
</div>
```

'<div id="app">'에 message를 받아오는 부분을 '<p>'태그를 이용하여 추가했습니다.

![결과 이미지 4]({{ site.baseurl }}/assets/images/vue/1/img4.png)

이런 식으로 응용할 수 있습니다.

최종 코드입니다.

```vue
<h1>CDN을 이용하여 페이지를 그립니다.</h1>
<div id="app">
  <h3>{% raw %}{{ message1 }}{% endraw %}</h3>
  <p>{% raw %}{{ message2 }}{% endraw %}</p>
</div>

<script>
var model1 = 'Hello World'
var model2 = '오늘은 여기까지'

var App = new Vue({
  el: '#app',
  data: {
    message1: model1,
    message2: model2,
  },
})
</script>
```
