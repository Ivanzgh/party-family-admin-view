<template>
  <div class="header">
    <div class="title">
      党建E家后台管理系统
    </div>
    <!--<div class="avatar">-->
      <!--{{this.$store.state.userInfo.avatar}}-->
    <!--</div>-->
    <el-dropdown class="user">
       <span class="el-dropdown-link">
        {{this.$store.state.userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        <el-dropdown-item >黄金糕</el-dropdown-item>
        <el-dropdown-item >狮子头</el-dropdown-item>
        <el-dropdown-item >螺蛳粉</el-dropdown-item>
        <el-dropdown-item >双皮奶</el-dropdown-item>
        <el-dropdown-item >蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo : {}
      }
    },
    methods: {
      logout() {
        this.$store.commit('CHANGE_USERINFO',this.userInfo)
        this.$store.commit('DEL_TOKEN')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 40px;
    font-size: 24px;
    color: #666;
    border-bottom: 1px solid #999;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .avatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .user {
      position: absolute;
      top: 2px;
      right: 40px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
      font-size: 18px;
    }
  }
</style>
