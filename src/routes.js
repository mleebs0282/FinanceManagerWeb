import Home from './components/Home.vue';
import Budget from './components/Budget.vue';
import Bill from './components/Bill.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/budget', component: Budget },
    { path: '/bill', component: Bill },
];

export default routes;