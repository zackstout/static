<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Sizes of Infinite Sets</h2>
      </div>
      <div class="blogSubtitle">
        Dec. 23, 2017
      </div>
    </div>

    <div class="blogText">
      How might we go about comparing the sizes of different infinite sets? Mathematicians have found it natural to say
      that two infinite sets have the same size (or <i>cardinality</i>) just in case their members can be put into a
      bijective relationship: a one-to-one correspondence from set A to set B that hits all the members of B. (<i
        >One-to-one</i
      >
      means that any element in B can be mapped to by at most one element of A. The latter condition guarantees that
      every element in B will be mapped to (or 'hit') by some element of A.)
    </div>

    <div class="blogText">
      This definition might seem strange. For instance, according to it, the set of all integers and the set of all even
      integers are of the same size, even though in a way it seems as though there are exactly half as many even
      integers as there are integers.
    </div>

    <div class="blogText">
      What about sets that our definition judges to have different sizes? Consider the sets R = {all real numbers
      between 0 and 1} and Q = {all rational numbers between 0 and 1}. (A <i>rational</i> number is one that can be
      expressed as a ratio of integers.) Cantor developed a wonderful proof that the two sets cannot be put into a
      bijective relation; that is, they are not of the same size. The set R has far more members than the set Q, even
      though both have an infinite number of members.
    </div>

    <div class="blogText">
      (<b>Note</b>: Really, what
      <a href="https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument">Cantor's proof</a> shows is that the set of
      real numbers, R, cannot be put into a bijective relation with the set of natural numbers (1, 2, 3, ...). The
      rational numbers, Q, <i>can</i> be put into a bijective relation with the natural numbers. Since bijectivity is
      transitive, it follows from Cantor's proof that there is no bijection between Q and R.)
    </div>

    <div class="blogText">
      One rather breathtaking consequence of this definition is that the interval from 0 to 1 contains exactly as many
      real numbers as the interval from 0 to positive infinity! We know this because we can produce a bijective
      correspondence between points in the two intervals.
    </div>

    <div class="blogText">
      We can illustrate this fact by drawing a quarter-circle, and using each point that lies upon it to connect the
      interval [0, 1] to the interval [0, &infin;).
    </div>

    <div layout layout-align="center center">
      <canvas id="infinity" height="500" width="500"></canvas>
      &emsp;
      <md-slider ng-model="mc.inf" ng-change="mc.infinitize(mc.inf)" min="1" max="200" aria-label="infin"></md-slider>
    </div>
    <!-- NOTE: max should really be a magic number -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post13 extends Vue {}
</script>
