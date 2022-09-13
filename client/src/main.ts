import { createApp } from 'vue'
import App from './App.vue'
import './assets/font/iconfont.css'
import router from './router/index'
import { Button, Modal, Input, Select } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)

app.use(Button)
    .use(Modal)
    .use(Input)
    .use(Select)
app.use(router)
app.mount('#app')

