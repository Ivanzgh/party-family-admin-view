<template>
      <div class="header">
        <div class="title">
          党建E家后台管理系统
        </div>
        <div class="avatar">
          {{this.$store.state.userInfo.avatar}}
        </div>
        <span class="user">{{this.$store.state.userInfo.username}}</span>
      </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
  .header{
    height: 40px;
    font-size: 24px;
    color: #666;
    border-bottom: 1px solid #999;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .user{
      position: absolute;
      top: 2px;
      right: 6px;
    }
  }
</style>
