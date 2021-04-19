<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">More Canvas: Fun with Conic Sections</h2>
      </div>
      <div class="blogSubtitle">
        Dec. 10, 2017
      </div>
    </div>

    <!-- parabola defn  -->
    <div class="blogText">
      Now that we're familiar with the basic tools of the canvas, we can illustrate some cool facts about conic
      sections. For instance, we can spin up a nice visualization of the parabola's defining property. Every parabola
      has a focus and a directrix, and obeys the rule that every point on the parabola is equidistant from the
      parabola's focus and its directrix (pictured as a dotted line).
    </div>

    <div layout layout-align="center center">
      <canvas id="ball" height="800" width="800"></canvas>
      &emsp;
      <md-slider ng-model="mc.x" ng-change="mc.drawBall(mc.x)" min="250" max="750" aria-label="parabDefn"></md-slider>
    </div>

    <!-- ellipse defn  -->

    <div class="blogText">
      Similarly, we can dynamically illustrate the defining property of an ellipse: each point on an elliptical path
      obeys the rule that the sum of its distances from the foci is constant.
      <!-- One can imagine a string stretched from one focus to the ball to the other focus, retaining its length throughout the ball's path. -->
    </div>

    <div class="blogText">
      We use the parametric equations for an ellipse,
      <div layout layout-align="center center" class="math">
        <i>x(t) = acos(t)<br />y(t) = bsin(t)</i>
      </div>
      to draw the ball that follows our elliptical path:

      <pre><code layout layout-align="center center">ctx.beginPath();
      var x = 250*a*Math.cos((theta/100));
      var y = 250*b*Math.sin(theta/100);
      ctx.arc(x, y, 10, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = 'yellow';
      ctx.fill();
    </code></pre>
    </div>

    <div class="blogText">
      If we also draw in the ellipse's tangent at each point, we have an illustration of the fact that an ellipse's
      focal lines (lines from each focus to a point on the ellipse) make equal angles with the ellipse's tangent.
    </div>

    <div layout="row">
      <div flex="70" layout layout-align="center center">
        <canvas id="ellipse" width="700" height="700"></canvas>
      </div>
      <div layout="column" flex="30">
        <br /><br />
        <div>
          Horizontal Stretch:<md-slider
            min="25"
            max="200"
            ng-model="mc.a"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseA"
          ></md-slider>
        </div>
        <div>
          Vertical Stretch:
          <md-slider
            min="25"
            max="200"
            ng-model="mc.b"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseB"
          ></md-slider>
        </div>
        <div>
          Ball's Position:
          <md-slider
            min="0"
            max="628"
            ng-model="mc.theta"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseTheta"
          ></md-slider>
        </div>
        <div>
          <button ng-click="mc.toggleTangent()">Show tangent</button>
        </div>
      </div>
    </div>

    <div class="blogText">
      Another way of saying it is: were you to send a ball toward an elliptical wall from one of its foci, the ball
      would bounce off of the wall and end up at the other focus. In the same way, sound waves bounce off the walls of
      elliptical rooms called "<a href="https://en.wikipedia.org/wiki/Whispering_gallery">whispering rooms</a>",
      allowing people standing at one focus to hear what is whispered by someone standing at the other focus!
    </div>

    <div class="blogText">
      Similarly, balls shot out of a parabola's focus will bounce off its wall and shoot straight down, in a path
      perpendicular to the directrix. Said another way, all light rays passing into a parabolic shape will reflect off
      the wall and pass through its focus.
    </div>

    <div layout layout-align="center center">
      <canvas id="parabReflection" width="800" height="800"></canvas>
      &emsp;
      <md-slider
        min="250"
        max="750"
        ng-model="mc.x4"
        ng-change="mc.drawBall4(mc.x4)"
        aria-label="parabReflection"
      ></md-slider>
    </div>

    <!-- parabola orthogonal -->

    <div class="blogText">
      Finally, we can illustrate the fact that a parabola's orthogonal tangents intersect on the directrix. Moreover,
      the line connecting two points on the parabola that have orthogonal tangents will always contain the focus! So
      there are an infinite number of right triangles living between a parabola and its directrix.
    </div>

    <div layout layout-align="center center">
      <canvas id="parabOrth" width="800" height="800"></canvas>
      &emsp;<md-slider
        min="250"
        max="493"
        ng-model="mc.x3"
        ng-change="mc.drawBall3(mc.x3)"
        aria-label="parabolaOrth"
      ></md-slider>
    </div>

    <div layout="column" layout-align="center center" id="post2">
      <div>
        <h2 class="blogTitle">More Canvas: Fun with Conic Sections</h2>
      </div>
      <div class="blogSubtitle">
        Dec. 10, 2017
      </div>
    </div>

    <!-- parabola defn  -->
    <div class="blogText">
      Now that we're familiar with the basic tools of the canvas, we can illustrate some cool facts about conic
      sections. For instance, we can spin up a nice visualization of the parabola's defining property. Every parabola
      has a focus and a directrix, and obeys the rule that every point on the parabola is equidistant from the
      parabola's focus and its directrix (pictured as a dotted line).
    </div>

    <div layout layout-align="center center">
      <canvas id="ball" height="800" width="800"></canvas>
      &emsp;
      <md-slider ng-model="mc.x" ng-change="mc.drawBall(mc.x)" min="250" max="750" aria-label="parabDefn"></md-slider>
    </div>

    <!-- ellipse defn  -->

    <div class="blogText">
      Similarly, we can dynamically illustrate the defining property of an ellipse: each point on an elliptical path
      obeys the rule that the sum of its distances from the foci is constant.
      <!-- One can imagine a string stretched from one focus to the ball to the other focus, retaining its length throughout the ball's path. -->
    </div>

    <div class="blogText">
      We use the parametric equations for an ellipse,
      <div layout layout-align="center center" class="math">
        <i>x(t) = acos(t)<br />y(t) = bsin(t)</i>
      </div>
      to draw the ball that follows our elliptical path:

      <pre><code layout layout-align="center center">ctx.beginPath();
      var x = 250*a*Math.cos((theta/100));
      var y = 250*b*Math.sin(theta/100);
      ctx.arc(x, y, 10, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = 'yellow';
      ctx.fill();
    </code></pre>
    </div>

    <div class="blogText">
      If we also draw in the ellipse's tangent at each point, we have an illustration of the fact that an ellipse's
      focal lines (lines from each focus to a point on the ellipse) make equal angles with the ellipse's tangent.
    </div>

    <div layout="row">
      <div flex="70" layout layout-align="center center">
        <canvas id="ellipse" width="700" height="700"></canvas>
      </div>
      <div layout="column" flex="30">
        <br /><br />
        <div>
          Horizontal Stretch:<md-slider
            min="25"
            max="200"
            ng-model="mc.a"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseA"
          ></md-slider>
        </div>
        <div>
          Vertical Stretch:
          <md-slider
            min="25"
            max="200"
            ng-model="mc.b"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseB"
          ></md-slider>
        </div>
        <div>
          Ball's Position:
          <md-slider
            min="0"
            max="628"
            ng-model="mc.theta"
            ng-change="mc.drawEllipse(mc.a/100, mc.b/100, mc.theta)"
            aria-label="ellipseTheta"
          ></md-slider>
        </div>
        <div>
          <button ng-click="mc.toggleTangent()">Show tangent</button>
        </div>
      </div>
    </div>

    <div class="blogText">
      Another way of saying it is: were you to send a ball toward an elliptical wall from one of its foci, the ball
      would bounce off of the wall and end up at the other focus. In the same way, sound waves bounce off the walls of
      elliptical rooms called "<a href="https://en.wikipedia.org/wiki/Whispering_gallery">whispering rooms</a>",
      allowing people standing at one focus to hear what is whispered by someone standing at the other focus!
    </div>

    <div class="blogText">
      Similarly, balls shot out of a parabola's focus will bounce off its wall and shoot straight down, in a path
      perpendicular to the directrix. Said another way, all light rays passing into a parabolic shape will reflect off
      the wall and pass through its focus.
    </div>

    <div layout layout-align="center center">
      <canvas id="parabReflection" width="800" height="800"></canvas>
      &emsp;
      <md-slider
        min="250"
        max="750"
        ng-model="mc.x4"
        ng-change="mc.drawBall4(mc.x4)"
        aria-label="parabReflection"
      ></md-slider>
    </div>

    <!-- parabola orthogonal -->

    <div class="blogText">
      Finally, we can illustrate the fact that a parabola's orthogonal tangents intersect on the directrix. Moreover,
      the line connecting two points on the parabola that have orthogonal tangents will always contain the focus! So
      there are an infinite number of right triangles living between a parabola and its directrix.
    </div>

    <div layout layout-align="center center">
      <canvas id="parabOrth" width="800" height="800"></canvas>
      &emsp;<md-slider
        min="250"
        max="493"
        ng-model="mc.x3"
        ng-change="mc.drawBall3(mc.x3)"
        aria-label="parabolaOrth"
      ></md-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post14 extends Vue {}
</script>
