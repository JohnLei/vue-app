<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe>
    <mt-swipe-item v-for="(items,index) in lunbotuList" :key="index">
      <img :src="items.img" alt="">
    </mt-swipe-item>
    <!-- <mt-swipe-item><img src="@/images/banner2.jpg" alt=""></mt-swipe-item> -->
    <!-- <mt-swipe-item><img src="@/images/banner3.jpg" alt=""></mt-swipe-item> -->
    </mt-swipe>
    <!-- 九宫格到6宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
              <img src="@/images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="@/images/menu2.png" alt="">
                  <span class="mui-badge"></span>
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
              <img src="@/images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="@/images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="@/images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="@/images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>
<script>
import {getSwiper} from '@/api'
export default {
  data () {
    return {
      lunbotuList:[]
    }
  },
  created() {
     getSwiper ().then(res => {
        // console.log(res)
        if (res.status === 0) {
          this.lunbotuList = res.message
        }
    })
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
  border: none;
  img {
    width: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

</style>
