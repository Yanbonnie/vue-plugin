import Vue from 'vue'
import Router from 'vue-router'
import pluginUse from '@/components/pluginUse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pluginUse',
      component: pluginUse
    }
  ]
})
