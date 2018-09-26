<template>
<div class="shopcar">
    <div class="goodslist">
            <!-- 商品列表区域 -->
        <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<mt-switch></mt-switch>
                <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200059017695.jpg" alt="">
                <div class="shopinfo">
                    <h2>苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h2>
                    <p>
                        <span class="price">￥7882</span>
                        <shopnumbox></shopnumbox>
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
export default {
    data () {
        return {
            
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