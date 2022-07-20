import { createApp } from "vue";
import { setupPlugins } from "@/plugins";

import "element-plus/theme-chalk/dark/css-vars.css";
import "@/style/base.scss";
import "@/style/tailwindcss.css";
import "@/style/sky/css-vars.css";
import "@/style/dark/css-vars.css";
import App from "./App.vue";

const app = createApp(App);
setupPlugins(app);
app.mount("#app");
