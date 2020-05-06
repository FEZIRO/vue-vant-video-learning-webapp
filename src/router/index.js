import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/my-learning',
    name: 'MyLearning',
    component: () => import('../views/MyLearning/MyLearning.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine/Mine.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category/Category.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail/Detail.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/examination',
    name: 'Examination',
    component: () => import('../views/Examination/Examination.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: () => import('../views/SearchResult/SearchResult.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit/Edit.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('uid');
  //判断to路由是否需要授权，防止递归爆栈
   if (to.meta.requiresAuth) {
     if (!token || token === '') {       
       next({ name: 'Login' })
     } else {
       next();
     }
   } else {
     next(); // 确保一定要调用 next()
   }
})

export default router
