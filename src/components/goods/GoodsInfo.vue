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
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
			</div>
      <!-- 商品参数 -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
    </div>
    </div>
</template>
           
<script>
import {getGoodInfoswipe} from '@/api'
export default {
  data () {
    return {
      id:this.$route.params.id, //路由参数对象中的id
      luobo:[]
    }
  },
  created() {
    this.getswipe()
  },
  methods: {
    getswipe () {
      getGoodInfoswipe ({id:this.id}).then(res => {
        console.log(res)
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
}
</style>
