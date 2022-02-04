import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from './router'
import components from '@/components/UI';
import store from '@/store';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBbfeCsdXpFjvOCYoRkPD0ZgrhCmeHJA2g",
    authDomain: "kram-musik.firebaseapp.com",
    projectId: "kram-musik",
    storageBucket: "kram-musik.appspot.com",
    messagingSenderId: "849986370667",
    appId: "1:849986370667:web:ccb245cb207917ddab052e"
  };
  
  initializeApp(firebaseConfig);   



const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);    
});

app.use(router)
app.use(store)
app.mount('#app');