import './assets/main.css';
import routes from './Components/router/routes'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.mixin({
    beforeMount() {
        window.scrollTo(0, 0)
    }
})
app.use(router);

app.mount('#app');
