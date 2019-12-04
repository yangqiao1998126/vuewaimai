/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";


// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter ({
  // 注册应用中所有的路由
  routes: [
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },  {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },  {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    },
  ]
})
