//导入路由
import VueRouter from 'vue-router'

// 导入对应的路由组件
// import HomeContainer from '@/components/tabbar/HomeContainer.vue'
// import MemberContainer from '@/components/tabbar/MemberContainer.vue'
// import ShopContainer from '@/components/tabbar/ShopContainer.vue'
// import SearchContainer from '@/components/tabbar/SearchContainer.vue'
// import NewsList from '@/components/news/NewsList.vue'
// import PhotoList from '@/components/photos/PhotoList.vue'
// import GoodsList from '@/components/goods/GoodsList.vue'
//创建路由对象
var router = new VueRouter({
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
        }

    ],
    linkActiveClass:'mui-active'    //设置默认高亮的类
})

//暴露路由对象
export default router