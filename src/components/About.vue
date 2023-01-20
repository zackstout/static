<template>
  <div class="p-3 flex lg:flex-col flex-wrap lg:flex-nowrap justify-between" style="min-height: 95vh;">
    <div>
      <div class="text-3xl mb-6">About</div>

      <div class="w-full flex justify-between text-xl space-x-8">
        <div>
          <p class="p">
            I am a web developer living in Minneapolis, Minnesota.
          </p>

          <p class="p">
            My passions include math, puzzles, Greek tragedy and games. And most recently I have discovered that I love
            to SCUBA dive! 🐟 🐠 ✨
          </p>

          <!-- <p class="p">I am trying to learn German — <span class="italic">ich versuche zu lernen!</span></p> -->

          <p class="p">
            I enjoy trying to think creatively and analytically. I feel so lucky to have found development; there is no
            satisfaction like finally reaching a solution to a tough problem. I hope to make a positive impact on the
            world through software development.
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
          @click="updateBg"
          style="width:1000px; height:500px; background-size:contain; background-repeat:no-repeat; background-position:top center;"
          :style="{ backgroundImage: 'url(' + require('@/assets/' + bgImg + '.jpg') + ')' }"
        ></div>
      </div>
    </div>

    <div>
      <!-- FOOTER: -->
      <hr class="my-2" />

      <div class="text-xs flex justify-center space-x-8">
        <!-- <div class="flex items-center">
        <div class="h-3 w-3 mr-2"><img src="@/assets/gmailicon.png" /></div>
        <div>zackstout@gmail.com</div>
      </div> -->

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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  bgImgNum = 1;

  get bgImg() {
    // return `face${this.bgImgNum}`;
    return "face";
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
