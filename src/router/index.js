import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Article from '../components/Article'
import Diary from '../components/Diary'
import Message from '../components/Message'
import Link from '../components/Link'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/diary',
        name: 'Diary',
        component: Diary
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/link',
        name: 'Link',
        component: Link
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
