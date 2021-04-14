<template>
  <div class="p-3">
    <div class="text-3xl mb-3">Experience</div>

    <div class="text-2xl my-3">Career History</div>
    <div class="flex">
      <div class="w-16 bg-green-500 mt-2 mx-2" style="height:2px;"></div>
      <div>
        <div class="text-xl">Front End Developer —— Screenfeed</div>
        <div class="opacity-50 text-md">Oct. 2018 to Present</div>
      </div>
    </div>

    <div class="flex">
      <div class="w-16 bg-green-500 mt-2 mx-2" style="height:2px;"></div>
      <div>
        <div class="text-xl">Web Development T.A. —— University of Minnesota</div>
        <div class="opacity-50 text-md">Feb. 2018 to Oct. 2018</div>
      </div>
    </div>

    <div class="flex">
      <div class="w-16 bg-green-500 opacity-50 mt-2 mx-2" style="height:2px;"></div>
      <div>
        <div class="text-xl">Student —— Prime Digital Academy</div>
        <div class="opacity-50 text-md">Aug. 2017 to Jan. 2018</div>
      </div>
    </div>

    <div class="text-2xl my-3">Education</div>
    <div class="flex">
      <div class="w-16 bg-blue-500 mt-2 mx-2" style="height:2px;"></div>
      <div>
        <div class="text-xl">Reed College</div>
        <div class="text-lg italic">Bachelor of Mathematics</div>
        <div class="text-lg italic">Bachelor of Philosophy</div>

        <div class="opacity-50 text-md">2012 - 2015</div>
      </div>
    </div>

    <div class="flex">
      <div class="w-16 bg-blue-500 mt-2 mx-2" style="height:2px;"></div>
      <div>
        <div class="text-xl">Deep Springs College</div>
        <div class="opacity-50 text-md">2010 - 2012</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Resume extends Vue {}
</script>
