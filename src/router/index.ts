import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayOut from "@/views/layout/LayOut.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LayOut,
    redirect:{name:"homeson"},
    children:[
      {
        path:"home",
        name:"homeson",
        component:()=>import("@/views/HomeView.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:LayOut,
  },
  {
    path:"/fen",
    name:"fen",
    component:LayOut,
    redirect:{name:"type"},
    children:[
      {
        path:"type",
        name:"type",
        component:()=>import("@/views/FenXiao.vue")
      }
    ]
  },
  {
    path:"/mine",
    name:"mine",
    component:LayOut,
    redirect:{name:"mineson"},
    children:[
      {
        path:"mineson",
        name:"mineson",
        component:()=>import("@/views/MineView.vue")
      }
    ]
  },
  {
    path:"/cart",
    name:"cart",
    component:LayOut,
    redirect:{name:"cartson"},
    children:[
      {
        path:"cartson",
        name:"cartson",
        component:()=>import("@/views/MyCart.vue")
      }
    ]                                                                                              
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
