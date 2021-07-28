import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './firebase'
import router from './router'
import ElementPlus from 'element-plus'
import i18n from './i18n'

import 'element-plus/lib/theme-chalk/index.css'
import './assets/styles/main.scss'
import 'remixicon/fonts/remixicon.css'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(i18n)
  .mount('#app')
