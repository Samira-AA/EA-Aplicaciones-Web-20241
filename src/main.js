import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";
import router from './router/index.js'

import PrimeVue from "primevue/config";

import 'primevue/resources/themes/aura-light-green/theme.css'

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Card from 'primevue/card';

createApp(App)
    .use(PrimeVue)
    .use(router)
    .use(i18n)
    .component('pv-card',Card)
    .component('pv-select-button', SelectButton)
    .component('pv-button', Button)
    .component('pv-toolbar',Toolbar)
    .mount('#app')
