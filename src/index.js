//入口文件
import Vue from 'vue'
// 导入vuex
import store from '@/store/store'
//导入mui的样式
import '@/lib/mui/css/mui.min.css'
//导入mui图标的样式类
import '@/lib/mui/css/icons-extra.css'
//导入vue-resource
//import VueResource from 'vue-resource'
//安装vue-resource
//Vue.use(VueResource)
//按需导入mint-ui组件
import {Header,Swipe, SwipeItem,Button,Switch} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
// 导入APP组件
import app from './APP.vue'
//导入路由
import router from '@/router/router'
//定义全局的过滤器
//导入格式化时间
import moment from 'moment'
Vue.filter('dateFormata',function(datestr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(datestr).format(pattern)
})
// 导入高德地图第三方包
import AMap from 'vue-amap'
// 挂载
Vue.use(AMap)
AMap.initAMapApiLoader({
    key: '7379e88c421f576018174c8d99e9faf0',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
    'AMap.CircleEditor','AMap.Geolocation','AMap.Geocoder'],
})
let vm = new Vue({
    el:'#app',
    render:c=>c(app),
    //挂载路由对象
    router,
    // 挂载 store
    store
})
    
