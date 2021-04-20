<template>
  <div id="app" class="relative w-full h-full">
    <div id="sidebar" class="bg-gray-100">
      <div
        v-for="nav in sideNavs"
        :key="nav.label"
        :class="[$route.path.includes(nav.path) ? 'bg-blue-400 font-bold text-white' : 'hover:bg-blue-200 ']"
        class="side-nav"
        @click="$router.push({ name: nav.path }).catch(() => {})"
      >
        {{ nav.label }}
      </div>

      <div v-if="$route.path.includes('/blog')" class="mt-2">
        <div
          v-for="post in posts"
          :key="post.path"
          class="mb-2 cursor-pointer px-3 py-2 flex items-center leading-none"
          :class="[$route.path.includes(post.path.slice(1)) ? 'font-bold' : 'hover:opacity-50']"
          @click="$router.push({ name: post.path.slice(1) }).catch(() => {})"
        >
          <div class="h-2 w-2 mr-3 ml-3 flex-shrink-0 bg-blue-400"></div>
          <div v-html="getTitle(post.title)"></div>
        </div>
      </div>
    </div>

    <div id="main" :class="[themeLight ? 'bg-white text-gray-800' : 'bg-blue-800 text-white']">
      <router-view></router-view>
    </div>

    <!-- <div class="absolute top-0 right-0">
      <ToggleButton :selected="themeLight" @click="toggleTheme" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { posts } from "@/blogPosts";
import ToggleButton from "@/components/ToggleButton.vue";

// [ ] would be really nice to fix history/hash problem without hash....need catch all route that redirects to index....

// replacing bg-blue-400 text-white with font-bold,
// and removing :class="[$route.path.includes(post.path.slice(1)) ? 'bg-white' : 'bg-blue-400']"

// [x] link to github (maybe linkedin), and email lol

// [ ] add more projects (database one?? poems react?)

// [x] update favicon AND title

// i like a light/dark theme toggle

// some kind of...animation.....on About....

// [ ] add target="_blank" to all blog anchors

// [ ] add google analytics (lol or make own with firebase...)

// could show a graph of how many times someone clicks on the site lol, real time, firebase

// user can control styles/colors...

// maybe can even save their changes

// image shuffle...

// blog navigation slightly tricky...want to dropdown? click blog should go there...or open?
// maybe when on blog, or viewing a post (so...on blog, which has router-view)
// the other blog posts show up in nav bar?
// hard to decide..that makes nav bar feel weird, clunnky, inconsistent....
// but nested nav is weird....and dropdown is hard....also want to easy nav to them....
// I likee the nested nav....but then there's no "home" blogs page. which is maybe fine.
// hmm...
// starting to question need for blog "home" page....It's just a list that is already in nav bar.

//         :class="{ 'bg-gray-300 font-bold': $route.path === '/' + nav.path }"

// This feels like a decent solution....see how it feels

// really want more margin top over the first post....but then gapp beetweenn whe it's selected

// wow we had freaking 20 posts?

// let's get it going again!!

@Component({
  components: { ToggleButton },
})
export default class App extends Vue {
  posts = posts;
  sideNavs = [
    { label: "About", path: "about" },
    { label: "Experience", path: "resume" },
    { label: "Projects", path: "projects" },
    { label: "Blog", path: "blog" },
  ];

  getTitle(title: string) {
    if (title.includes("Rilke")) {
      return `<span>Rilke's</span> <span class='italic'>Archaic Torso of Apollo</span>`;
    }
    return title;
  }

  themeLight = true;

  toggleTheme() {
    this.themeLight = !this.themeLight;
    console.log("toggle", this.themeLight);
  }
}
</script>

<style lang="postcss">
body {
  padding: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}

.about p {
  margin-bottom: 0.5rem;
}

#sidebar {
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: scroll;
}

#main {
  width: calc(100% - 250px);
  position: absolute;
  top: 0;
  left: 250px;
  padding: 1rem;
  overflow: hidden;
}

.side-nav {
  @apply w-full h-24 select-none cursor-pointer flex justify-center items-center text-2xl;
}
</style>
