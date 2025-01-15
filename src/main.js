import App from "./App.vue";
import { createApp } from "vue";
import "./styles/app.scss";
import router from "./router";
import vClickOutside from 'v-click-outside'

const app = createApp(App);
app.use(router);
app.use(vClickOutside);
app.mount("#app");
