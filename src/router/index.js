import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloI18n from '../components/HelloI18n.vue'
import UserSignInEmail from '@/components/UserSignInEmail.vue'
import UserSignUpEmailVue from '@/components/UserSignUpEmail.vue'
import SharkSampleEditorVue from '@/components/SharkSampleEditor.vue'
import CollaboratorEditorVue from '@/components/CollaboratorEditor.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/register',
    name: 'register',
    component: UserSignUpEmailVue
  }, {
    path: '/login',
    name: 'login',
    component: UserSignInEmail
  }, {
    path: '/user',
    name: 'user',
    component: CollaboratorEditorVue
  }, {
    path: '/demo',
    name: 'demo',
    component: SharkSampleEditorVue
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/i18n',
    name: 'Internationalization',
    component: HelloI18n
  }
]

const router = new VueRouter({
  routes
})

export default router
