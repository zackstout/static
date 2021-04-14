<template>
  <div class="p-3">
    <div class="text-3xl">My Work</div>

    <div class="p-3 pt-0 italic my-4">
      <div>
        I offer the caveat that many of these might be better described as "experiments", as they tend to lack the
        polished sheen of finished products.
      </div>
      <div class="mt-2">
        If you are interested in seeing some of the work I've done professionally, check out the following Screenfeed
        products: <a href="https://www.screenfeed.com/content/weather-graphics">Weather Graphics</a> and
        <a href="https://www.screenfeed.com/content/alerts">Weather Alerts</a>
      </div>
    </div>

    <div v-for="(proj, i) in projects" :key="i" class="mb-10">
      <div class="font-bold text-xl mb-2">{{ proj.title }}</div>

      <div class="flex justify-between">
        <div class="flex-shrink-0" style="width:500px; height:300px;" :style="getThumbnailStyle(proj)"></div>

        <div class="flex flex-col flex-grow ml-6">
          <div>{{ proj.description }}</div>

          <div class="links flex mt-2">
            <div class="mr-2">Demo</div>
            <div>Source code</div>
          </div>

          <div class="mt-4 flex">
            <div class="mr-3 p-2 bg-blue-600 text-white text-xs rounded" v-for="tag in proj.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projects } from "@/projects";

@Component
export default class Projects extends Vue {
  projects = projects;

  getThumbnailStyle(proj: any) {
    return {
      backgroundImage: `url("${proj.previewImageUrl}")`,
    };
  }
}
</script>

<style lang="postcss" scoped>
.links {
  @apply text-xs text-blue-500 underline cursor-pointer;
}

a {
  @apply text-blue-500 underline;
}
</style>
