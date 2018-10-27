<template>
  <div class="addusers">
    <el-card class="m20">
      <div slot="header">
        添加管理员
      </div>
      <div class="form-wrap">
        <el-form size="small" :model="formData" label-width="120px" label-position="left">
          <el-form-item label="姓名：">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称：">
            <el-input v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="formData.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="再次确认密码：">
            <el-input v-model="formData.checkPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-select v-model="formData.sex">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户头像：">
            <uploadImg v-model="formData.avatar"></uploadImg>
          </el-form-item>
          <el-form-item label="个性签名：">
            <el-input type="textarea" v-model="formData.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitData">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  import uploadImg from '@/components/uploadImg'

  export default {
    components: {
      uploadImg
    },
    name: "addUsers",
    data() {
      return {
        imageUrl: '',

        formData: {
          username: '',
          password: '',
          nickname: '',
          checkPassword: '',
          sex: '',
          desc: '',
          avatar: '',
        }
      }
    },
    methods: {
      submitData() {
        if (this.formData.password !== this.formData.checkPassword) {
          this.$message.error('两次密码不一致！')
        } else {
          this.$axios.post('/adduser', this.formData).then(res => {
            this.$message.success(res.msg)
            this.$router.push('/adminList')
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
