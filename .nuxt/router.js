import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a836707 = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _6b2f7467 = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _6121d27c = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _57665176 = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _17201745 = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _361710f3 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _0121e40e = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _461ad449 = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _5326615e = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _4e147ca3 = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _21b05e49 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _935a0826 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _5dfdef21 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _126763c8 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _03eec3f6 = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _830b1614 = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _64b74926 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _8e3b2170 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _cd62831c = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _0f082257 = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _01848f33 = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _6c527120 = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _a7758e42 = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _6c976419 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _8883c4d4 = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _cb6d015a = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _3835eac4 = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _0bc5303a = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _707c2505 = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _118dfb6c = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _3855eb0d = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _32c88a1c = () => interopDefault(import('../pages/shop/fashion/components/new_arrival.vue' /* webpackChunkName: "pages/shop/fashion/components/new_arrival" */))
const _8a53216e = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _742c3546 = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _90b9fc0e = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _4638bdb3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _31af601e = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _59185608 = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/collection/three-grid",
    component: _3a836707,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _6b2f7467,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _6121d27c,
    name: "page-about"
  }, {
    path: "/page/coming-soon",
    component: _57665176,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _17201745,
    name: "page-faq"
  }, {
    path: "/page/order-success",
    component: _361710f3,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _0121e40e,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _461ad449,
    name: "page-search"
  }, {
    path: "/shop/fashion",
    component: _5326615e,
    name: "shop-fashion"
  }, {
    path: "/page/account/cart",
    component: _4e147ca3,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _21b05e49,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _935a0826,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _5dfdef21,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _126763c8,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _03eec3f6,
    name: "page-account-login"
  }, {
    path: "/page/account/profile",
    component: _830b1614,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _64b74926,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _8e3b2170,
    name: "page-account-wishlist"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _cd62831c,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _0f082257,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _01848f33,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _6c527120,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _a7758e42,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _6c976419,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _8883c4d4,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _cb6d015a,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/fashion/components/banner",
    component: _3835eac4,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _0bc5303a,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _707c2505,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _118dfb6c,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _3855eb0d,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/new_arrival",
    component: _32c88a1c,
    name: "shop-fashion-components-new_arrival"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _8a53216e,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _742c3546,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/slider",
    component: _90b9fc0e,
    name: "shop-fashion-components-slider"
  }, {
    path: "/",
    component: _4638bdb3,
    name: "index"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _31af601e,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _59185608,
    name: "product-sidebar-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
