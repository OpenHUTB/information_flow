import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/tailwind.css'
import './assets/styles/index.scss'
import store from './store'
import './mock/index.js'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.mount('#app')

// 获取浏览器窗口高度
let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.setProperty('--window-height', windowHeight + 'px');
document.documentElement.style.setProperty('--window-width', windowWidth + 'px');
// console.log('windowHeight',windowHeight)