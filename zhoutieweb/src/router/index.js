import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import TheneDay from "@/components/themeDay"
import Zhendi from "@/components/zhendi"
import partyAssist from '@/components/partyAssist'
import partyText from '@/components/partyText'
import threeClass from '@/components/threeClass'
import cost from '@/components/cost'
import partyMember from '@/components/partyMember'
<<<<<<< HEAD
import jiaGou from "@/components/jiagou"
=======
import threeClass from '@/components/threeClass'
>>>>>>> c6f53a34d3214f926bd517551c132535bd8cadfc


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {path:"themeday",component:TheneDay},
        {path:"zhendi",component:Zhendi},
        {path:'partyAssist',component:partyAssist},
        {path:'partyText',component:partyText},
        {path:'cost',component:cost},
        {path:'partyMember',component:partyMember},
        {path:'threeClass',component:threeClass},
        {path:"jiagou",component:jiaGou}
      ]
    }
  ]
})
