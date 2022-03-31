<template>
  <el-header>{{userInfo.name}}</el-header>
</template>
<script>
export default {
  computed: {
    userInfo(){
      return this.$store.state.userInfo;
    }

  }
}
</script>
<style scoped>
.el-header{
  background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F26%2F20150726095502_nhTNe.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651313101&t=c31be38479e1175f3e628feafb9d4fc4');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>