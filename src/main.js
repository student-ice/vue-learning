import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index.js'
import ElementPlus from 'element-plus'
import { createPinia } from "pinia";
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(createPinia())
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
