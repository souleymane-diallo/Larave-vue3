import { createRouter, createWebHistory } from 'vue-router';
import CustomerIndex from "../components/CustomerIndex.vue";
import CustomerCreate from "../components/CustomerCreate.vue";
import CustomerEdit from "../components/CustomerEdit.vue";


const routes = [
    {
        path: '/dashboard',
        name: 'customers.index',
        component: CustomerIndex,
    },
    {
        path: '/customers/create',
        name: 'customers.create',
        component: CustomerCreate,
    },
    {
        path: '/customers/:id/edit',
        name: 'customers.edit',
        component: CustomerEdit,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
