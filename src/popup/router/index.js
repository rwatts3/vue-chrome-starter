import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import Todo from '../view/todo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Todo',
      path: '/Todo',
      component: Todo
    }
  ]
})
