import {createApp} from 'vue';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import App from "~/app.vue";


const app = createApp(App)
app.use(VueSplide);

export default app