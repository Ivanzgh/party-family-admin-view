<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background: url('./assets/bg_img.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  /*定义全局el-card的高度*/
  #app .el-card{
    min-height: calc(100vh - 80px);
  }
    /*定义全局表格样式*/
  .table-item-img{
    height: 80px;
    width: 80px;
  }
  .m20{
    margin: 20px;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  clearfix::after{
    display: block;
    clear: both;
    content: '';
    height: 0;
    width: 0;
    overflow: hidden;
  }
</style>
