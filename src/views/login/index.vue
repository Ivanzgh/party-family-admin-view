<template>
  <div class="login">
    <el-form ref="formdata" v-model="formdata" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handlelogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formdata: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handlelogin() {
        this.$axios.post('/login', this.formdata).then(res => {
          if (res.code == 200) {
            this.$store.commit('CHANGE_USERINFO', res.data)
            this.$store.commit('SET_TOKEN', res.token)
            if (this.$store.state.token) {
              this.$router.push('/index')
              this.$message.success(res.msg)
            } else {
              this.$router.replace('/')
            }
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    },
  }
</script>

<style scoped>
  .login {
    width: 400px;
    height: 300px;
    margin: 60px auto;
  }
</style>
