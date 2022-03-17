import { createApp } from 'vue'
import axios from 'axios'
// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$filters = { currency, date }
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
