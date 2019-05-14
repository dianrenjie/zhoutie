import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import partyAssist from '@/components/partyAssist'
import partyText from '@/components/partyText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {path:'partyAssist',component:partyAssist},
        {path:'partyText',component:partyText}
        
      ]
    }
  ]
})
