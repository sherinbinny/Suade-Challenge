import {createApp} from 'vue';
import App from './App.vue';
import personCard from './components/PersonCard';

const app = createApp(App);
// Removed multiple ocurrences of personCard component
app.component('PersonCard', personCard);
app.mount('#app');
