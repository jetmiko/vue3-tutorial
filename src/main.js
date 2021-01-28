import { createApp } from 'vue'
import App from './App.vue'

// import './assets/style.css'

import "tailwindcss/tailwind.css"

import router from './router.js'

const app = createApp(App)
app.use(router).mount('#app')

