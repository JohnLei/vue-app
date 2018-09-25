<template>
    <div class="newInfo">
      <h3 class="title">{{newInfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间:{{newInfo.add_time|dateFormata}}</span>
        <span>点击:{{newInfo.click}}次</span>
      </p>
      <hr>
      <!-- 内容区域 -->
      <div class="content" v-html="newInfo.content">
      </div>
      <!-- 导入公共组件 -->
      <comment :id="this.id"></comment>
    </div>
</template>
           
<script>
import {getNewInfo} from '@/api'
import comment from '@/commonComponents/comment'
export default {
    data () {
        return {
            id:this.$route.params.id,
            newInfo:{}
        }
    },
    components : {
        comment
    },
    created() {
        this.initNewsinfo()
    },
    methods:{
        initNewsinfo () {
            getNewInfo ({id:this.id}).then(res => {
                // console.log(res)
                if (res.status === 0) {
                    this.newInfo = res.message[0]
                }
            })
        }
    },           
}
</script>
<style lang="scss" scoped>
.newInfo {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .subtitle {
        font-size: 13px;
        color: aqua;
        display: flex;
        justify-content: space-between;
    }
    .content {
        img {
            width: 100%;
        }
    }
}
</style>
