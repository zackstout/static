<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Building Snake</h2>
      </div>
      <div class="blogSubtitle">Jan. 13, 2018</div>
    </div>

    <div class="blogText">Let's build Snake using JavaScript! (I know, I should have written it in Python...)</div>

    <div class="blogText">
      First we'll need a grid. The code here is quite similar to what I used to build a
      <span class="linkage" ng-click="cc.goToPost(10)">Minesweeper</span> grid. Instead of adding a
      <span class="codeBit">&lt;button></span> to each <span class="codeBit">&lt;td></span>, we add a
      <span class="codeBit">&lt;div></span>. But just as before, we give it an <span class="codeBit">id</span> to keep
      track of its position and a class to color it blue.
    </div>

    <div class="blogText">
      Next we'll need a snake. We can start by drawing a 4-length snake emerging from the top of the playing field:
    </div>

    <pre><code layout layout-align="center center">        var snake = [{r: 0, c: 4}, {r: 1, c: 4}, {r: 2, c: 4}, {r: 3, c: 4}];
        var direction = 'd';</code></pre>

    <div class="blogText">In order to color our snake, we can alter each <span class="codeBit">div</span>'s class:</div>

    <pre><code layout layout-align="center center">     snake.forEach(function(cell) {
        var name = 'col' + cell.c + 'row' + cell.r;
        var el = document.getElementById(name);
        el.className = 'snakeLive';
      });</code></pre>

    <div class="blogText">
      How do we move our snake? The key insight is that to move forward one step, you cut off the snake's current tail
      and move it to the position of the new head (which depends on which direction the snake is moving). So in a
      function called <span class="codeBit">changeSnake()</span>, we change the tail back to blue, remove it from the
      <span class="codeBit">snake</span> array, and then <span class="codeBit">push</span> the new head onto that array:
    </div>

    <pre><code layout layout-align="center center">        var name1 = 'col' + tail.c + 'row' + tail.r;
        document.getElementById(name1).className = 'snakeCell';

        tail = snake.shift();
        head = snake[snake.length - 1];
        snake.push(newHead);</code></pre>

    <div class="blogText">
      For example, if the snake were moving downward we would set the <span class="codeBit">newHead</span> with
    </div>

    <pre><code layout layout-align="center center">newHead = {
    r: head.r + 1,
    c: head.c
        };</code></pre>

    <div class="blogText">
      To keep track of the user's input for the snake's direction, we use a
      <span class="codeBit">switch</span> statement to check whether the user has most recently pressed the <i>a</i>,
      <i>s</i>, <i>d</i> or <i>w</i> key:
    </div>

    <pre><code layout layout-align="center center">    window.onkeydown = function(e) {
          switch(e.keyCode) {
            case 83:
            direction = 'd';
            break;
            . . .
        })</code></pre>

    <div class="blogText">
      Finally, we add apples and lengthen our snake when it's fed. The code for this is fairly simple if you've followed
      along so far.
    </div>

    <div class="blogText">To run our game, we write something like</div>

    <pre><code layout layout-align="center center">        vm.startSnake = function() {
          snakeInt = setInterval(changeSnake, 230);
        };</code></pre>

    <div class="blogText">
      Woohoo! We've got Snake! There are a few bugs &mdash; the snake can cross itself, and apples can spawn inside of
      it &mdash; but our game works mostly as intended. In fact, it would be a fun challenge to calculate the expected
      number of apples we could eat before spawning one inside the snake. (Remember, use the <i>a</i>, <i>s</i>,
      <i>w</i> and <i>d</i> keys to navigate.)
    </div>

    <br />
    <div layout layout-align="center center">
      <table id="snakeTable"></table>
      <button ng-click="cc.startSnake()">Start!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post5 extends Vue {}
</script>
