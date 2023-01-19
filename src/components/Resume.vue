<template>
  <div class="p-3">
    <div class="text-3xl mb-6">Experience</div>

    <div class="text-2xl my-3">Career History</div>
    <div class="flex mb-2">
      <div class="bg-green-600 line"></div>
      <div>
        <div class="text-xl">Front End Developer —— Screenfeed</div>
        <div class="time-text">Oct. 2018 to Present</div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="bg-green-400 line"></div>
      <div>
        <div class="text-xl">Web Development Teaching Assistant —— University of Minnesota</div>
        <div class="time-text">Feb. 2018 to Oct. 2018</div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="bg-green-200 line"></div>
      <div>
        <div class="text-xl">Student —— Prime Digital Academy</div>
        <div class="time-text">Aug. 2017 to Jan. 2018</div>
      </div>
    </div>

    <div class="text-2xl my-3">Education</div>
    <div class="flex mb-2">
      <div class="bg-blue-600 line"></div>
      <div>
        <div class="text-xl">Reed College</div>
        <div class="text-lg italic -mb-1">Bachelor of Mathematics</div>
        <div class="text-lg italic">Bachelor of Philosophy</div>

        <div class="time-text">2012 - 2015</div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="bg-blue-400 line"></div>
      <div>
        <div class="text-xl">Deep Springs College</div>
        <div class="time-text">2010 - 2012</div>
      </div>
    </div>

    <div class="flex mb-2">
      <div class="bg-blue-200 line"></div>
      <div>
        <div class="text-xl">University of Minnesota</div>
        <div class="text-lg italic">University of Minnesota Talented Youth Mathematics Program</div>
        <div class="time-text">2004 - 2008</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Resume extends Vue {
  mounted() {
    document.title = "Experience";
  }
}
</script>

<style lang="postcss" scoped>
.line {
  @apply w-16 mt-2 mx-2;
  height: 2px;
}

.time-text {
  @apply opacity-50;
}
</style>
