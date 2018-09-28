<template>
    <div class="goodsInfo">
      <!-- 小球半场动画 -->
      <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter">
        <div class="ball" v-show="ballflage" ref="ball"></div>
      </transition>
      <!-- 商品轮播图 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <mt-swipe>
            <mt-swipe-item v-for="item in luobo" :key="item.id">
              <img :src="item.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
					</div>
				</div>
			</div>
      <!-- 商品购买区域 -->
      <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
              市场价:<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价:<span class="nowprice">￥{{ goodsinfo.sell_price }}</span>
            </p>
              <!-- 子组件向父组件传值 -->
              <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p> 
            <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addtoshopCar">加入购物车</mt-button>
            </p>
					</div>
				</div>
			</div>
      <!-- 商品参数 -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsinfo.goods_no}}</p>
            <P>库存情况：{{goodsinfo.stock_quantity}}件</P>
            <P>上架时间：{{goodsinfo.add_time | dateFormata}}</P>
					</div>
				</div>
         <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDec(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
    </div>
    </div>
</template>
           
<script>
import {getGoodInfoswipe,getGoodsInfo} from '@/api'
// 导入数字输入框组件
import numbox from '@/commonComponents/GoodsInfonumBox'
export default {
  data () {
    return {
      id:this.$route.params.id, //路由参数对象中的id
      luobo:[],
      goodsinfo:{},
      ballflage:false, //定义小球影藏显示的标识符
      selectCount:1
    }
  },
  components: {
    numbox
  },
  created() {
    this.getswipe()
    this.getInfo()
  },
  methods: {
    //获取轮播图数据
    getswipe () {
      getGoodInfoswipe ({id:this.id}).then(res => {
        // console.log(res)
        if (res.status === 0) {
          this.luobo = res.message
        }
      })
    },
    //获取商品价格参数
    getInfo () {
      getGoodsInfo ({id:this.id}).then(res => {
        // console.log(res)
        if (res.status === 0) {
          this.goodsinfo = res.message[0]
        }
      })
    },
    // 路由跳转(图文介绍)
    goDec (id) {
      this.$router.push({name:'goodsdesc', params:{id}})
    },
    //路由跳转(商品评论)
    goComment (id) {
      this.$router.push({name:'goodscomment', params:{id}})
    },
    // 加入购物车的小球
    addtoshopCar () {
      this.ballflage = !this.ballflage
      // 拼接一个对象
      let goodsinfo = {
        id: this.id,  // 商品id
        count: this.selectCount,  // 商品数量
        price: this.goodsinfo.sell_price,  //商品单价
        selected: true  //商品的选中状态
      };
      // 调用mutations中的方法存储数据
      this.$store.commit('addToCar', goodsinfo)
    },
    // 控制小球动画的钩子函数
    beforeEnter (el) {
      el.style.transform = 'translate(0,0)'
    },
    Enter (el,done) {
      el.offsetWidth
      // 获取小球在页面中的位置
      const ballposition = this.$refs.ball.getBoundingClientRect()
      //获取 徽标在页面中的位置
      const bageposition = document.getElementById('bage').getBoundingClientRect()
      // 计算出小球位移的位置
      const xdesc = bageposition.left - ballposition.left
      const ydesc = bageposition.top - ballposition.top
      el.style.transform = `translate(${xdesc}px,${ydesc}px)`
      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)"
      done()
    },
    afterEnter (el) {
      this.ballflage = !this.ballflage
    },
    //父组件接收子组件传来的count值,传递购买数量的值
    getSelectedCount (count) {
      this.selectCount = count  //重新赋值给data中的selectCount
      // console.log(this.selectCount)
    }

  },
             
}
</script>
<style lang="scss" scoped>
.goodsInfo {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: palevioletred;
    position: absolute;
    z-index: 10;
    top: 390px;
    left: 146px;
  }
  background-color: #eee;
  overflow: hidden;
  .mui-card {
    .mint-swipe {
      height: 200px;
      .mint-swipe-item {
        text-align: center;
        img {
          height: 100%;
        }
      }
    }
  }
  .nowprice {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
