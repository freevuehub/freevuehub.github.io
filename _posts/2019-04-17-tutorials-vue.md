---
layout: post
title: 'v-show, v-if'
categories: [Tutorials]
image: assets/images/function/0/20190415.png
tag: [Vue.js, javascript]
---

이전 포스팅은 텍스트를 View단에 그리는 기능들을 봤습니다. 이번에는 좀 더 개발적인 느낌이 나는 기능들을 소개해보겠습니다.

> ## v-show

```vue
<div id="app">
  <p v-show="true">v-show의 특징</p>
</div>
```

"#app" 태그 안의 내용을 위와 같이 'p'태그를 작성하고, v-show를 추가해보겠습니다. 결과는 아래의 사진처럼 나옵니다.

![결과 이미지 1]({{ site.url }}/images/vue/4/img1.png)

아직까지는 뭐가 바뀐 건지 잘 모르겠습니다. 그러면 코드를 살짝 수정하여 비교해보겠습니다.

```vue
<div id="app">
  <p v-show="false">v-show의 특징</p>
</div>
```

v-show안에 값을 true에서 false로 바꿨습니다. 그러면 아래 사진처럼 재미있는 결과가 나옵니다.

![결과 이미지 2]({{ site.url }}/images/vue/4/img2.png)

기존의 true에서 false로 바꾸니 <p>태그에 display:none; 스타일이 들어갔습니다.

이처럼 v-show는 안에 값이 true이면 보여지고, false이면 display:none; 스타일을 추가하여 지워줍니다. 조금 더 응용을 해보겠습니다.

우선 소스를 수정해보겠습니다.

```vue
<div id="app">
  <p v-show="'show' == view">v-show의 특징</p>
</div>
```

위와 같이 'show'라는 문자열이 view와 같은지 비교하는 조금 더 복잡한 조건을 걸었습니다. 그리고 script부분도 수정해보겠습니다.

```javascript
var model = 'show'

var App = new Vue({
  el: '#app',
  data: {
    view: model,
  },
})
```

model에 'show'라는 string을 지정하고, model을 data의 view에 추가했습니다.

![결과 이미지 3]({{ site.url }}/images/vue/4/img3.png)

결과는 v-show안에 있던 조건이 true가 되기 때문에 View단에 잘 보여집니다.

조금 더 다르게 응용을 해보겠습니다. 스크립트는 수정을 하지 않고 #app부분만 수정을 해보겠습니다.

```vue
<div id="app">
  <p v-show="show">v-show의 특징</p>
</div>
```

v-show에 show라는 조건을 걸었습니다. 하지만 스크립트는 수정을 하지 않았기 때문에 show라는 값은 없습니다. 결국 show는 undefined입니다.

![결과 이미지 4]({{ site.url }}/images/vue/4/img4.png)

당연히 결과는 <p>태그를 출력하지 않습니다. 그리고 console창을 보시면

'show라는 메소드나 프로퍼티가 없지만 렌더링을 한다.'라는 내용의 에러가 뜹니다.

```
[Vue warn]: Property or method "show" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
```

> ## v-if, v-else-if, v-else

v-if는 v-show랑 기능이 같습니다. 조건이 true이면 보여주고 아니면 보여주지 않습니다. 하지만 약간의 차이가 있습니다.

코드를 수정해보겠습니다.

```vue
<div id="app">
  <p v-if="false">v-if의 특징</p>
</div>
```

이렇게 작성을 하면 <p>태그는 안보인다는 것을 예상할 수 있습니다. 하지만 결과가 다르게 나옵니다.

![결과 이미지 5]({{ site.url }}/images/vue/4/img5.png)

사진처럼 v-if의 경우는 v-show와 다르게 태그를 생성하지 않습니다. 이 차이점은 매우 중요합니다.

그리고 추가적인 기능으로

```vue
<div id="app">
  <p v-if="false">v-if의 특징</p>
  <p v-else>v-else의 특징</p>
</div>
```

이런 식으로 위에서 v-if를 사용했다면 바로 아래 형제태그에 v-else를 사용할 수 있습니다.

![결과 이미지 6]({{ site.url }}/images/vue/4/img6.png)

v-else가 있으니 v-else-if도 있습니다.

기존의 스크립트를 응용해서 v-else-if에 조건을 걸었습니다. 앞서 봤던 것처럼 아래 조건은 true입니다. 그러므로 아래의 <p>태그는 출력이 됩니다.

```vue
<div id="app">
  <p v-if="false">v-if의 특징</p>
  <p v-else-if="'show' == view">v-else-if의 특징</p>
</div>
```

![결과 이미지 7]({{ site.url }}/images/vue/4/img7.png)

이렇게 v-show와 v-if를 비교하면서 봤습니다.
