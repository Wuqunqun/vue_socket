<template>
  <el-aside width="200px">
    <el-row style="height: 60px">
      <div class="myinfo">
        <el-avatar :src="myInfo.img"></el-avatar>
        <span>{{ myInfo.name }}</span>
      </div>
    </el-row>
    <el-row style="height: 50px">
      <el-input v-model="keyword" placeholder="搜索好友">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-row>
    <el-row style="height: 390px">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              (!keyword ||
                data.name.toLowerCase().includes(keyword.toLowerCase())) &&
              !data.name.toLowerCase().includes(myInfo.name.toLowerCase())
          )
        "
        stripe
        style="width: 100%"
        :show-header="false"
        height="510"
        @row-click="setUserInfo"
      >
        <el-table-column label="日期">
          <template slot-scope="scope">
            <el-avatar :src="scope.row.img"></el-avatar>
            <span style="marginleft: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-aside>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    setUserInfo(row, column, event){
      if(row.name=='默认群聊'){
        store.commit('changeChatType','group');
      }else{
        store.commit('changeChatType','private');
      }
      store.commit('setUserInfo',{name:row.name,img:row.img});
    },
  },
  computed: {
    tableData() {
      return store.state.userList;
    },
    myInfo() {
      return this.$store.state.myInfo;
    },
  },
};
</script>
<style>
.el-table .cell {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.myinfo {
  text-align: left;
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 10px;
}
.myinfo span {
  text-align: left;
  vertical-align: middle;
}
</style>
