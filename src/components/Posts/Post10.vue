<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">The Mandelbrot Set</h2>
      </div>
      <div class="blogSubtitle">
        Jan. 20, 2018
      </div>
    </div>

    <div class="blogText">
      Lately I've been growing more and more fascinated by complicated systems or patterns that emerge out of very
      simple rules. Conway's <a href="https://github.com/zackstout/Game-Of-Life">Game of Life</a> and the Sierpinski
      triangle are a few examples.
    </div>

    <div class="blogText">
      Another well-known example of astounding complexity arising out of sparse rules is the Mandelbrot set. The set
      divides the plane into two parts: points that are in the set, and points that aren't.
    </div>

    <div class="blogText">
      In order to understand how we decide whether or not a point belongs to the Mandelbrot set, we need to know a bit
      about complex numbers. A complex number, e.g. <span class="mathBit">z = a + b * i</span>, contains a
      <i>real</i> component (<i>a</i>) and an <i>imaginary</i> component (<i>b * i</i>). Since we need two real numbers
      (<i>a</i> and <i>b</i>) to represent a complex number, it's helpful to think of complex numbers as living on a
      two-dimensional plane rather than on a line.
    </div>

    <div class="blogText">
      In order to determine whether a particular complex number, <i>c</i>, belongs to the Mandelbrot set, we use the
      following function: <span class="mathBit">f(z) = z<sup>2</sup> + c</span>. Starting at 0, we have
      <span class="mathBit">f(0) = 0<sup>2</sup> + c = c</span>. Then, we iterate our function, meaning we feed each
      output back into the function to generate the next output. The first few steps are:
    </div>

    <div class="math flex flex-col items-center">
      <pre>
     f(0) = 0<sup>2</sup> + c
     f(c) = c<sup>2</sup> + c
     f(c<sup>2</sup> + c) = (c<sup>2</sup> + c)<sup>2</sup> + c
     . . .</pre
      >
    </div>

    <div class="blogText">
      Each time we iterate the function, we are moving from one point on the complex plane (our input) to a new point
      (our output). There are two options for our iteration: either these points will remain bounded near zero, or they
      will spiral off toward infinity. If they remain bounded, then our original number <i>c</i> belongs to the
      Mandelbrot set.
    </div>

    <div class="blogText">
      In order to encode this behavior, it will help to do a bit of algebra. Using the fact that c = a + bi, we can
      rewrite our function's rule in terms of the real and imaginary components of <i>c</i>:
    </div>

    <div class="math flex flex-col items-center">
      <pre>
f(a + bi) = (a + bi)<sup>2</sup> + (a + bi)
          = a<sup>2</sup> + 2abi - b<sup>2</sup> + a + bi
          = (a<sup>2</sup> - b<sup>2</sup> + a) + (2ab + b)i</pre
      >
    </div>

    <div class="blogText">
      The amazing thing is that we now have all we need to draw the set onto our screen. We walk through our canvas,
      pixel by pixel, checking each point for membership in the set. To determine that a point <i>doesn't</i> belong to
      the set, we check whether its iteration ever strays too far (say, 5 units) from the origin. If it does, it won't
      come back; it will wander to infinity.
    </div>

    <div class="blogText">
      For a wonderful visual effect, we can choose what color to use for that pixel based on how long it takes our
      algorithm to determine whether the point belongs to the Mandelbrot set. Unsurprisingly, the brightest points
      &mdash; the ones for which it takes longest to determine membership &mdash; lie close to the set's border.
    </div>

    <br /><br />
    <div class="flex flex-col items-center">
      <img src="@/assets/mandlebrot.png" alt="" />
    </div>

    <br /><br />
    <div class="blogText">
      If we zoom in on a piece of our set, we can see that it repeats its structure all the way down:
    </div>

    <br /><br />
    <div class="flex flex-col items-center">
      <img src="@/assets/zoom.png" alt="" />
    </div>

    <br /><br />
    <div class="blogText">
      By playing around with the numbers, one can find some intriguing patterns:
    </div>

    <br /><br />
    <div class="flex flex-col items-center">
      <img src="@/assets/julia.png" alt="" />
    </div>

    <br /><br />
    <div class="blogText">
      You can find my full source code
      <a href="https://github.com/zackstout/Animations/blob/master/scripts/mandelbrot.js">here</a>.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post10 extends Vue {}
</script>

<style scoped>
.math {
  background-color: Gainsboro;
  margin-right: 120px;
  margin-left: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
