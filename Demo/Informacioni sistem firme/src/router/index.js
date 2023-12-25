import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue';
import Zahtev from '../components/Zahtev-zaposlenog.vue';
import Zahtevi from '../components/Zahtevi.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Zahtevi,
    },
    {
      path: '/zahtev',
      name: 'Zahtev',
      component: Zahtev
    }
  ]
})

export default router
