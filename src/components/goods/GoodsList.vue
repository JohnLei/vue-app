<template>
    <div class="goods-list">
            <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
            <p class="price">
                <span class="now">￥{{item.sell_price}}</span>
                <span class="old">￥{{item.market_price}}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{item.stock_quantity}}件</span>
            </p>
            </div>
        </div>
    </div>
</template>

<script>
import {getGoodsList} from '@/api'
export default {
    data () {
        return {
            pageindex:1,
            goodslist:[]
        }
    },
    created() {
        this.initGoodList()
    },
    methods: {
        initGoodList () {
           getGoodsList ({pageindex:this.pageindex}).then(res => {
            //    console.log(res)
            if (res.status === 0) {
                this.goodslist = res.message
            }
           }) 
        },
        //跳转到商品详情页面
        goDetail (id) {
            this.$router.push({name:'goodsinfo',params:{id}})
        }
    }
}
    
</script>

<style lang="scss" scoped>
    .goods-list{
      display: flex;
      flex-wrap: wrap;
      padding: 7px;
      justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
