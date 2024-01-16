import { createApp } from 'vue'
import router from './router';
import MyLib from 'sub/lib';
import App from './App.vue';

const app = createApp(App);
app.use(router)
app.use(MyLib);
app.mount('#app');

