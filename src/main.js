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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('Toast', Toast);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);

app.mount('#app');