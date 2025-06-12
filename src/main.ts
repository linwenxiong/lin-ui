import { createApp } from 'vue'
import './style.css'
import LinLib from "../packages/lib"
// import LinLib from "../dist/lin-ui-es"
import App from './App.vue'
const app = createApp(App);
app.use(LinLib)
app.mount('#app')
