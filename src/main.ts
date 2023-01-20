import Vue from 'vue'
import App from './App.vue'
import "./assets/tailwind.css";
import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Projects from "@/components/Projects.vue";
import Jeopardy from "@/components/Jeopardy/Jeopardy.vue"; // double jeopardy lol

import Blog from "@/components/Blog.vue";
import Post1 from "@/components/Posts/Post1.vue";
import Post2 from "@/components/Posts/Post2.vue";
import Post3 from "@/components/Posts/Post3.vue";
import Post4 from "@/components/Posts/Post4.vue";
import Post5 from "@/components/Posts/Post5.vue";
import Post6 from "@/components/Posts/Post6.vue";
import Post7 from "@/components/Posts/Post7.vue";
import Post8 from "@/components/Posts/Post8.vue";
import Post9 from "@/components/Posts/Post9.vue";
import Post10 from "@/components/Posts/Post10.vue";
import Post11 from "@/components/Posts/Post11.vue";
import Post12 from "@/components/Posts/Post12.vue";
import Post13 from "@/components/Posts/Post13.vue";
import Post14 from "@/components/Posts/Post14.vue";
import Post15 from "@/components/Posts/Post15.vue";
import Post16 from "@/components/Posts/Post16.vue";
import Post17 from "@/components/Posts/Post17.vue";
import Post18 from "@/components/Posts/Post18.vue";

// @ts-ignore
// import Bard from "../dist/bard/index.html";

const postComponents: any = {
  Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10, Post11, Post12, Post13, Post14, Post15, Post16, Post17, Post18
};

// @ts-ignore
import { posts } from "./blogPosts";

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  routes: [{
    path: "/",
    redirect: "/about"
  }, {
    name: "about",
    path: "/about",
    component: About
  },
  // { path: "/bard", component: { template: Bard } },

  {
    name: "resume",
    path: "/resume",
    component: Resume
  },
  {
    name: "blog",
    path: "/blog",
    component: Blog,
    children: posts.map((post: any) => {
      return {
        path: post.path.slice(1), // have to NOT have "/" in path here
        component: postComponents[post.fileName],
        name: post.path.slice(1)
      }
    })
  },
  {
    name: "projects",
    path: "/projects",
    component: Projects
  },
  {
    path: "/jeopardy",
    component: Jeopardy
  }
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
