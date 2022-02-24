//import settings for the router script
import Vue from 'vue';
import VueRouter from 'vue-router';
import UserSignInPage from '../views/UserSignInPage.vue';

//enable VueRouter for Vue to use
Vue.use(VueRouter);

//page routes stored in an array for the equipment signout site
const routes = [
  //route to the user sign in page
  {
    path: '/',
    name: 'UserSignInPage',
    component: UserSignInPage
  },
  //route to the main equipment page
  {
    path: '/equipment-signout',
    name: 'MainEquipmentPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MainEquipmentPage.vue')
  },
  //route to the user profile view page
  {
    path: '/equipment-signout/userprofile/view',
    name: 'UserProfileViewPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UserProfileViewPage.vue')
  },
  //route to the user profile edit page
  {
    path: '/equipment-signout/userprofile/edit',
    name: 'UserProfileEditPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UserProfileEditPage.vue')
  },
  //route to the account creation page
  {
    path: '/equipment-signout/accountcreation',
    name: 'AccountCreationPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AccountCreationPage.vue')
  },
  //route to the checkout cart page
  {
    path: '/equipment-signout/checkoutequipment',
    name: 'CheckoutCartPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CheckoutCartPage.vue')
  }
]

//router to handle routes to equipment signout site pages
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//export router for vue
export default router
