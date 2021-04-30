/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\文档\\Blogs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-14b99c1f",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14b99c1f").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-378c7008",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-378c7008").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-f97eb924",
    path: "/about/slide/slide1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f97eb924").then(next)
    },
  },
  {
    name: "v-75c6836c",
    path: "/about/slide/slide2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-75c6836c").then(next)
    },
  },
  {
    name: "v-684c636a",
    path: "/about/slide/slide3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-684c636a").then(next)
    },
  },
  {
    name: "v-40c1b516",
    path: "/blog/other/bigImg.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-40c1b516").then(next)
    },
  },
  {
    name: "v-56e8ed66",
    path: "/blog/other/forEach.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-56e8ed66").then(next)
    },
  },
  {
    name: "v-1db2c2dc",
    path: "/blog/other/hls.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1db2c2dc").then(next)
    },
  },
  {
    name: "v-266a3c56",
    path: "/blog/other/loadmore.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-266a3c56").then(next)
    },
  },
  {
    name: "v-af85bd54",
    path: "/blog/Animate/animate1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-af85bd54").then(next)
    },
  },
  {
    name: "v-824a7b94",
    path: "/blog/Animate/animate2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-824a7b94").then(next)
    },
  },
  {
    name: "v-50716356",
    path: "/blog/other/typescript.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-50716356").then(next)
    },
  },
  {
    name: "v-16f9ceca",
    path: "/blog/other/Num_Str.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-16f9ceca").then(next)
    },
  },
  {
    name: "v-61abe1f6",
    path: "/blog/other/vuepress_git.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-61abe1f6").then(next)
    },
  },
  {
    name: "v-2ca5d316",
    path: "/blog/other/socket.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2ca5d316").then(next)
    },
  },
  {
    name: "v-cf75edfc",
    path: "/mine/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-cf75edfc").then(next)
    },
  },
  {
    path: "/mine/index.html",
    redirect: "/mine/"
  },
  {
    name: "v-1dbe16d6",
    path: "/blog/other/markdown.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1dbe16d6").then(next)
    },
  },
  {
    name: "v-7501e45c",
    path: "/blog/plugIn/plugIn1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7501e45c").then(next)
    },
  },
  {
    name: "v-77b0ad96",
    path: "/blog/other/uni_app.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-77b0ad96").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]