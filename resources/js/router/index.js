import {createRouter, createWebHistory} from "vue-router";
import RegisterProducts from "../components/views/RegisterProducts.vue"
import ListProducts from "../components/views/ListProducts.vue"
import Home from "../components/views/Home.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/register-product",
        name: "RegisterProducts",
        component: RegisterProducts
    },
    {
        path: "/list-products",
        name: "ListProducts",
        component: ListProducts
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;