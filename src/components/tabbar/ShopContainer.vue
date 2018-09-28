<template>
<div class="shopcar">
    <div class="goodslist">
            <!-- 商品列表区域 -->
        <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<mt-switch></mt-switch>
                <img :src="item.thumb_path" alt="">
                <div class="shopinfo">
                    <h2>{{item.title}}</h2>
                    <p>
                        <span class="price">￥{{item.sell_price}}</span>
                        <shopnumbox :initCount="$store.getters.getGoodsCount[item.id]"></shopnumbox>
                        <a href="JavaScript:;">删除</a>
                    </p>
                 </div>
			</div>
		</div>
    </div>
</div>
    <!-- 结算区域-->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner Settlement">
                <div class="left">
                    <p>总计(不含运费)</p>
                    <p>已勾选商品<span class="red">1件</span>,总计<span class="red">￥5845</span></p>
                </div>
                <mt-button type="danger">去结算</mt-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import shopnumbox from '@/commonComponents/shopCarnumbox'
import {getshopCarList} from '@/api'
export default {
    data () {
        return {
            goodslist:[]
        }
    },
    created() {
        this.getgoodList()
    },
    methods: {
        getgoodList () {
            //获取到store中的数据
            let idarr = []
            this.$store.state.car.forEach(item => {
                idarr.push(item.id)
            })
            //判断购物车中是否有数据
            if (idarr.length <= 0) {
                return
            }
            //发送请求
            getshopCarList ({ids:idarr.join(',')}).then(res => {
                console.log(res)
                if (res.status === 0) {
                    this.goodslist = res.message
                }
            })
        }
    },
    components: {
        shopnumbox
    }
}
    
</script>
<style lang="scss" scoped>
.shopcar {
    background-color: #eee;
    overflow: hidden;
    .goodslist {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
            img {
                width: 60px;
                height: 60px;
            }
            h2 {
                font-size: 13px;
            }
            .shopinfo {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price {
                    color: red;
                    font-weight: bold;
                }
                p {
                    margin: 0;
                }
            }
        }

    }
    // 结算区域
    .Settlement {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
            color: red;
            font-weight: bold;
        }
    }

}
</style>