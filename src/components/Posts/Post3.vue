<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Getting Started with Matter.js</h2>
      </div>
      <div class="blogSubtitle">Dec. 12, 2017</div>
    </div>

    <div class="blogText">
      Matter.js is a super fun physics library with excellent documentation (<a href="http://brm.io/matter-js/docs/"
        >Matter.js</a
      >) that can be easily added into a project. Simply <span class="codeBit">npm install matter-js</span> and source
      matter.min.js into your index.
    </div>

    <div class="blogText">
      I've found it easier to get Matter.js up and running when I use it in conjunction with
      <a href="http://p5js.org">p5.js</a> to draw bodies on the canvas. Matter.js can be broken into two functional
      components: an engine for calculating all the physics, and a renderer for drawing bodies on the canvas. Instead of
      using Matter's built-in renderer, we can use p5. (Just run another <span class="codeBit">npm install</span> and
      source it in).
    </div>

    <div class="blogText">
      The following code will add a falling square and a static circle to the canvas. To start off, we can add a few
      abbreviations to save some time later on:
    </div>

    <pre><code>    var Engine = Matter.Engine;
      var World = Matter.World;
      var Bodies = Matter.Bodies;</code></pre>

    <div class="blogText">Then we can add a few bodies ...</div>

    <pre><code>    var box1 = Bodies.rectangle(200, 100, 20, 20);
      var omega = Bodies.circle(500, 500, 100, {isStatic: true});</code></pre>

    <div class="blogText">
      The last (optional) argument passed to the shape constructor is an <span class="codeBit">options</span> object.
      Setting <span class="codeBit">isStatic</span> to 'true' makes the body immobile; if we set
      <span class="codeBit">isSensor</span> to 'true', the body won't participate in any collisions.
    </div>

    <div class="blogText">
      But we mustn't forget to <span class="codeBit">add</span> the bodies to our <span class="codeBit">world</span>!
      p5.js asks for two things: a <span class="codeBit">setup</span> function to tell it how to render the initial
      page, and a <span class="codeBit">draw</span> function to tell it how to update the canvas as time goes on:
    </div>

    <pre><code>    function setup() {
        var canvas = createCanvas(1000,1000);
        var engine = Engine.create();
        var world = engine.world;
        World.add(world, [box1, omega]);
        Engine.run(engine);
      }</code></pre>

    <div class="blogText">After we create our engine and our world, and start our engine, we're ready to draw:</div>

    <pre><code>    function draw() {
        background(251);
        rect(box1.position.x, box1.position.y, 20, 20);
        ellipse(omega.position.x, omega.position.y, 200);
      }</code></pre>

    <div class="blogText">
      We reset the background with every iteration of the <span class="codeBit">draw</span> function in order to clear
      the previous renderings &mdash; otherwise we end up with space-time worms roaming through our canvas.
    </div>

    <div class="blogText">
      An important thing to note when using p5.js in conjunction with Matter.js is that they keep track of bodies
      differently. For instance, p5's <span class="codeBit">ellipse</span> function asks for the body's diameter,
      whereas Matter's <span class="codeBit">circle</span> function asks for the body's radius. Another example of this
      misalignment is that Matter tracks the position of rectangles by their centers, while p5 (as well as vanilla
      canvas) tracks them by their upper-left corners.
    </div>

    <div class="blogText">
      At this point, the possibilities proliferate. With <span class="codeBit">Matter.Mouse</span> and
      <span class="codeBit">Matter.MouseConstraint</span>, you can allow the user to interact with your world's bodies.
      With <span class="codeBit">Matter.Events</span> you can listen for collisions. With
      <span class="codeBit">Matter.Constraint</span> you can attach bodies to each other. Matter even lets you alter the
      world's gravity (with <span class="codeBit">world.gravity.y</span>)!
    </div>

    <div class="blogText">
      And p5 is no slouch. It offers <span class="codeBit">mouseClicked</span> and
      <span class="codeBit">mouseDragged</span> functions that make it easy to interact with the canvas. If you add an
      array to your global scope...
    </div>

    <pre><code>    var balls = [];</code></pre>

    <div class="blogText">...and then add a loop into your <span class="codeBit">draw</span> function...:</div>

    <pre><code id="hardCode">{{loopText}}</code></pre>

    <div class="blogText">
      ...then finally, you can add a <span class="codeBit">mouseDragged</span> function like so:
    </div>
    <pre><code>   function mouseDragged() {
        var randomNum = Math.random()*50;
        var ball = Bodies.circle(mouseX, mouseY, randomNum);
        ball.circleRadius = randomNum/2;
        World.add(world, ball);
        balls.push(ball);
      }</code></pre>
    <div class="blogText">The possibilities sprawl before us!</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post3 extends Vue {
  get loopText() {
    return "    for (var i=0; i<balls.length; i++){\n      var ball = balls[i]; \n      ellipse(ball.position.x, ball.position.y,\n\t   ball.circleRadius);\n    }";
  }
}
</script>
