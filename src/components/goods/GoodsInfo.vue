<template>
    <div class="goodsInfo">
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
            <p>
              购买数量:<numbox></numbox>
            </p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
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
      goodsinfo:{}
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
    }
  },
             
}
</script>
<style lang="scss" scoped>
.goodsInfo {
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
