<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Building Minesweeper</h2>
      </div>
      <div class="blogSubtitle">Jan. 6, 2018</div>
    </div>

    <div class="blogText">
      How might we go about building the game Minesweeper? Let's go through the steps (using AngularJS):
    </div>

    <ol class="blogText">
      <li class="blogText">
        To build our grid (of size n x n), we can use an HTML <span class="codeBit">table</span>. Using a loop within a
        loop, we can add data cells (containing buttons) to each row, and then <span class="codeBit">append</span> the
        row to our table.
      </li>

      <pre><code layout layout-align="center center">     function drawGridMines(n) {
        var table = angular.element(
          document.getElementById('mineSweep'));
        var mineRow = [];
        var mineRowVals = [];
        for (var k=0; k &lt; n; k++) {
          for (var i=0; i &lt; n; i++) {
            mineRow.push('&lt;td&gt;&lt;button class=
            "mineButton row' + k + 'col' + i +
            '"ng-click="cc.checkBoxMine($event)">
              &lt;/button>&lt;/td>');
            mineRowVals.push('0');
          }
        var fullRow = '&lt;tr>' + mineRow + '&lt;/tr>';
        table.append($compile(fullRow)($scope));
        mineRow = [];

        valuesOnGrid.push(mineRowVals);
        mineRowVals = [];
    }</code></pre>

      <div class="blogText">
        We give each button an <span class="codeBit">id</span>, e.g. <span class="codeBit">row1col3</span>, so that it
        knows its row/column position. Note that we must wrap our element with
        <span class="codeBit">angular.element()</span> in order to <span class="codeBit">append</span> to it. Further,
        we need to <span class="codeBit">$compile</span> our HTML before appending it.
      </div>

      <li class="blogText">
        We store the values that live underneath each button (either 'bomb' or a number representing the number of
        adjacent bombs) in an array of arrays, <span class="codeBit">valuesOnGrid</span>. To start, let's put a '0' in
        each cell.
      </li>

      <li class="blogText">
        Next we need to generate our bombs &mdash; the trick here is to ensure that we put each bomb in a unique cell.
        Then we update our <span class="codeBit">valuesOnGrid</span> array to reflect the positions of the bombs:
      </li>

      <pre><code layout layout-align="center center">       for (var j=0; j &lt; mines.length; j++) {
            var mine = mines[j];
            valuesOnGrid[mine.row][mine.col] = 'b';
        }</code></pre>

      <li class="blogText">
        We need to get the count of adjacent bombs for each cell. We can write a function,
        <span class="codeBit">getNeighbors(r, c)</span>, to find all of a cell's neighbors (taking into account that it
        may lie on the table's edge). I will spare you my rather clumsy code.
      </li>

      <li class="blogText">
        Then we can feed the array of neighbors into a <span class="codeBit">checkForBombs</span> function that updates
        our <span class="codeBit">valuesOnGrid</span> array with numeric values:
      </li>

      <pre><code layout layout-align="center center">     function checkForBombs(r, c) {
        var neighbors = getNeighbors(r, c);
        var v = valuesOnGrid[r][c];

        if (v != 'b') {
          var intV = parseInt(v);
          for (var i=0; i &lt; neighbors.length; i++) {
            var n = neighbors[i];
            var val = valuesOnGrid[n.row][n.col];
            if (val == 'b') {
              intV ++;
            }
          }
          valuesOnGrid[r][c] = String(intV);
        }
      }

    valuesOnGrid.forEach(function(arr, index) {
        var ind = index;
        arr.forEach(function(v, index) {
          checkForBombs(ind, index);
        });
      });
    </code></pre>

      <li class="blogText">
        What happens if the player clicks a button? We check whether there is a bomb there; if so, they lose. If not,
        remove the button to reveal the number. (This is why we must pass <span class="codeBit">$event</span> into each
        button's <span class="codeBit">ng-click</span>. We can use
        <span class="codeBit">ev.target.getAttribute("class")</span> in the controller to access the clicked button's
        class, which contains information about its position. To find out what value lives at that position, we use
        <span class="codeBit">valuesOnGrid[row][col]</span>. We remove the button with
        <span class="codeBit">ev.currentTarget.remove()</span>.)
      </li>

      <li class="blogText">
        The really tricky part is opening up islands &mdash; i.e. sometimes, when you click a button, multiple cells
        will open up. I believe the logic is:
      </li>
      <ul>
        <li class="blogText">Check the clicked cell's neighbors for 0s.</li>
        <li class="blogText">
          For each 0 among the neighbors, open up that cell and all of <i>its</i> neighbors. (Since the value is 0, we
          are guaranteed to never reveal a bomb.)
        </li>
        <li class="blogText">If any of the opened neighbors contains a 0, repeat the above.</li>
      </ul>

      <pre><code layout layout-align="center center">       function checkForZeros(r, c) {
          var neighbors = getNeighbors(r, c, 5);
          neighbors.forEach(function(n) {
            var pos = String(n.row) + String(n.col);
            if (valuesOnGrid[n.row][n.col] === '0'
              && !newNeighbors.includes(pos)) {
                newNeighbors.push(pos);
                checkForZeros(n.row, n.col);
              }
            });
        }</code></pre>

      <div class="blogText">
        Notice that we have to store each opened 0-cell in a <span class="codeBit">newNeighbors</span> array, and check
        whether the array already includes a cell before <span class="codeBit">push</span>ing it. This ensures that our
        program doesn't enter an infinite loop, finding all of a cell's 0-neighbors that have already been opened.
      </div>

      <li class="blogText">
        Finally, we'll want to add in right-click functionality for flagging spaces suspected to contain bombs. When the
        user opens up every square that doesn't contain a bomb, they win!
      </li>
    </ol>

    <div class="blogText">Here's a prototype of the game. It's not fully operational just yet:</div>

    <div layout layout-align="center center">
      <table id="mineSweep"></table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post6 extends Vue {}
</script>
