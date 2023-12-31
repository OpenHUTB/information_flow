import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import NotFound from '@/views/404.vue'
import Recommend from '@/views/menu/recommend.vue'
import Designer from '@/views/menu/designer.vue'
import Module from '@/views/menu/module.vue'
import Roulette from '@/views/menu/roulette.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
      children: [
        {
          path: '/index',
          redirect: '/recommend',
          component: Index,
          children: [
            {
              path: '/recommend',
              name: 'recommend',
              component: Recommend,
            },
            {
              path: '/designer',
              name: 'designer',
              component: Designer
            },
            {
              path: '/module',
              name: 'module',
              component: Module
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/not-found',
      component: NotFound,
    }
  ]
})

export default router
