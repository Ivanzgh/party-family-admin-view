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
        <el-dropdown-item @click.native="dialogVisible = true">退出</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确定退出吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="logout">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {},
        dialogVisible: false
      }
    },
    methods: {
      logout() {
        this.dialogVisible = false
        this.$store.commit('CHANGE_USERINFO', this.userInfo)
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
    margin-bottom: 10px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .avatar {
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
