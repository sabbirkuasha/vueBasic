import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MultiStep from '@/components/MultiStepForms/MultiStep.vue'
import CounterMain from '@/components/Counter/CounterMain.vue'
import NameList from '@/components/Name/NameList.vue'
import DynaComp from '@/components/DynamicComponent/DynaComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/multi',
      name: 'multiStepForm',
      component: MultiStep
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterMain
    },
    {
      path: '/name',
      name: 'nameList',
      component: NameList
    },
    {
      path: '/component',
      name: 'BuiltInComponent',
      component: DynaComp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
