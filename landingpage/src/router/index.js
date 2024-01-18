import { createRouter, createWebHistory } from 'vue-router'
import RedirectVue from "@/views/RedirectVue.vue";
import MainPage from "@/views/MainPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {path: '/', component: MainPage    },
    {path: '/qr', component: RedirectVue}
  ]
})

export default router
