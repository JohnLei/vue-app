// 导入vuex
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//创建路由对象
let router = new VueRouter({
    routes:[    //配置路由规则
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            name: 'home',
            // component: HomeContainer
            component: reslove => require(['@/components/tabbar/HomeContainer'], reslove)
        }, {
            path: '/member',
            name: 'member',
            // component: MemberContainer
            component: reslove => require(['@/components/tabbar/MemberContainer'], reslove)
        }, {
            path: '/shopcar',
            name: 'shopcar',
            // component: ShopContainer
            component: reslove => require(['@/components/tabbar/ShopContainer'], reslove)
        }, {
            path: '/search',
            name: 'search',
            // component: SearchContainer
            component: reslove => require(['@/components/tabbar/SearchContainer'], reslove)
        }, {
            path: '/home/newslist',
            name: 'newslist',
            // component: NewsList
            component: reslove => require(['@/components/news/NewsList'], reslove)
        }, {
            path: '/home/photolist',
            name: 'photolist',
            // component: PhotoList
            component: reslove => require(['@/components/photos/PhotoList'], reslove)
        }, {
            path: '/home/goodslist',
            name: 'goodslist',
            // component: GoodsList
            component: reslove => require(['@/components/goods/GoodsList'], reslove)
        }, {
            path: '/home/newsinfo/:id',
            name: 'newsInfo',
            component: reslove => require(['@/components/news/NewsInfo'], reslove)
        },{
            path: '/home/goodsinfo/:id',
            name: 'goodsinfo',
            component: reslove => require(['@/components/goods/GoodsInfo'], reslove)
        },{
            path: '/home/goodsdesc/:id',
            name: 'goodsdesc',
            component: reslove => require(['@/components/goods/GoodsDesc'], reslove)
        },{
            path: '/home/goodscomment/:id',
            name: 'goodscomment',
            component: reslove => require(['@/components/goods/GoodsComment'], reslove)
        }

    ],
    linkActiveClass:'mui-active'    //设置默认高亮的类
})

//暴露路由对象
export default router