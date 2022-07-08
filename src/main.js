import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Apis from './apis/apis'
import Axios from "axios";

const app = createApp(App)
app.config.globalProperties.$Apis = Apis
app.config.globalProperties.$Axios = Axios

app.use(store).use(router).mount('#app')
