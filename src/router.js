import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/MainBody'
import About from './views/About'
import Feedback from './views/Feedback'
import Contacts from './views/Contacts'
import Crash from './views/Crash'
import Legal from './views/Legal'
import Individ from './views/Individ'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      icon: 'account_balance',
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/crash',
      name: 'crash',
      component: Crash
    },
    {
      path: '/legal',
      name: 'legal',
      component: Legal
    },
    {
      path: '/individ',
      name: 'individ',
      component: Individ
    }
  ]
})
