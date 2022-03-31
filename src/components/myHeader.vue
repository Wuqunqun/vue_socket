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
  background-image: url('https://img1.baidu.com/it/u=1804750911,2818663770&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>