import Vue from 'vue'
import VueRouter from 'vue-router'
import step0 from '@/steps/step0.vue'
import step1 from '@/steps/step1.vue'
import step2 from '@/steps/step2.vue'
import step3 from '@/steps/step3.vue'
import step4 from '@/steps/step4.vue'
import step5 from '@/steps/step5.vue'
import step6 from '@/steps/step6.vue'
import step7 from '@/steps/step7.vue'
import final from '@/steps/final.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    name: 'step0',
    component: step0
  },
  {
    path: '/step1',
    name: 'step1',
    component: step1
  },
  {
    path: '/step2',
    name: 'step2',
    component: step2
  },
  {
    path: '/step3',
    name: 'step3',
    component: step3
  },
  {
    path: '/step4',
    name: 'step4',
    component: step4
  },
  {
    path: '/step5',
    name: 'step5',
    component: step5
  },
  {
    path: '/step6',
    name: 'step6',
    component: step6
  },
  {
    path: '/step7',
    name: 'step7',
    component: step7
  },
  {
    path: '/final',
    name: 'stepfinal',
    component: final
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
