<template>
  <div class="mb-8 p-3" style="">
    <div class="text-3xl mb-6">About</div>

    <div class="w-full flex justify-between">
      <div>
        <p class="p">
          I am a web developer living in Minneapolis, Minnesota.
        </p>

        <p class="p">
          My passions include math, puzzles, Greek tragedy and games.
        </p>

        <!-- <p class="p">I am trying to learn German — <span class="italic">ich versuche zu lernen!</span></p> -->

        <p class="p">
          I enjoy trying to think creatively and analytically. I hope to make a positive impact on the world through
          software development.
        </p>

        <p class="p">
          I have a wonderful dog named Apollo.
        </p>
      </div>

      <div
        class="cursor-pointer"
        @click="updateBg"
        style="width:800px; height:500px; background-size:contain; background-repeat:no-repeat; background-position:center;"
        :style="{ backgroundImage: 'url(' + require('@/assets/' + bgImg + '.jpg') + ')' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  bgImgNum = 1;

  get bgImg() {
    return `face${this.bgImgNum}`;
  }

  updateBg() {
    if (this.bgImgNum === 1) {
      this.bgImgNum = 2;
    } else {
      this.bgImgNum = 1;
    }
  }

  mounted() {
    document.title = "About";
  }
}
</script>

<style lang="postcss" scoped>
.p {
  @apply mb-6;
}
</style>
