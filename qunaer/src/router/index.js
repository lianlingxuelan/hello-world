import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'

Vue.use(Router)
console.log(City);
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/Detail',
      component: Detail
    }
  ]
})
