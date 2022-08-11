import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './router';

import CustomerIndex from "./components/CustomerIndex.vue";

createApp({
    components: {
        CustomerIndex
    }
}).use(router).mount("#app")
