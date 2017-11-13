import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2f2935b0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _731db43d = () => import('../pages/register.vue' /* webpackChunkName: "pages/register" */).then(m => m.default || m)
const _1778e50e = () => import('../pages/home.vue' /* webpackChunkName: "pages/home" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _2f2935b0,
			name: "index"
		},
		{
			path: "/register",
			component: _731db43d,
			name: "register"
		},
		{
			path: "/home",
			component: _1778e50e,
			name: "home"
		}
    ],
    fallback: false
  })
}
