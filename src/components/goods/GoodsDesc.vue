<template>
    <div class="desc">
      <h3>{{getinfo.title}}</h3>
      <hr>
      <div class="content" v-html="getinfo.content"></div>
    </div>
</template>
           
<script>
import {getGoodsDes} from '@/api'
export default {
    data () {
        return {
            id:this.$route.params.id,
            getinfo:{}
        }
    },
    created() {
        this.getgoodsdes()
    },
    methods: {
        getgoodsdes () {
            getGoodsDes ({id:this.id}).then(res => {
                console.log(res)
                if (res.status === 0) {
                    this.getinfo = res.message[0]
                }
            })
        }
    }          
}
</script>
<style lang="scss" scoped>
.desc {
    padding: 0 4px;
    h3 {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content {
        /deep/ img {
            width: 100%;
        }
    }
}
</style>
