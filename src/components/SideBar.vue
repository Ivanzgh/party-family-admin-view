<template>
  <div class="sideBar">
    <el-row>
      <el-menu
        :router='true'
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#263445"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-menu-item index="/index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>管理员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adminList">管理员列表</el-menu-item>
            <el-menu-item index="/addAdmin">添加管理员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>新闻管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/newsList">新闻列表</el-menu-item>
            <el-menu-item index="/addNews">添加新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>轮播图管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/swiperList">轮播图列表</el-menu-item>
            <el-menu-item index="/addSwiper">添加轮播图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped>
  .el-menu-vertical-demo {
    height: 100vh;
  }
</style>
