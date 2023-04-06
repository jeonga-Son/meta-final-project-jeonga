import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Signup from '../pages/members/signup.vue';
// import Login from '../pages/members/login.vue';
// import Modify from '../pages/members/modify.vue';
// import Orders from '../pages/orders/index.vue';
// import OrdersList from '../pages/orders/list/index.vue';
// import OrderSuccess from '../pages/orders/success/index.vue';
// import OrdersDetail from '../pages/orders/_id.vue';
// import BestList from '../pages/products/bestList/index.vue';
// import ProductList from '../pages/products/list/index.vue';
// import ProductDetail from '../pages/products/detail/_id.vue';
// import ProductReviews from '../pages/products/reviews/index.vue';
// import ProductReviewDetail from '../pages/products/reviews/detail/_id.vue';
// import CartList from '../pages/cart/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  //,
  // {
  //   path: '/members/signup',
  //   name: 'Signup',
  //   component: Signup
  // },
  // {
  //     path: '/members/login',
  //     name: 'Login',
  //     component: Login
  // },
  // {
  //     path: '/members/modify',
  //     name: 'Modify',
  //     component: Modify
  // },
  // {
  //     path: '/orders/:id/:quantity',
  //     name: 'Orders',
  //     component: Orders
  // },
  // {
  //     path: '/orders/success',
  //     name: 'OrderSuccess',
  //     component: OrderSuccess
  // },
  // {
  //     path: '/orders/list',
  //     name: 'OrdersList',
  //     component: OrdersList
  // },
  // {
  //     path: '/orders/:id',
  //     name: 'OrdersDetail',
  //     component: OrdersDetail
  // },
  // {
  //     path: '/products/bestList',
  //     name: 'BestList',
  //     component: BestList
  // },
  // {
  //     path: '/products',
  //     name: 'ProductList',
  //     component: ProductList
  // },
  // {
  //     path: '/products/:id',
  //     name: 'ProductDetail',
  //     component: ProductDetail
  // },
  // {
  //     path: '/products/:id/reviews',
  //     name: 'ProductReviews',
  //     component: ProductReviews
  // },
  // {
  //     path: '/products/:p_id/review/:r_id',
  //     name: 'ProductReviewDetail',
  //     component: ProductReviewDetail
  // },
  // {
  //     path: '/cart/cartList',
  //     name: 'CartList',
  //     component: CartList
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
