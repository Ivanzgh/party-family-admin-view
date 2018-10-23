<template>
  <div class="admin">
    <el-table
      :data="adminData"
      style="width: 100%">
      <el-table-column
        prop="avatar"
        label="头像"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
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
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          adminData: []
        }
      },
      methods : {
        getAdminData() {
          this.$axios.get('/admin').then(res => {
            if (res.code == 200 ) {
              this.adminData = res.data
            }
          })
        }
      },
      created(){
        this.getAdminData()
      }
    }
</script>

<style scoped>

</style>
