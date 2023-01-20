<template>
  <div id="jeopardy-app">
    <div id="header">JEOPARDY</div>

    <div id="grid">
      <div class="category" v-for="cat in categoryQuestions">
        <div class="cell cell-title">{{ cat.name }}</div>
        <div class="cell cell-question" v-for="q in cat.questions" @click="clickQuestion">
          <div class="cell-question-inner">
            <div class="front">${{ q.value }}</div>
            <div class="back">
              <!-- {{ q.text }} -->

              <div class="back-inner">{{ q.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { categoryQuestions } from "./questions";

@Component({
  components: {},
})
export default class App extends Vue {
  categoryQuestions = categoryQuestions;
  gridPosition = { x: 0, y: 0, w: 0, h: 0 };

  mounted() {
    const box = document.getElementById("grid")?.getBoundingClientRect();
    this.gridPosition.x = box?.x || 0;
    this.gridPosition.y = box?.y || 0;
    this.gridPosition.w = box?.width || 0;
    this.gridPosition.h = box?.height || 0;
    console.log(categoryQuestions, this.gridPosition);

    window.addEventListener("resize", () => {
      const box = document.getElementById("grid")?.getBoundingClientRect();
      this.gridPosition.x = box?.x || 0;
      this.gridPosition.y = box?.y || 0;
      this.gridPosition.w = box?.width || 0;
      this.gridPosition.h = box?.height || 0;
    });
  }

  // [x] Must get rid of, if click after is opened.
  clickQuestion(ev: MouseEvent) {
    // @ts-ignore
    const currentPosition = ev.target.getBoundingClientRect();

    // @ts-ignore
    const clickedBackInner = Array.from(ev.target.classList).some((className) => className === "back-inner");
    // @ts-ignore
    const parent = clickedBackInner ? ev.target.parentElement.parentElement : ev.target.parentElement;

    // Ignore clicks on borders
    if (!Array.from(parent.classList).some((className: any) => className.includes("inner"))) return;

    if (parent.dataset.flipped === "true") {
      // Send card back to original location
      // parent.style.transition = "unset";
      // parent.style.transformOrigin = "0 0";
      // parent.style.transform = "scale(0.94)";
      // parent.style.width = `${92 / 6}vw`;
      // parent.style.height = `${80 / 6}vh`;
      // parent.parentElement.style.zIndex = 1;
      // parent.dataset.flipped = "false";

      parent.style.display = "none";
      parent.parentElement.style.background = "linear-gradient(to top left, #0000ca, #0000ff)";
      parent.parentElement.style.zIndex = "0"; // Seems to fix really weird bug with cells showing up over newly-clicked question
      return;
    } else {
      // Flip card (with css transition)
      parent.style.transition = "all 0.8s";
      parent.dataset.flipped = "true";

      // This gets rid of text-moving issue on flip
      // @ts-ignore
      parent.querySelector(".back").style.width = this.gridPosition.w + "px";
    }

    const xMove = this.gridPosition.x - currentPosition.x;
    const yMove = this.gridPosition.y - currentPosition.y;
    // Again... unsure why x is negative... Oh! Probably because we flip on y-axis first!
    parent.style.transform = `rotateY(180deg) translate(${-xMove}px, ${yMove}px)`;
    // Transform scale would have been nice, but made text look grainy, so just set width/height instead
    parent.style.width = this.gridPosition.w + "px";
    parent.style.height = this.gridPosition.h + "px";
    parent.parentElement.style.zIndex = 1000;
  }

  /**
   * Few issues
   *
   * 1. [x] On card flip, text changes width -- easy set width to 100vw
   * 2. [x] Cannot select a card again after flipping it -- easy, we weren't reseting flipped flag... and strings, not booleans, lol
   * 3. [x] Add padding to backside....somehow....
   * (We can add a "back-inner" div... but then clicking directly on the text does NOT close the card.. Yeah, working with dumb hack)
   * 4. [x] If you click on border....whole column flips!
   * 5. [x] Real font
   * 6. [?] Do we need websockets??
   *
   * 7. [ ] Turn the cell just plain background, after it has been flipped.
   *
   * 8. [ ] Borders get kinda f-ed up
   *
   * 9. [ ] Sometimes text fade is funky
   */
}
</script>

<style>
@font-face {
  font-family: "ITC Korinna Regular";
  src: local("ITC Korinna Regular"), url(./fonts/Korinna-Regular.otf) format("truetype");
}

body {
  margin: 0;
  padding: 0;
}

#jeopardy-app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: white;
  text-shadow: 2px 2px 5px black;

  padding: 1.4rem;
  font-size: 2.5rem;
  /* font-family: impact; */
  font-family: "ITC Korinna Regular";
  font-weight: bold;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  height: 100vh;
  background-image: url("https://media.timeout.com/images/105263107/750/422/image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

#header {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

#grid {
  display: flex;
  border: solid 3px black;
}

.category {
  display: flex;
  flex-direction: column;
}

.cell {
  background: blue;
  border: solid 4px black;
  color: #ddd;
  text-shadow: 2px 2px 5px black;
  width: calc(92vw / 6);
  height: calc(80vh / 6);
  perspective: 1000px;
}

.cell-question-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.8s;
  transform-style: preserve-3d;
}

.front {
  color: #ffcc00;
  font-size: 4.2vw;
  font-family: impact;
  text-shadow: 3px 3px 10px black;
}

.front:hover {
  color: white;
  transition: color 0.25s ease-out;
  cursor: pointer;
}

.cell-title {
  font-size: 1.5vw;
  line-height: 1.3;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top left, #0000ca, #0000ff);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top left, #0000ca, #0000ff);
}

.back {
  transform: rotateY(180deg);
  font-size: 3.5rem;
}

.back-inner {
  padding: 4rem;
}
</style>
