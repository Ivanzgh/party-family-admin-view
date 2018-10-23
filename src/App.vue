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
    background: #e4e4e4;
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
