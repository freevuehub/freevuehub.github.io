---
layout: post
title: '라이프사이클'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

라이프사이클이란 Vue가 선언되서 인스턴스가 생성되고 나갈때 까지의 단계들입니다.

아래의 사진을 보면 쉽게 이해될 겁니다.

![결과 이미지 1]({{ site.baseurl }}/assets/images/tutorials/vue/7/img1.png)

전부 활용하면 좋지만 주로 사용되는 부분들은 created, mounted, updated, destroyed 입니다.

하나씩 설명하면

- created: 인스턴스가 생성이 되면 작동됩니다.
- mounted: DOM이 그려지면 작동됩니다.
- updated: data가 변경이 되고 나서 작동이 됩니다.
- destroyed: Vue인스턴스를 나가면 작동이 됩니다.

각각의 before들은 그 이전에 작동이 됩니다.

순서와 사용법을 코드로 같이 보겠습니다.

```javascript
var App = new Vue({
  el: '#app',
  data: {
    // State 값
  },
  beforeCreate: {
    // 인스턴스 생성 전
  },
  created: {
    // 인스턴스 생성 후
  },
  beforeMount: {
    // 렌더링 전
  },
  mounted: {
    // 렌더링 후
  },
  beforeUpdate: {
    // State 변경 전
  },
  updated: {
    // State 변경 후
  },
  beforeDestroy: {
    // 인스턴스 해제 전 (컴포넌트 제거 전)
  },
  destroyed: {
    // 인스턴스 해제 후 (컴포넌트 제거 )
  },
})
```

이렇게 순서대로 실행이 됩니다. 꼭 다 사용할 필요는 없고 필요한 부분만 골라서 사용하면 됩니다.

다음 포스팅에는 Vue의 state관리와 그것을 응용한 웹을 만들어 보겠습니다.
