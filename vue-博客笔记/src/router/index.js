import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import Note from '@/components/Note'
import Map from '@/components/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
     {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
