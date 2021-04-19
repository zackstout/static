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

        <!-- <div class="mt-6 w-64 text-xs">
          <div class="flex items-center cursor-pointer hover:opacity-50">
            <div class="h-3 w-3 mr-2"><img src="@/assets/gmailicon.png" /></div>
            <div>zackstout@gmail.com</div>
          </div>

          <div class="flex items-center my-1 cursor-pointer hover:opacity-50">
            <div class="h-3 w-3 mr-2"><img src="@/assets/github_icon.svg" /></div>
            <div>zackstout@gmail.com</div>
          </div>

          <div class="flex items-center cursor-pointer hover:opacity-50">
            <div class="h-3 w-3 mr-2"><img src="@/assets/linkedin_icon.png" /></div>
            <div>zackstout@gmail.com</div>
          </div>
        </div> -->
      </div>

      <div
        class="cursor-pointer"
        @click="updateBg"
        style="width:800px; height:500px; background-size:contain; background-repeat:no-repeat; background-position:center;"
        :style="{ backgroundImage: 'url(' + require('@/assets/' + bgImg + '.jpg') + ')' }"
      ></div>
    </div>

    <hr class="mt-8 mb-4" />

    <div class="text-xs flex justify-around">
      <div class="flex items-center">
        <div class="h-3 w-3 mr-2"><img src="@/assets/gmailicon.png" /></div>
        <div>zackstout@gmail.com</div>
      </div>

      <div class="flex items-center my-1 cursor-pointer hover:opacity-50">
        <div class="h-3 w-3 mr-2"><img src="@/assets/github_icon.svg" /></div>

        <a href="https://github.com/zackstout" target="_blank">/zackstout</a>
        <!-- <div>/zackstout</div> -->
      </div>

      <div class="flex items-center cursor-pointer hover:opacity-50">
        <div class="h-3 w-3 mr-2"><img src="@/assets/linkedin_icon.png" /></div>
        <!-- <div>/zack-stout-01/</div> -->
        <a href="https://linkedin.com/in/zack-stout-01" target="_blank">/zack-stout-01</a>

        <!-- <div>LinkedIn</div> -->
      </div>
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
a {
  @apply text-black no-underline;
}
</style>
