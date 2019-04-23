---
layout: post
title:  "매일 함수"
date:   2019-04-14
excerpt: "함수형 자바스크립트"
function: true
categories:
- Yesterday Function
tag:
- 함수형
- javascript
---

```javascript
// recordAnimationFrames
// 각 애니메이션 프레임에서 제공된 콜백을 호출합니다.
//
// 재귀를 사용하십시오.
// 실행이 사실이라면 제공된 콜백을 호출하는 window.requestAnimationFrame()을 계속 호출하십시오.
// 기록을 수동으로 제어 할 수 있도록 시작 및 중지의 두 가지 방법으로 객체를 반환합니다.
// 함수가 호출 될 때 아심 적으로 start를 호출하려면 두 번째 인수 인 autoStart를 생략하십시오.

const recordAnimationFrames = (callback, autoStart = true) => {
	let running = true,
		raf;
	const stop = () => {
		running = false;
		cancelAnimationFrame(raf);
	};
	const start = () => {
		running = true;
		run();
	}
	const run = () => {
		raf = requestAnimationFrame(() => {
			callback();
			if (running) run();
		});
	};
	if (autoStart) start();
	return { start, stop };
}

// 예시
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts logging
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```

![예제 이미지 1]({{ site.url }}/images/function/0/20190414.png)

[출처: [http://30.surge.sh/](http://30.surge.sh/)]
