// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 安装vuex
Vue.use(Vuex)
/*let state = {
    car:[]  //购物车中的商品数据用数组存起来.在数组中存储一些对象 商品id,商品数量,购买的数量,商品单价.商品的选中状态

}
let mutations = {
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
        // 当更新car之后,把数组car存储到本地存储总
        // console.log(state.car)
        // console.log(JSON.stringify([{name:'111'}]))
        // localStorage.setItem('key',JSON.stringify({age:111}))
        localStorage.setItem('Car',JSON.stringify(state.car))
        // console.log(state)
        // console.log(goodsinfo)
    }

}
let actions = {

}
let getters = {
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
})*/


let store = new Vuex.Store({
    state: { // this.$store.state.***
      car: [] //JSON.parse(localStorage.getItem('car')|'[]') // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子   
      // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
    },
    mutations: { // this.$store.commit('方法的名称', '按需传递唯一的参数')
      addToCar(state, goodsinfo) {
        // 点击加入购物车，把商品信息，保存到 store 中的 car 上
        // 分析：
        // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
        // 2. 如果没有，则直接把 商品数据，push 到 car 中即可
  
        // 假设 在购物车中，没有找到对应的商品
        var flag = false
  
        state.car.some(item => {
          if (item.id == goodsinfo.id) {
            item.count += parseInt(goodsinfo.count)
            flag = true
            return true
          }
        })
  
        // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
        if (!flag) {
          state.car.push(goodsinfo)
        }
  
        // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
        localStorage.setItem('car', JSON.stringify(state.car))
      }
    },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
              c += item.count
            })
            return c
        },
        getGoodsCount (state) { //设置购物车input框里面的数
            let o = {}  //定义一个对象
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        }
    }
})
export default store