<img width="1430" alt="canvasg" src="https://user-images.githubusercontent.com/84780174/160053398-7c4806b6-af6b-42ae-af2f-93b6d1539563.png">

<br/>
๐ https://limhyejeong.github.io/canvasgallery/index.html

<br/><br/>

# โณ๏ธ ์ ์ ์๋

HTML5์ Canvas๋ฅผ ํ์ฉํ์ฌ ๋ง๋  ์์๋ฌผ๋ค์ ๊ฐค๋ฌ๋ฆฌ ์คํ์ผ์ผ๋ก ์ ๋ฆฌํ์๋ค.


<br/><br/>

# ๐งฉ ์ธํฐ๋์

- ๊ฐ๋ก ์คํฌ๋กค
- ๋ง์ฐ์ค ํธ๋ฒ ์ ํ๋ฆฌ๋ทฐ ์์ ์ฌ์

<br/><br/>

# ๐จ ๊ตฌํ ๋ฐฉ๋ฒ & ์ฝ๋
<br/>

## 1. ๊ฐ๋ก ์คํฌ๋กค

ํ๋ก์ ํธ๋ฅผ ๋๋ฌ์ผ ul์ -90๋๋ก ๋๋ ค ๊ฐ๋ก๋ก ๊ธด ์ค๋ธ์ ํธ๋ฅผ ๋ง๋ค๊ณ 

๋ด๋ถ li ํ๊ทธ๋ ์  ๋ฐฉํฅ์ผ๋ก ๋๋ ค ์ ๋๋ก ๋ณด์ผ ์ ์๊ฒ ํ์๋ค.

```css
.canvaslist ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    transform: rotate(-90deg) translate3d(0, -100vh, 0);
    transform-origin: right top;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vw;
    perspective: 1px;
    transform-style: preserve-3d;
}

.canvaslist ul li {
    transform: rotate(90deg) translateY(-10vh);
}
```
<br/><br/>
## 2. ํ๋ก๊ทธ๋์ค ๋ฐ

ํ๋ก์ ํธ ๋ฆฌ์คํธ(ul) ์์์ ์คํฌ๋กค ํ  ๋๋ง๋ค

์คํฌ๋กค y์์น๊ฐ์ ํ๋ฉด width๊ฐ์ ๋น๋กํ์ฌ,

์คํฌ๋กค์ ๋ด๋ฆด ์๋ก ํ๋ก๊ทธ๋์ค ๋ฐ์ width๊ฐ ๋์ด๋๊ฒ ๋ง๋ค์๋ค.

```jsx
canvaslist.onscroll = function () {
    progressBar()
};

// progress bar
function progressBar() {
    let winScroll = document.body.scrollTop || canvaslist.scrollTop;
    let height = canvaslist.scrollHeight - canvaslist.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}
```
<br/><br/>
## 3. ๋ง์ฐ์ค ํธ๋ฒ ์ ๋์์ ์ฌ์

๊ธฐ์กด movํ์ผ์ ์น์ ์ต์ ํ๋ video ํ์์ธ

webm ํ์์ผ๋ก ๋ณํ ํ ์ฝ์ํ์๋ค.

```html
<video loop muted>
	<source src="./canvas/p5-spacefield/spacefield.webm" type="video/webm">
</video>
```

์๋ฐ์คํฌ๋ฆฝํธ **HTMLMediaElement.play()** ๋น๋์ค ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์๋ค.

๊ฐ์ฒด ์์ ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆฌ๋ฉด ๋น๋์ค๊ฐ ์ฌ์๋๋ฉฐ

๋ง์ฐ์ค๊ฐ ๋ ๋๋ฉด ๋น๋์ค๊ฐ ์ผ์์ ์ง๋๋ค.

```jsx
videoElem.addEventListener('mouseenter', handlePlayButton, false);
videoElem.addEventListener('mouseleave', handlePlayButton, false);

async function playVideo() {
	try {
		await videoElem.play();
	} catch (err) {
		console.log(err);
	}
}
    
function handlePlayButton() {
	if (videoElem.paused) {
		playVideo();
	} else {
		videoElem.pause();
	}
}
```

ํด๋น ๋ฉ์๋ ํ์์ ๋ฐ๋ฅด์ง ์์ผ๋ฉด ์ค๋ฅ๊ฐ ๋๋ค. (๋งํฌ)

[HTMLMediaElement.play() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
