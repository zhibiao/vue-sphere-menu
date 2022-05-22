import { createApp } from "vue";
import App from "./App.vue";
import drag from "./directives/drag";
import tap from "./directives/tap";

const app = createApp(App);
app.use(drag);
app.use(tap);
app.mount("#app");
