import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/sass/_layout.scss';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('Toast', Toast);
app.component('Menubar', Menubar);

app.mount('#app');