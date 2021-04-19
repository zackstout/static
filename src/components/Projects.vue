<template>
  <div class="p-3">
    <div class="text-3xl mb-6">My Work</div>

    <div class="p-3 pt-0 italic mb-4">
      <div>
        I offer the caveat that many of these might be better described as "experiments", as they tend to lack the
        polished sheen of finished products.
      </div>
      <div class="mt-2">
        If you are interested in seeing some of the work I've done professionally, check out the following
        <a href="https://www.screenfeed.com" target="_blank">Screenfeed</a> products:
        <a href="https://www.screenfeed.com/content/weather-graphics" target="_blank">Weather Graphics</a> and
        <a href="https://www.screenfeed.com/content/alerts" target="_blank">Weather Alerts</a>.
      </div>
    </div>

    <div v-for="(proj, i) in projects" :key="i" class="mb-16">
      <div class="font-bold text-2xl mb-4">{{ proj.title }}</div>

      <div class="flex justify-between">
        <div
          class="flex-shrink-0 "
          style="width:700px; height:500px;"
          :style="{
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-color': 'rgb(60,60,60)',
            backgroundImage: 'url(' + require('@/assets/projects/' + proj.repo + '.png') + ')',
          }"
        ></div>

        <div class="flex flex-col flex-grow ml-6">
          <div>{{ proj.description }}</div>

          <div class="text-xs flex mt-2">
            <!-- <div class="mr-2">Demo</div>
            <div>Source code</div> -->
            <a class="mr-2" :href="getDemoUrl(proj)" target="_blank">Demo</a>
            <a :href="getRepoUrl(proj)" target="_blank">Source code</a>
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
import { projects } from "@/projectsList";

@Component
export default class Projects extends Vue {
  projects = projects;

  mounted() {
    document.title = "Projects";
  }

  getThumbnailStyle(proj: any) {
    return {
      backgroundImage: `url('${this.getPreviewImageUrl(proj)}')`,
    };
  }

  getDemoUrl(proj: any) {
    return `https://zackstout.github.io/${proj.repo}`;
  }

  getRepoUrl(proj: any) {
    return `https://github.com/zackstout/${proj.repo}`;
  }

  getPreviewImageUrl(proj: any) {
    if (proj.previewImageUrl) {
      return proj.previewImageUrl;
    }
    return `~@/assets/projects/${proj.repo}.png`;
  }
}
</script>

<style lang="postcss" scoped>
a {
  @apply text-blue-500 underline;
}
</style>
