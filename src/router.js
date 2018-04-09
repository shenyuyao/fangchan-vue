import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Newxq from './views/Newxq.vue'
import New from './views/New.vue'
import Conta from './views/Conta.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/newxq/:id',
      name: 'newxq',
      component: Newxq
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/conta',
      name: 'conta',
      component: Conta
    }
  ]
})
