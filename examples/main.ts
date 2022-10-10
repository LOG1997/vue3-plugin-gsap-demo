import { createApp } from "vue";
import App from "./App.vue";

import MukUI from "../packages/GsapNumber"; //导入

const app = createApp(App);
app.use(MukUI); //注册
app.mount("#app");
