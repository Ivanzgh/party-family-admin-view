<template>
  <div class="news">
    <el-table
      :data="newsData"
      style="width: 100%">
      <el-table-column
        prop="header"
        label="头图"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="lookNumber"
        label="观看人数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsData: []
      }
    },
    methods : {
      getNewsData() {
        this.$axios.get('/news').then(res => {
          if (res.code == 200 ) {
            this.newsData = res.data
          }
        })
      }
    },
    created(){
      this.getNewsData()
    }
  }
</script>

<style scoped>

</style>
