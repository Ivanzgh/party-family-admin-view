<template>
  <div class="news">
    <el-card class="m20">

      <el-table
        :data="newsData"
        style="width: 100%">
        <el-table-column
          label="头图">
          <template slot-scope="scope">
            <img :src="scope.row.header" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="author.nickname"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="type.title"
          label="分类">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="newsDetail(scope.row._id)">查看详情</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="newsDelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :page-size="10"
        :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsData: [],
        page : 1
      }
    },
    methods: {
      getNewsData() {
        this.$axios.get('/news',{page: this.page,page_size : 10}).then(res => {
          if (res.code === 200) {
            this.newsData = res.data
          }
        })
      },
      newsDetail(id) {
        this.$router.push({path : 'newsDetail',query : {id}})
      },
      newsDelete(id) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/news/delete',{_id : id }).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getNewsData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      pageChange(page){
        this.page = page;
        this.getNewsData();
      }
    },
    created() {
      this.getNewsData()
    }
  }
</script>

<style scoped>
  .el-pagination{
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top: 100px;
  }
</style>
