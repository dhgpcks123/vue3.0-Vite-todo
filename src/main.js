import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'


const app = createApp(App)
app.provide('today', new Date().toISOString().split('T')[0]) //file도 되고, 이렇게도 provide할 수 있고.
app.mount('#app')
