<template>
    <div>
      <commentbox :id="$route.params.id"></commentbox>
    </div>
</template>
           
<script>
// 导入组件comment
import commentbox from '@/commonComponents/comment'
export default {
    data () {
        return {
            
        }
    },
    components: {
        commentbox
    }            
}
</script>
<style lang="scss" scoped>

</style>
