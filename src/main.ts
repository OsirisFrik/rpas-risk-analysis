import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './firebase'
import router from './router'
import ElementPlus from 'element-plus'
import i18n from './i18n'
import VueLazyLoad from 'vue3-lazyload'

import 'element-plus/lib/theme-chalk/index.css'
import './assets/styles/main.scss'
import 'remixicon/fonts/remixicon.css'
import filters from './utils/filters'

const app = createApp(App)

app.use(router)
  .use(ElementPlus)
  .use(i18n)
  .use(filters)
  .use(VueLazyLoad)
  .mount('#app')
