<template>
    <div class="com-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="tex" placeholder="请输入要BB的内容(做多BB一个120个字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cm-list">
            <div class="cm-item" v-for="(item,index) in comments" :key="index">
                <div class="title">
                    第一楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormata}}
                </div>
                <div class="cm-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
           
<script>
import {getComments} from '@/api'
export default {
    data () {
        return {
            comments:[],
            pageindex:1
        }
    },
    created() {
        this.initComment()
    },
    methods: {
        initComment () {
            getComments ({id:this.id,pageindex:this.pageindex}).then(res => {
                // console.log(res)
                if (res.status === 0) {
                    this.comments = res.message
                }
            })   
        }
    },
    props:['id']    
}
</script>

<style lang="scss" scoped>
.com-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 100px;
        margin: 0;
    }
    .cm-list {
        margin: 5px 0;
       .cm-item {
           font-size: 13px;
           .title {
               line-height: 30px;
               background-color: #ccc;
           }
           .cm-content {
               line-height: 35px;
               text-indent: 2em;
           }
       } 
    }
}
</style>
