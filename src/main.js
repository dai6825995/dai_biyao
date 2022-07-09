import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Apis from './apis/apis'
import Axios from "axios";
import lazy from "./utils/lazy";

const app = createApp(App)
app.config.globalProperties.$Apis = Apis
app.config.globalProperties.$Axios = Axios

// 自定义指令--懒加载
app.directive('lazy', lazy)

app.use(store).use(router).mount('#app')
