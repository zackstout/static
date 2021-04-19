<template>
  <div>
    <div class="flex flex-col items-center">
      <h2 class="blogTitle">Getting Started with HTML Canvas Animations</h2>
      <div class="blogSubtitle">Dec. 8, 2017</div>
    </div>

    <div class="blogText">
      Being something of a math/physics nerd, I was delighted to discover that with just the HTML canvas element,
      vanilla JavaScript, and a bit of math, one can easily render pleasing visual illustrations of key mathematical
      relationships.
    </div>

    <!-- ball throw -->

    <div class="blogText">
      For instance, one can illustrate a ball following a parabolic path. To describe the shape of a parabola, you just
      need a quadratic equation:
      <div layout layout-align="center center" class="math">
        <i>f(x) = ax<sup>2</sup> + bx + c</i>
      </div>
      As a bonus, since one natural way of writing the code ensures that the x-value changes linearly (at a constant
      rate), the ball will behave as if it is under the influence of gravity! The variable
      <span class="codeBit">ctx</span> is what allows us to interact with the canvas:
    </div>

    <pre><code layout layout-align="center center">    var canvas = document.getElementById('ballCanvas');
        var ctx = canvas.getContext("2d");
        vm.x = 0;
        function ball() {
            ctx.clearRect(0,0,400,400);
            var xStandard = (vm.x - 200)/100;
            var yPix = Math.pow(xStandard, 2)*100;
            ctx.translate(200, 0);
            ctx.beginPath();
            ctx.arc(xStandard*100, yPix, 5, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = 'purple';
            ctx.fill();
            ctx.translate(-200, 0);
            vm.x += 5;
          }</code></pre>

    <div class="blogText">
      This function keeps track of the ball's position. We can call it many times per second, each time clearing the
      canvas and re-drawing the ball at a slightly different position.
    </div>

    <div class="blogText">
      Canvas's coordinate system starts at the upper lefthand corner; the value of <i>y</i> increases as you move
      further down the screen, and <i>x</i>'s value increases as you move right.
    </div>

    <div class="blogText">
      We translate to a new origin to simplify our calculation, moving to the middle of the top of our 400x400 canvas,
      to (200, 0). <i>(Don't forget to translate back out before re-drawing the ball!)</i>. Then we divide by 100 to
      standardize our units before squaring the value of the ball's x-coordinate, which gives us the ball's
      y-coordinate.
    </div>

    <div class="blogText">
      Now that we know the ball's position, it's straightforward to draw it: we begin a new path, call canvas's
      <span class="codeBit">arc()</span> method, draw the ball's outline with <span class="codeBit">stroke()</span>, and
      color it in with <span class="codeBit">fill()</span>. Finally, we ensure our function is called every 50
      milliseconds:
    </div>

    <pre><code layout layout-align="center center">vm.throwBall = function() {
            setInterval(ball, 50);
          };</code></pre>

    <div layout layout-align="center center">
      <canvas id="parabolaBall" width="400" height="400"></canvas>
      &emsp;<button ng-click="cc.throwBall()">Throw</button>
    </div>

    <!-- parabola  -->
    <div class="blogText">
      To draw a parabolic curve onto the canvas requires a bit more thought. Canvas has built-in functions to draw
      circular and elliptical arcs, but if you want to draw a specific curve, you need to break things down into small
      intervals (borrowing an idea from calculus) and connect the dots with straight lines. When the intervals are small
      enough, the concatentation of straight lines will appear curve-like.
    </div>

    <pre><code layout layout-align="center center">function parabola(x, L, a, dir) {
            for (var i = 0; i &lt; x; i++) {
              ctx.moveTo(i*L + dir*200, a*Math.pow(i*L/100, 2)*100 + i*L + 100);
              ctx.lineTo((i+1)*L + dir*200, a*Math.pow((i+1)*L/100, 2)*100 + (i+1)*L + 100);
              ctx.stroke();
            }
          }</code></pre>

    <div class="blogText">
      In this function, <i>x</i> controls the number of iterations, and <i>L</i> controls the length of the line segment
      that is drawn during each iteration. We're hard-coding in the values of <i>b</i> and <i>c</i>. The idea is to
      begin the line (with <span class="codeBit">moveTo()</span>) at one point on the parabola, and end it at a nearby
      point on the parabola with <span class="codeBit">lineTo()</span>. Remember to draw the line with
      <span class="codeBit">stroke()</span>!
    </div>

    <div class="blogText">
      We use canvas's built-in linear transformation function to reflect the first half of the parabola over the y-axis:
    </div>

    <pre><code layout layout-align="center center">ctx.transform(-1, 0, 0, 1, 0, 0);</code></pre>

    <div class="blogText">
      Don't forget to transform again when you're done drawing the second half &mdash; otherwise all your future
      commands will assume your canvas is still flipped over. (You can use the same function, since the transformation
      is symmetric.)
    </div>

    <div layout layout-align="center center">
      <canvas id="parabola" width="400" height="400"></canvas>
      &emsp;&emsp;<md-slider
        ng-model="cc.params.p"
        min="5"
        max="500"
        ng-change="cc.parabola2(200,1,1/(cc.params.p*4/100),0,0,1)"
        aria-label="parab"
      ></md-slider>
    </div>

    <!-- polygon -->
    <div layout layout-align="center center" class="blogText">
      We can apply the same principle to write a function that draws a circle or an ellipse (as well as any regular
      polygon!). As we increase the number of sides (represented in this function by the argument x), the shape appears
      more curve-like.
    </div>

    <pre><code layout layout-align="center center">function circle(a, b, x, r) {
            ctx.beginPath();
            for (var i = 0; i &lt; x; i++) {
              ctx.moveTo(r*a*Math.cos(i*2*Math.PI/x), r*b*Math.sin(i*2*Math.PI/x));
              ctx.lineTo(r*a*Math.cos((i+1)*2*Math.PI/x), r*b*Math.sin((i+1)*2*Math.PI/x));
              ctx.stroke();
            }
          }</code></pre>

    <div layout layout-align="center center">
      <canvas id="polygon" width="400" height="400"></canvas>
      &emsp;&emsp;<md-slider
        ng-model="cc.n"
        min="2"
        max="18"
        ng-change="cc.drawPolygon(cc.n)"
        aria-label="polygon"
      ></md-slider>
    </div>

    <div class="blogText">
      One key thing to note here is the <span class="codeBit">beginPath</span> function. Often you will want to clear
      your canvas (with a <span class="codeBit">clearRect()</span> method call), and in order to draw on your freshly
      cleared canvas you will need to begin a new path.
    </div>
    <div layout="column" layout-align="center center" id="post1">
      <h2 class="blogTitle">Getting Started with HTML Canvas Animations</h2>
      <div class="blogSubtitle">Dec. 8, 2017</div>
    </div>

    <div class="blogText">
      Being something of a math/physics nerd, I was delighted to discover that with just the HTML canvas element,
      vanilla JavaScript, and a bit of math, one can easily render pleasing visual illustrations of key mathematical
      relationships.
    </div>

    <!-- ball throw -->

    <div class="blogText">
      For instance, one can illustrate a ball following a parabolic path. To describe the shape of a parabola, you just
      need a quadratic equation:
      <div layout layout-align="center center" class="math">
        <i>f(x) = ax<sup>2</sup> + bx + c</i>
      </div>
      As a bonus, since one natural way of writing the code ensures that the x-value changes linearly (at a constant
      rate), the ball will behave as if it is under the influence of gravity! The variable
      <span class="codeBit">ctx</span> is what allows us to interact with the canvas:
    </div>

    <pre><code layout layout-align="center center">    var canvas = document.getElementById('ballCanvas');
        var ctx = canvas.getContext("2d");
        vm.x = 0;
        function ball() {
            ctx.clearRect(0,0,400,400);
            var xStandard = (vm.x - 200)/100;
            var yPix = Math.pow(xStandard, 2)*100;
            ctx.translate(200, 0);
            ctx.beginPath();
            ctx.arc(xStandard*100, yPix, 5, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = 'purple';
            ctx.fill();
            ctx.translate(-200, 0);
            vm.x += 5;
          }</code></pre>

    <div class="blogText">
      This function keeps track of the ball's position. We can call it many times per second, each time clearing the
      canvas and re-drawing the ball at a slightly different position.
    </div>

    <div class="blogText">
      Canvas's coordinate system starts at the upper lefthand corner; the value of <i>y</i> increases as you move
      further down the screen, and <i>x</i>'s value increases as you move right.
    </div>

    <div class="blogText">
      We translate to a new origin to simplify our calculation, moving to the middle of the top of our 400x400 canvas,
      to (200, 0). <i>(Don't forget to translate back out before re-drawing the ball!)</i>. Then we divide by 100 to
      standardize our units before squaring the value of the ball's x-coordinate, which gives us the ball's
      y-coordinate.
    </div>

    <div class="blogText">
      Now that we know the ball's position, it's straightforward to draw it: we begin a new path, call canvas's
      <span class="codeBit">arc()</span> method, draw the ball's outline with <span class="codeBit">stroke()</span>, and
      color it in with <span class="codeBit">fill()</span>. Finally, we ensure our function is called every 50
      milliseconds:
    </div>

    <pre><code layout layout-align="center center">vm.throwBall = function() {
            setInterval(ball, 50);
          };</code></pre>

    <div layout layout-align="center center">
      <canvas id="parabolaBall" width="400" height="400"></canvas>
      &emsp;<button ng-click="cc.throwBall()">Throw</button>
    </div>

    <!-- parabola  -->
    <div class="blogText">
      To draw a parabolic curve onto the canvas requires a bit more thought. Canvas has built-in functions to draw
      circular and elliptical arcs, but if you want to draw a specific curve, you need to break things down into small
      intervals (borrowing an idea from calculus) and connect the dots with straight lines. When the intervals are small
      enough, the concatentation of straight lines will appear curve-like.
    </div>

    <pre><code layout layout-align="center center">function parabola(x, L, a, dir) {
            for (var i = 0; i &lt; x; i++) {
              ctx.moveTo(i*L + dir*200, a*Math.pow(i*L/100, 2)*100 + i*L + 100);
              ctx.lineTo((i+1)*L + dir*200, a*Math.pow((i+1)*L/100, 2)*100 + (i+1)*L + 100);
              ctx.stroke();
            }
          }</code></pre>

    <div class="blogText">
      In this function, <i>x</i> controls the number of iterations, and <i>L</i> controls the length of the line segment
      that is drawn during each iteration. We're hard-coding in the values of <i>b</i> and <i>c</i>. The idea is to
      begin the line (with <span class="codeBit">moveTo()</span>) at one point on the parabola, and end it at a nearby
      point on the parabola with <span class="codeBit">lineTo()</span>. Remember to draw the line with
      <span class="codeBit">stroke()</span>!
    </div>

    <div class="blogText">
      We use canvas's built-in linear transformation function to reflect the first half of the parabola over the y-axis:
    </div>

    <pre><code layout layout-align="center center">ctx.transform(-1, 0, 0, 1, 0, 0);</code></pre>

    <div class="blogText">
      Don't forget to transform again when you're done drawing the second half &mdash; otherwise all your future
      commands will assume your canvas is still flipped over. (You can use the same function, since the transformation
      is symmetric.)
    </div>

    <div layout layout-align="center center">
      <canvas id="parabola" width="400" height="400"></canvas>
      &emsp;&emsp;<md-slider
        ng-model="cc.params.p"
        min="5"
        max="500"
        ng-change="cc.parabola2(200,1,1/(cc.params.p*4/100),0,0,1)"
        aria-label="parab"
      ></md-slider>
    </div>

    <!-- polygon -->
    <div layout layout-align="center center" class="blogText">
      We can apply the same principle to write a function that draws a circle or an ellipse (as well as any regular
      polygon!). As we increase the number of sides (represented in this function by the argument x), the shape appears
      more curve-like.
    </div>

    <pre><code layout layout-align="center center">function circle(a, b, x, r) {
            ctx.beginPath();
            for (var i = 0; i &lt; x; i++) {
              ctx.moveTo(r*a*Math.cos(i*2*Math.PI/x), r*b*Math.sin(i*2*Math.PI/x));
              ctx.lineTo(r*a*Math.cos((i+1)*2*Math.PI/x), r*b*Math.sin((i+1)*2*Math.PI/x));
              ctx.stroke();
            }
          }</code></pre>

    <div layout layout-align="center center">
      <canvas id="polygon" width="400" height="400"></canvas>
      &emsp;&emsp;<md-slider
        ng-model="cc.n"
        min="2"
        max="18"
        ng-change="cc.drawPolygon(cc.n)"
        aria-label="polygon"
      ></md-slider>
    </div>

    <div class="blogText">
      One key thing to note here is the <span class="codeBit">beginPath</span> function. Often you will want to clear
      your canvas (with a <span class="codeBit">clearRect()</span> method call), and in order to draw on your freshly
      cleared canvas you will need to begin a new path.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post8 extends Vue {}
</script>
