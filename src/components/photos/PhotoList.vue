<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
//导入mui
import mui from '@/lib/mui/js/mui.min.js'

// 暴露数据
export default {
    data () {
        return {

        }
    },
    methods:{},
    mounted () {
        //初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
        
        deceleration : 0.005
        
        });
    }
}
</script>
<style lang="scss" scoped>
</style>
