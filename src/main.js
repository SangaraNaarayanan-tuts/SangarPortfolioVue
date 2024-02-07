import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { MotionPlugin } from '@vueuse/motion'

loadFonts()

createApp(App)
  .use(MotionPlugin)
  .use(vuetify)
  .mount('#app')
