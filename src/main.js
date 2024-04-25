import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index.js'
import ElementPlus from 'element-plus'
import { createPinia } from "pinia";
import 'element-plus/dist/index.css'
import "nprogress/nprogress.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(createPinia())
app.use(Router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
