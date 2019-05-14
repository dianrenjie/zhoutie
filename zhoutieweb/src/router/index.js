import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import partyAssist from '@/components/partyAssist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
      	{path:'partyAssist',component:partyAssist},
      ]
    }
  ]
})
