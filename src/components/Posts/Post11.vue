<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Drawing the Sierpinski Triangle</h2>
      </div>
      <div class="blogSubtitle">
        Jan. 12, 2018
      </div>
    </div>

    <div class="blogText">
      The other day my friend <a href="https://github.com/bozeman42">Aaron</a> revealed to me a truly magnificent fact.
      By following an outrageously simple algorithm, one can generate the fractal known as the
      <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle"><i>Sierpinski triangle</i></a
      >.
    </div>

    <div class="blogText">
      This is seriously incredible. I've noodled with the idea of drawing the triangles recursively, but that proved
      harder than I anticipated. It is truly amazing that such a seemingly-arbitrary process could generate such
      <i>order</i>. The algorithm can generate a variety of fractals, each possessing the wonderful property that each
      of its parts is similar to &mdash; really, is the <i>same</i> as &mdash; the whole.
    </div>

    <div class="blogText">
      The algorithm is as follows: draw your vertices. Pick a point at random. Pick a vertex at random, and color in
      (with a tiny pixel) the midpoint between your point and your vertex. Then, using the colored-in point as a new
      starting point, pick another random vertex and repeat.
    </div>

    <div class="blogText">
      Marvelously, after many iterations, this process will generate our fractal:
    </div>

    <div layout layout-align="center center">
      <canvas id="sierptriangle" width="500" height="500"></canvas>
      <button ng-click="mc.startSierp()">Start!</button>
      <button ng-click="mc.stopSierp()">Stop!</button>
    </div>

    <div class="blogText">
      Seeing this triangle materialize out of thin air makes me think of that line,
      <i>Euclid alone has looked on beauty bare.</i> It's magic.
    </div>

    <div class="blogText">
      One interesting fact is that our fractal lives somewhere between 1- and 2-dimensional space. How are we to
      understand this? Well, what does it mean for a shape to be <i>n</i>-dimensional? One way of thinking about it is
      the following.
    </div>

    <div class="blogText">
      To say that a shape is 2-dimensional is to say that when you scale its sides by a factor of <i>n</i> (e.g. 3), its
      area grows by a factor of <i>n<sup>2</sup></i> (e.g. 9). To say that a shape is 3-dimensional is to say that when
      you scale its sides by a factor of <i>n</i> (e.g. 5), its volume grows by a factor of <i>n<sup>3</sup></i> (e.g.
      125).
    </div>

    <div class="blogText">
      What happens when we double the length of a side on our Sierpinski triangle? Notice that the whole triangle has
      sides with double the length of each first-level triangle's side. So, because there are three first-level
      triangles, we have a <i>threefold</i> increase in size when we double the side-length. If the fractal were
      2-dimensional, we would expect a fourfold increase, and if it were 1-dimensional, we would expect a twofold
      increase.
    </div>

    <div class="blogText">
      (If you're interested, the precise value of the triangle's dimension is <i>log</i>(3)/<i>log</i>(2) = 1.58. We
      divide the log of the scaled-size by the log of the scaled-length to obtain the dimension. In the 2-dimensional
      case, for example, <i>log</i>(4)/<i>log</i>(2) = 2.)
    </div>

    <div class="blogText">
      Here's another fractal you can generate in the same way:
    </div>

    <div layout layout-align="center center">
      <img width="600" height="auto" src="styles/fractalquad.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post11 extends Vue {}
</script>
