import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import modal1 from '@/components/modal1.vue'
import modal2 from '@/components/modal2.vue'
import component from '@/components/component.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/component/modal1',
      name: 'modal1',
      component:modal1
      
    },
    {
      path: '/modal2',
      name: 'modal2',
      component:modal2
    },
    {
      path:'/component',
      name:component,
      component: component

    }
  ]
})

export default router
