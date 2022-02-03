import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from './router'
import components from '@/components/UI';
import store from '@/store';
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);    
});

app.use(router)
app.use(store)
app.mount('#app');