<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" :value="initCount" @change="countchange" ref="numbox" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
//导入mui中js
import mui from '@/lib/mui/js/mui.min.js'
export default {
    data () {
        return {
            
        }
    },
    methods: {
        countchange () {
            // 监听数量变化,当数量变化了.就把最新的数量同步到store中
            this.$store.commit('updateCount',{
                id:this.goodsid,
                count:this.$refs.numbox.value
            })
        }
    },
    mounted() {
        // 初始化input输入框
        mui(".mui-numbox").numbox();
    },
    props:['initCount','goodsid']
}
    
</script>

<style lang="scss" scoped>

</style>
