<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1" @change="countchange" ref="numberbox"/>
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
            this.$emit('getcount',parseInt(this.$refs.numberbox.value))
        }
    },
    // 获取子组件中的最大count
    props:["max"],
    // 通过属性监听 max值
    watch: {
        'max': function (newval,oldval) {
            mui('.mui-numbox').numbox().setOption('max', newval)
        }
    },
    // 初始化input输入框
    mounted() {
        mui(".mui-numbox").numbox();
    },
}    
</script>

<style lang="scss" scoped>

</style>
