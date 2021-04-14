<template>
  <div id="app">
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

      <div v-if="$route.path.includes('/blog')">
        <div
          v-for="post in posts"
          :key="post.path"
          class="mb-2 cursor-pointer px-3 py-2 flex items-center leading-none"
          :class="[$route.path.includes(post.path.slice(1)) ? 'bg-blue-400 text-white' : 'hover:opacity-50']"
          @click="$router.push({ name: post.path.slice(1) }).catch(() => {})"
        >
          <div
            class="h-2 w-2 mr-3 ml-3 flex-shrink-0"
            :class="[$route.path.includes(post.path.slice(1)) ? 'bg-white' : 'bg-blue-400']"
          ></div>
          <div>{{ post.title }}</div>
        </div>
      </div>
    </div>

    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Resume from "@/components/Resume.vue";
import About from "@/components/About.vue";
import { posts } from "@/blogPosts";

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

@Component({
  components: { Resume, About },
})
export default class App extends Vue {
  posts = posts;
  sideNavs = [
    { label: "About", path: "about" },
    { label: "Experience", path: "resume" },
    { label: "Projects", path: "projects" },
    { label: "Blog", path: "blog" },
  ];
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
  color: #2c3e50;
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
  width: calc(100% - 250px - 2rem);
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
