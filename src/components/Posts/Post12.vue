<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Binary Counting and the Towers of Hanoi</h2>
      </div>
      <div class="blogSubtitle">
        Jan. 1, 2018
      </div>
    </div>

    <div class="blogText">
      A marvelous fact about the Towers of Hanoi puzzle is that you can solve it by counting in binary.
    </div>

    <div class="blogText">
      The puzzle, as exhibited in a recent iteration of the <i>Planet of the Apes</i> franchise, is to move a tower of
      discs from one position to another without ever placing a larger disc atop a smaller one.
    </div>

    <div class="blogText">
      Counting in binary means that we use 2 as a base, rather than 10. So 14 is represented as 1110 in binary, because

      <div id="margAbove" layout="row" layout-align="center center">
        8 + 4 + 2 + 0 = 14
      </div>
      <div layout="row" layout-align="center center">
        <span>2<sup>3</sup> &ensp;2<sup>2</sup> &ensp;2<sup>1</sup> &ensp;2<sup>0</sup>&emsp;&emsp;</span>
      </div>
    </div>

    <div class="blogText">
      As we count up in binary (1, 10, 11, 100, ...), we can imagine each digit (e.g. the 2's place or the 8's place)
      representing a disc. The 1's place represents the smallest disc.
    </div>

    <div class="blogText">
      The algorithm we want to follow is this: each time we increment our count, a certain digit changes from 0 to 1.
      Move the disc corresponding to that digit one peg to the right. If you cannot put it there, move it twice. If you
      are at the rightmost space, wrap around to the beginning.
    </div>

    <div layout="row" layout-align="center center" id="binNums">
      <span><span id="binNumHolder"></span><span id="binNumHolder2"></span><span id="binNumHolder3"></span></span>
    </div>

    <div layout layout-align="center center">
      <canvas id="binaryCount" width="600" height="300"></canvas>
    </div>
    <div layout="row" layout-align="center center">
      <div flex="10">
        <button ng-click="mc.goBack()">back</button>
      </div>
      <div flex="10">
        <button ng-click="mc.goForward()">forward</button>
      </div>
    </div>

    <div class="blogText">
      When moving forward, the red digit represents the disc just moved. When moving backward, it represents the disc
      about to be moved.
    </div>
    <!-- <button ng-click="mc.goBack()">back</button>
    <button ng-click="mc.goForward()">forward</button> -->

    <div class="blogText">
      Astonishly, no matter how many discs we add, this algorithm will generate the fastest path (least number of moves)
      from first tower to second! It always takes 2<sup>n</sup> - 1 steps, where n is the number of discs.
    </div>

    <div class="blogText">
      (<b>Note</b>: This post is heavily inspired by 3Blue1Brown's
      <a href="https://www.youtube.com/watch?v=2SUvWfNJSsM">video</a>.)
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post12 extends Vue {}
</script>
