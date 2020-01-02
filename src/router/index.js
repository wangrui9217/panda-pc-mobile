import '@/assets/css/reset.css'
import Vue from 'vue'
import Router from 'vue-router'
import pcHome from '@/pages/home/home.vue'
import mobileHome from '../components/home'
import pageControl from '@/pages/pageControl'

Vue.use(Router)

function isPC () {
  var userAgentInfo = navigator.userAgent.toLowerCase()
  var Agents = ['android', 'iphone', 'symbianOS', 'windows phone', 'ipad', 'ipod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: isPC() ? pcHome : mobileHome
    },
    {
      path: '/pc_index',
      name: 'pcHome',
      component: pcHome
    },
    {
      path: '/m_index',
      name: 'mobileHome',
      component: mobileHome
    }
  ]
})
