<template>
  <div class="swiper">
    <el-card class="m20">
      <el-table
        :data="swiperData"
        style="width: 100%">
        <el-table-column
          prop="imgUrl"
          label="轮播图">
          <template slot-scope="scope">
            <img :src="scope.row.imgUrl" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="status"
          label="是否显示">
          <div slot-scope="scope">
            {{scope.row.status ? '显示 ' : '不显示'}}
          </div>
        </el-table-column>
        <el-table-column
          prop="newsID.title"
          label="新闻标题">
        </el-table-column>
        <el-table-column
          prop="priority"
          label="优先级">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="swiperEdit(scope.row._id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="swiperDelete(scope.row._id)">删除</el-button>
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
        swiperData: [],
        page : 1
      }
    },
    methods: {
      getSwiperData() {
        this.$axios.get('/swiper',{page: this.page,page_size : 10}).then(res => {
          if (res.code === 200) {
            this.swiperData = res.data
          }
        })
      },
      swiperEdit(id) {
        this.$router.push({name : 'editSwiper',query : {id}})
      },
      swiperDelete(id) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/swiper/delete',{_id : id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getSwiperData()
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
        this.getSwiperData();
      }
    },
    created() {
      this.getSwiperData()
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
