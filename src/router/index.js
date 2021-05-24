import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap.vue'
import BMap2_2 from '../views/BMap2-2.vue'
import LiquidFill from '../views/LiquidFill.vue'
import WordCloud from '../views/WordCloud.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },{
    path: '/bmap2_2',
    name: 'BMap2_2',
    component: BMap2_2
  },{
    path: '/liquidFill',
    name: 'LiquidFill',
    component: LiquidFill
  },{
    path: '/wordCloud',
    name: 'WordCloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  routes
})

export default router
