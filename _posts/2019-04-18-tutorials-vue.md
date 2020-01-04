---
layout: post
title: 'v-for'
categories: [Tutorials]
image: assets/images/function/0/20190415.png
tag: [Vue.js, javascript]
---

v-for의 경우는 태그를 반복적으로 생성할 때 사용합니다.

```javascript
var model = [0, 1, 2, 3]

var App = new Vue({
  el: '#app',
  data: {
    list: model,
  },
})
```

스크립트의 경우는 model을 배열로 작성하고, data의 list에 추가했습니다.

```vue
<div id="app">
  <ul>
    <li v-for="c in list" :key="c">v-for</li>
  </ul>
</div>
```

위와 같이 li태그에 v-for을 추가했습니다.

코드를 보시면 c는 list안에 있는 데이터를 의미합니다. 여기서 주의할 점이 있는데 v-for을 이용해서 반복해서 태그를 생성할 경우 태그에 key값을 꼭 추가하셔야 합니다.

지난 번에 배운 방식으로 v-bind:key를 이용해서 key값을 추가했습니다.

결과는 아래 사진과 같이 나옵니다.

![결과 이미지 1]({{ site.baseurl }}/assets/images/vue/5/img1.png)

```vue
<li v-for="c in list" :key="c">{{ c }}</li>
```

이렇게 콧수염식으로 {{ c }}를 넣으면 list의 데이터들을 순차적으로 보여지게 할 수 있습니다.

![결과 이미지 2]({{ site.baseurl }}/assets/images/vue/5/img2.png)

```javascript
var model = [
  {num: 0, string: '가'},
  {num: 1, string: '나'},
  {num: 2, string: '다'},
  {num: 3, string: '라'},
]
```

만약 배열안에 Object로 있다하면 :key값에 Object가 들어갈 수 없기 때문에

```vue
<li v-for="c in list" :key="c.num">{{ c }}</li>
```

이런식으로 데이터를 타고 들어가서 넣어주는 방법도 있지만, 또 다른 방법으로

```vue
<li v-for="(c, index) in list" :key="index">{{ c }}</li>
```

이렇게 index를 사용하는 방법도 있는데 index의 경우는 각 데이터의 순서입니다.

index는 0부터 시작을 하고, 숫자입니다.

이렇게 해서 {{ c }}를 표현을 하면은 Object가 그대로 그려집니다. 만약 Object안에 string을 보여주고 싶으면

```vue
<li v-for="(c, index) in list" :key="index">{{ c.string }}</li>
```

이렇게 콧수염식 안에서 데이터를 타고 들어가면 원하는 결과를 얻을 수 있습니다.

![결과 이미지 3]({{ site.baseurl }}/assets/images/vue/5/img3.png)

좀 더 응용을 해서 조건 렌더링과 같이 사용해 보겠습니다.

```vue
<li v-for="(c, index) in list" :key="index" v-if="c.num !== 2">{{ c.string }}</li>
```

이런 식으로 c.num의 2가 아닌 경우의 조건을 걸어서 그려지게 할 수 있습니다. 물론 index도 조건문에 사용할 수 있습니다.

![결과 이미지 4]({{ site.baseurl }}/assets/images/vue/5/img4.png)

조건 렌더링의 경우는 v-show를 사용해도 되지만 위에서는 v-if를 사용했습니다.

이렇게 v-for와 v-if 또는 v-show를 이용해서 간단하게 원하는 결과를 얻을 수 있습니다.

```vue
<li v-for="(c, index) in list" :key="index" v-if="c.num !== 2">
  <span>{{ index + 1 }}</span>
  <h4>{{ c.string }}의 번호는</h4>
  <h1>{{ c.num }}입니다.</h1>
</li>
```

이런 식으로 index값을 활용할 수도 있고, 반복되는 태그안에 있는 태그들이 있다면 그 태그들도 반복적으로 생성을 합니다.

![결과 이미지 5]({{ site.baseurl }}/assets/images/vue/5/img5.png)

```vue
<div id="app">
  <ul>
    <li v-for="(c, index) in list" :key="index" v-if="c.num !== 2">
      <span>{{ index + 1 }}</span>
      <h4>{{ c.string }}의 번호는</h4>
      <h1>{{ c.num }}입니다.</h1>
    </li>
  </ul>
</div>

<script>
var model = [
  {num: 0, string: '가'},
  {num: 1, string: '나'},
  {num: 2, string: '다'},
  {num: 3, string: '라'},
]

var App = new Vue({
  el: '#app',
  data: {
    list: model,
  },
})
</script>
```
