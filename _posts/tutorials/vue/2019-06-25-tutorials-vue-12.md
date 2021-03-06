---
layout: post
title: '구조와 .vue 파일'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

![결과 이미지 1]({{ site.baseurl }}/assets/images/tutorials/vue/12/img1.jpg)

cli를 실행하면 위와 같은 구조로 생성이 된 것을 확인할 수 있습니다.

먼저 main.js를 보겠습니다.

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

이러한 형태의 소스가 추가되어 있습니다. 하나씩 보자면은

```javascript
import Vue from 'vue'
import App from './App.vue'
```

이 부분에서 vue모듈과 App.vue파일을 불러오고 있습니다.

```javascript
Vue.config.productionTip = false
```

이 부분은 Vue의 전역설정을 하고 있습니다.

productionTip 부분말고 다른 설정들도 많습니다. [[링크](https://kr.vuejs.org/v2/api/index.html#%EC%A0%84%EC%97%AD-%EC%84%A4%EC%A0%95)]에 잘 정리가 되어 있습니다.

```javascript
new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

마지막으로 제일 익숙한 부분입니다. 바로 실질적은 렌더링이 되는 부분입니다.

위의 소스상에서 보면은 아까 불러왔던 App.vue파일을 #app부분에 렌더링을 한다고 적혀있습니다.

main.js에서는 프로젝트의 전역설정을 할 수 있습니다.

> ## .vue 파일

.vue파일을 이용해 컴포넌트를 나누어 사용합니다.

```html
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```

간단하게 App.vue를 이용하여 설명하겠습니다.

크게 세부분으로 나누어 지는데 template, script, style입니다.

- `template` - 렌더링이 될 html부분입니다.
- `script` - 메소드와 데이터등 script부분이 작성됩니다.
- `style` - css를 작성합니다.

이 파일들은 이전에 소개했던 모든 Vue의 기능들을 사용할 수 있습니다.

new Vue는 main.js파일에서 하고 있기 때문에 이 파일들에서는 export만 하면 됩니다.
