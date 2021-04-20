<template>
  <div>
    <div class="flex flex-col items-center">
      <div>
        <h2 class="blogTitle">Cardioid Animation</h2>
      </div>
      <div class="blogSubtitle">
        Jan. 27, 2018
      </div>
    </div>

    <div class="blogText">
      It turns out that the cardioid (heart-shape) that appears at the center of the Mandelbrot set also turns up
      throughout mathematics.
    </div>

    <div class="blogText">
      It so happens that the cardioid appears in the Mandelbrot set because of the <i>2</i> that shows up in the
      iterated function: <span class="codeBit">f(z) = z<sup>2</sup> + c</span>. If we were to crank it up to
      <span class="codeBit">f(z) = z<sup>3</sup> + c</span>, we would see a nephroid &mdash; a kind of double-petaled
      cardioid. As we increase the power, <i>n</i>, to which <i>z</i> is taken, we increase the number of petals (to
      <i>n - 1</i>).
    </div>

    <div class="blogText">
      A rather fantastic way of illustrating this fact is by considering the multiplication table for <i>n</i>. We wrap
      the table around in a circle, and apply the <span class="codeBit">modulus</span> function to cycle.
    </div>

    <div class="blogText">
      Our 'circle' is composed of <i>x</i> dots, so we want to use <span class="codeBit">% x</span> to keep cycling. We
      get a nice picture if we choose <span class="codeBit">x = 200</span>.
    </div>

    <div class="blogText">
      Suppose <i>n</i> is 3, so that we're considering the 3-times table. We walk through our 'circle', at each point
      multiplying by three and drawing a line to that new dot. So if we're standing at dot number 6, we'll draw a line
      to dot number 18 (modulo whatever our <i>x</i> is). Stepping forward from <span class="codeBit">n = 1</span> looks
      like this:
    </div>
    <br />

    <div class="flex flex-col items-center">
      <div class="mb-6">
        <button class="bg-blue-400 p-2 text-white rounded mr-4" @click="start">Start</button>
        <button class="bg-blue-400 p-2 text-white rounded" @click="stop">Pause</button>
      </div>
      <canvas id="cardioid" width="600" height="600"></canvas>
    </div>

    <div class="blogText">
      You can find my full source code <a href="https://github.com/zackstout/Cardioid-animation">here</a> Thanks to
      <a href="http://www.youtube.com/watch?v=qhbuKbxJsk8">Mathologer</a> for providing the inspiration for this
      animation.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Post9 extends Vue {
  cardioidPosition = 1;

  running = false;

  interval: any = null;

  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }

  mounted() {
    console.log("mount");
    this.interval = setInterval(() => {
      this.circleCard(1, 1, 200, 300, this.cardioidPosition);
      if (this.running) {
        this.cardioidPosition += 0.01;
      }
    }, 10);
  }

  beforeDestroy() {
    clearInterval(this.interval);
  }

  //   function setup() {
  //     var can = createCanvas(800, 800);
  //   }

  //   function draw() {
  //     clear();
  //     translate(400, 400);
  //     circleCard(1, 1, 200, 300, cardioidPosition);
  //     cardioidPosition += 0.01;
  //     translate(-400, -400);
  //     $('.num').html(cardioidPosition.toFixed(2));
  //   }

  //x is how far you iterate, r is radius, f controls number of flower petals or nodes:
  circleCard(a: number, b: number, x: number, r: number, f: number) {
    const ctx: any = (document.getElementById("cardioid") as HTMLCanvasElement).getContext("2d");
    // ctx.fill("white");
    ctx.clearRect(0, 0, 600, 600);
    ctx.strokeStyle = "blue";
    ctx.translate(300, 300);

    for (var i = 0; i < x; i++) {
      var start = { xCoord: r * a * Math.cos((i * 2 * Math.PI) / x), yCoord: r * b * Math.sin((i * 2 * Math.PI) / x) };
      var doubleStart = (f * i) % x;
      var end = {
        xCoord: r * a * Math.cos((doubleStart * 2 * Math.PI) / x),
        yCoord: r * b * Math.sin((doubleStart * 2 * Math.PI) / x),
      };

      ctx.beginPath();
      ctx.moveTo(start.xCoord, start.yCoord);
      ctx.lineTo(end.xCoord, end.yCoord);

      //   console.log(start.xCoord, start.yCoord, end.xCoord, end.yCoord);

      ctx.stroke();

      //   line(start.xCoord, start.yCoord, end.xCoord, end.yCoord);
      //   stroke(color('darkblue'));
    }

    ctx.translate(-300, -300);
  }
}
</script>
