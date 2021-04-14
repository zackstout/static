import Vue from 'vue'
import App from './App.vue'
import "./assets/tailwind.css";
import VueRouter from "vue-router";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Projects from "@/components/Projects.vue";
import Blog from "@/components/Blog.vue";
import Post1 from "@/components/Posts/Post1.vue";
import Post2 from "@/components/Posts/Post2.vue";
import Post3 from "@/components/Posts/Post3.vue";

const postComponents: any = {
  Post1, Post2, Post3
};

// @ts-ignore
import { posts } from "./blogPosts";

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes: [{
    path: "/",
    redirect: "/about"
  }, {
    name: "about",
    path: "/about",
    component: About
  },
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
  }]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
