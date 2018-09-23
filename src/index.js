//入口文件
import Vue from 'vue'
//导入mui的样式
import '@/lib/mui/css/mui.min.css'
//导入mui图标的样式类
import '@/lib/mui/css/icons-extra.css'
//导入路由模块
import  VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
//import VueResource from 'vue-resource'
//安装vue-resource
//Vue.use(VueResource)
//按需导入mint-ui组件
import {Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// 导入APP组件
import app from '@/APP.vue'
//导入路由
import router from '@/router/router'
//定义全局的过滤器
//导入格式化时间
import moment from 'moment'
Vue.filter('dateFormata',function(datestr, pattern = 'yyyy-mm-dd HH:mm:ss') {
    return moment(datestr).format(pattern)
})
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    //挂载路由对象
    router
})
    
