import './bootstrap';
import {createApp} from 'vue'
import App from './components/App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import vuex from './store';

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(vuetify).use(router).use(vuex).mount("#app")