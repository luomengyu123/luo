import { createApp } from "vue";
// 解决适配
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { Tabbar, TabbarItem } from 'vant';
createApp(App).use(store).use(router).use(Vant).use(Tabbar).use(TabbarItem).mount("#app");
