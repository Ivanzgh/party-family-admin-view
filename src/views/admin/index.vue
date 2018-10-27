<template>
  <div class="admin">
    <el-card class="m20">
      <el-table
        :data="adminData"
        style="width: 100%">
        <el-table-column
          prop="avatar"
          label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="个性签名">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="adminEdit(scope.row._id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="adminDelete(scope.row._id)">删除</el-button>
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
        adminData: [],
        page : 1
      }
    },
    methods: {
      getAdminData() {
        this.$axios.get('/admin',{page: this.page,page_size : 10}).then(res => {
          if (res.code == 200) {
            this.adminData = res.data
          }
        })
      },
      adminEdit() {
        this.$router.push('/addAdmin')
      },
      adminDelete(id) {
          this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/admin/delete',{_id : id }).then(res => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getAdminData()
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
      this.getAdminData()
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
