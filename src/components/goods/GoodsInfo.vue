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
				<div class="mui-card-header">商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
              市场价:<del>￥1998</del>&nbsp;&nbsp;销售价:<span class="nowprice">￥8983</span>
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
						<p>商品货号:SD9897876</p>
            <P>库存情况：200件</P>
            <P>上架时间：2089-09-08 01:09:30</P>
					</div>
				</div>
         <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
    </div>
    </div>
</template>
           
<script>
import {getGoodInfoswipe} from '@/api'
// 导入数字输入框组件
import numbox from '@/commonComponents/GoodsInfonumBox'
export default {
  data () {
    return {
      id:this.$route.params.id, //路由参数对象中的id
      luobo:[]
    }
  },
  components: {
    numbox
  },
  created() {
    this.getswipe()
  },
  methods: {
    getswipe () {
      getGoodInfoswipe ({id:this.id}).then(res => {
        // console.log(res)
        if (res.status === 0) {
          this.luobo = res.message
        }
      })
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
