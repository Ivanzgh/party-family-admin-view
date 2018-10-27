<template>
    <div>
      <el-row>
        <el-col :span="4" style="height: 100vh;">
          <SideBar></SideBar>
        </el-col>
        <el-col :span="20" style="height: 100vh; overflow-y: scroll">
          <Header></Header>
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import SideBar from '../../components/SideBar'
  import Header from '../../components/Header'
    export default {
        components : {
          SideBar,
          Header
        }
    }
</script>

<style scoped lang="scss">

</style>
