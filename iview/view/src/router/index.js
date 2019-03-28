import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import regest from '@/components/regest'
import dl from '@/components/dl'
import xq from '@/components/xq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/sy',
    	component:sy
    },
    {
    	path:'/regest',
    	component:regest
    },
    {
    	path:'/dl',
    	component:dl
    },
    {
    	path:'/xq',
    	component:xq
    }
  ]
})
