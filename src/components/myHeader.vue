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