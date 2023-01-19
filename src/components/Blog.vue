<template>
  <div class="p-3">
    <div v-if="$route.path === '/blog'">
      <div class="text-3xl mb-6">Blog</div>

      <div @click="clickPost(p)" class="text-2xl mb-3 cursor-pointer hover:opacity-50" v-for="p in posts" :key="p.path">
        <div>{{ p.title }}</div>
        <div class="text-lg opacity-50 italic">
          {{ p.subtitle }}
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { posts } from "@/blogPosts";
// @ts-ignore
import { DateTime } from "luxon";

// TODO: Iframes for inner canvases/demos?

// TODO: format fixes and images

// TODO: maybe just  make sidebar posts BOLD, insteead of blue bg? then can set margin on  top of list

@Component({ components: {} })
export default class Blog extends Vue {
  posts = posts.sort((a: any, b: any) => {
    const a1 = DateTime.fromJSDate(new Date(a.subtitle));
    const b1 = DateTime.fromJSDate(new Date(b.subtitle));

    return Number(b1) - Number(a1);
  });

  mounted() {
    document.title = "Blog";

    // console.log(
    //   "posts",
    //   posts,
    //   posts.map((p: any) => {
    //     return new Date(p.subtitle);
    //   })
    // );
  }

  clickPost(p: any) {
    // console.log("click post", p, p.path.slice(1));
    this.$router.push({ name: p.path.slice(1) }).catch(() => {});
  }
}
</script>

<style lang="postcss">
.blogSubtitle {
  font-style: italic;
  font-size: 22px;
  font-family: Baskerville;
  margin-bottom: 30px;
}

.blogTitle {
  /* margin-top: 52px; */
  font-family: Baskerville;
  font-size: 38px;
  color: midnightBlue;
}

code {
  @apply mx-32 pl-20 py-4 flex justify-start;
  font-size: 16px;
  background-color: lightGray;
  line-height: 135%;

  /* margin-left: 100px;
  margin-right: 50px; */
}

.blogText {
  @apply mx-28;
  /* margin-left: 100px;
  margin-right: 50px; */
  font-size: 21px;
  line-height: 160%;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Baskerville;
}

.codeBit {
  font-family: monospace;
  background-color: lightgray;
  font-size: 16.5px;
  padding: 4px;
}

a {
  @apply text-blue-500 underline;
}
</style>
