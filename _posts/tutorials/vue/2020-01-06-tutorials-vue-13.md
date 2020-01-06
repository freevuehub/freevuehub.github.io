---
layout: post
title: 'cli로 작업하면서 달라지는 점'
categories: [Tutorials]
image: assets/images/tutorials/common/vue_bg.png
tag: [Vue.js, javascript]
---

오랜만에 작성하는 포스팅입니다. 그동안 글을 정리하거나 어떻게 포스팅을 이어갈지 고민을... 했다기 보다는 일이 바쁘고 블로그 관리에 대한 노하우가 없어서 작성을 미루게 되었습니다. 2020년이 된 지금 다시 한번 마음을 잡고 주기적으로 포스팅을 이어나갈 생각입니다.

이전 글은 `vue-cli`로 제작된 프로젝트에서 앞서 소개한 방법과 달라지는 점을 소개할 생각입니다. 이 포스팅을 읽으시면서 아시겠지만, Vue.js는 SPA를 만들기 위한 프레임워크입니다. 그래서 JS버전이 ES6이상의 문법을 지원합니다. 그리고 앞으로도 해당 버전 이상의 문접을 작성하게 됩니다.

#### script 부분

실제로 앞 포스팅에서 template 및 script, style을 소개하여 전체적인 틀 구조에 개한 설명은 생략하겠습니다. 대신 가장 중요한 script부분을 소개하겠습니다.

작성을 하면 `export default`로 시작해야합니다.

```javascript
export default {}
```
