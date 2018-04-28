import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{Auth:false, title:'Register'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{Auth:false, title:'Login'}
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{Auth:false, title:'Inicio'}
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta:{Auth:false, title:'About'}
    }
  ]
})

