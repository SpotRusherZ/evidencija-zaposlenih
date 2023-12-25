import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue';
import Zahtev from '../components/Zahtev-zaposlenog.vue';
import Zahtevi from '../components/Zahtevi.vue';
import Kreiranje from '../components/Kreiranje-Zahteva.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Kreiranje,
    },
    {
      path: '/zahtev',
      name: 'Zahtev',
      component: Zahtev
    }
  ]
})

export default router
