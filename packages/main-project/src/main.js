import { createApp } from 'vue'
import MyLib from 'sub/lib';
import App from './App.vue';

const app = createApp(App);
app.use(MyLib);
app.mount('#app');

