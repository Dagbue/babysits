import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/babysitters',
    name: 'Babysitters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login/Login.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/babysitting-jobs',
    name: 'BabysittingJobs',
    component: () => import(/* webpackChunkName: "login" */ '../views/BabySittingJobsView.vue'),
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/HowItWorksView.vue'),
  },
  {
    path: '/verify-login-attempt',
    name: 'forgotPasswordOtp',
    component: () => import(/* webpackChunkName: "forgotPasswordOtp" */ '../views/Auth/Login/ForgotPasswordOtp.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register/Register.vue'),
    meta: { hideNavigation: true }
  },


  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/list-of-login",
        name: "DashBoardInvestments",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
