import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import vue3StarRatings from "vue3-star-ratings"

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App)

import user from './user.json'
import reviews from './review.json'
import vegetables from './vegetables.json'

app.config.globalProperties.user_data = user;
app.config.globalProperties.review_data = reviews;
app.config.globalProperties.vegetables_data = vegetables;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.use(router)
app.use(BootstrapVue3)

app.config.globalProperties.getImageUrl = function getImageUrl(name) {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href
}
app.mount('#app')
