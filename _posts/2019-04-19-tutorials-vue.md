---
layout: post
title: 'v-on'
categories: [Tutorials]
image: assets/images/function/0/20190415.png
tag: [Vue.js, javascript]
---

> ## methods

작성법

```javascript
var App = new Vue({
  el: '#app',
  data: {},
  methods: {},
})
```

methods말고도 watch, computed등 더 추가할 수 있으나 그 부분은 다음 포스팅에 소개해보겠습니다.

> ## v-on

v-on은 이벤트를 사용할 때 필요합니다.

```vue
<div id="app">
  <div v-on:click="clickEvent">Click!</div>
</div>
```

이렇게 작성을 하면 <div>태그에 click 이벤트를 받아옵니다.

하지만 이렇게만 작성하고 실행한다면 event를 찾을 수 없다는 에러가 나옵니다. 이 소스를 완성하려면 다음을 추가해야합니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {},
  methods: {
    clickEvent: function() {
      console.log('Click! Hello FreeVue Blog!') // 'Click! Hello FreeVue Blog!'
    },
  },
})
```

위 소스처럼 methods안에 v-on에 지정한 이름으로 함수를 만들어 주어야 작동을 합니다. 이렇게 작성을 하고 실행을 시키면 브라우저 console 창에 원하는 결과를 볼 수 있습니다.

조금 더 기능을 추가해서 작성해보겠습니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {},
  methods: {
    clickEvent: function(event) {
      console.log('Click! Hello', event.target.tagName)
      ;('Click! Hello DIV')
    },
  },
})
```

이런 식으로 event를 추가해서 사용할 수 있습니다.

더 소개하자면

```vue
<div id="app">
  <div v-on:click="clickEvent('Vue.js')">Click!</div>
</div>
```

이렇게 clickEvent에 'Vue.js'라는 문자열을 넣고,

```javascript
var App = new Vue({
  el: '#app',
  data: {},
  methods: {
    clickEvent: function(text) {
      console.log('Click! Hello', text) // 'Click! Hello Vue.js'
    },
  },
})
```

methods부분에서 매개변수로 받아올 수 있습니다.

좀 더 깊게 들어가면

제이쿼리나 순수 자바스크립트로 클릭 이벤트를 작성할때 기존의 이벤트가 실행되지 않게 하기 위해서 추가하는 preventDefault를 작성합니다.

아래의 소스처럼 작성하시는 분들도 있을 겁니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {},
  methods: {
    clickEvent: function(event) {
      event.preventDefault()

      console.log('Click! Hello FreeVue Blog!')
    },
  },
})
```

하지만 위에 소개한 매개변수랑 같이 이용할 때에는 조금 복잡해집니다.

```vue
<div id="app">
  <div v-on:click="clickEvent('Vue.js', $event)">Click!</div>
</div>
```

이런 식으로 \$event를 추가로 작성을 해야 event부분을 사용할 수 있습니다.

그런데 Vue.js에서 지원해주는 이벤트 수식어를 이용하면 편합니다.

```vue
<div id="app">
  <div v-on:click.prevent="clickEvent">Click!</div>
</div>
```

이렇게 .prevent하나만 추가하면 됩니다.

이 수식어 말고도 여러 수식어가 있습니다.

```vue
<!-- 이벤트 전파가 중단 -->
<div v-on:click.stop="clickEvent">Click!</div>

<!-- 본인만 실행. 자식 엘리먼트에서는 안됩니다 -->
<div v-on:click.self="clickEvent">Click!</div>

<!-- 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리합니다. -->
<div v-on:click.capture="clickEvent">Click!</div>

<!-- 한번만 트리거 됩니다. -->
<div v-on:click.once="clickEvent"></div>
```

수식어는 체이닝이 가능합니다. 그런데 작성한 순서로 실행이 되므로 주의하시기 바랍니다.

```vue
<!-- 자신에 대한 클릭만 방지합니다. -->
<div v-on:click.self.prevent="clickEvent">Click!</div>

<!-- 모든 클릭을 방지합니다. -->
<div v-on:click.prevent.self="clickEvent">Click!</div>
```

v-on도 v-bind처럼 단축해서 작성이 가능합니다.

```vue
<div id="app">
  <div @click.prevent="clickEvent">Click!</div>
</div>
```
