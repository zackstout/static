<template>
  <div class="mb-8 p-3" style="width:50%;">
    <div class="text-3xl mb-3">About</div>

    <p class="p">
      I am a web developer living in Minneapolis, Minnesota.
    </p>

    <p class="p">
      My passions include math, puzzles, Greek tragedy and games.
    </p>

    <p class="p">I am trying to learn German — <span class="italic">ich versuche zu lernen!</span></p>

    <p class="p">
      I have a dog named Apollo.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  mounted() {
    document.title = "About";
  }
}
</script>

<style lang="postcss" scoped>
.p {
  @apply mb-2;
}
</style>
