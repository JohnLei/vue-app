// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 安装vuex
Vue.use(Vuex)
const state = {
    car:[]  //购物车中的商品数据用数组存起来.在数组中存储一些对象 商品id,商品数量,购买的数量,商品单价.商品的选中状态

}
const mutations = {
    addtoCar (state,goodsinfo) {  //添加购物车的时候把商品信息保存到state中
        // 假设购物车中没有对应的商品数据
        let flag = false
        state.car.some (item => {
            if (item.id == goodsinfo.id) {
                item.count += parseInt(goodsinfo.count)
                flag = true
                return true //终止some循环
            }
        })
        if (!flag) {
            state.car.push(goodsinfo)
        }
    }

}
const actions = {

}
const getters = {
    getAllCount (state) {
        let c = 0 //定义总数量
        state.car.forEach(item => {
            c += item.count
        })
        return c
    }
}
// 导出vuex
export default new Vuex.Store ({
    state,
    mutations,
    actions,
    getters
})


