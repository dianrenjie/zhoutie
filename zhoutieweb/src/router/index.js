import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import TheneDay from "@/components/themeDay"
import Zhendi from "@/components/zhendi"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {path:"themeday",component:TheneDay},
        {path:"zhendi",component:Zhendi}
      ]
    }
  ]
})
