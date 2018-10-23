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
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          formdata : {
            username : '',
            password : ''
          }
        }
      },
      methods: {
        handlelogin(){
          this.$axios.post('/login',this.formdata).then(res => {
            if (res.code == 200 ){
              console.log(res)
              this.$store.commit('CHANGE_USERINFO',res.data)
              this.$router.push('/index')
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
