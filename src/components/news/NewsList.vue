<template>
<div>
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
				<div class="mui-media-body">
					<h1>{{item.title}}</h1>
					<p class='mui-ellipsis'>
						<span>发表时间:{{item.add_time|dateFormata('YYYY-MM-DD')}}</span>
						<span>点击:{{item.click}}次</span>
					</p>
				</div>
			</a>
		</li>
</ul>
</div>
</template>
<script>
import {getNewList} from '@/api'
export default {
	data () {
		return {
		   newslist:[] 
		}
	},
	created() {
		getNewList ().then(res => {
			// console.log(res)
			if (res.status === 0) {
				this.newslist = res.message
			}
		})	
	},
}
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 12px;
            }
            .mui-ellipsis {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #226aff;
            }
        }
    }
</style>
