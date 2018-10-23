<template>
  <div class="addusers">
    <h2>添加管理员</h2>
    <div class="form-wrap">
      <el-form size="small" :model="formData" label-width="120px" label-position="left">
        <el-form-item label="姓名：">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="再次确认密码：">
          <el-input v-model="formData.checkPassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-input v-model="formData.sex"></el-input>
        </el-form-item>

        <!--<el-form-item label="用户头像：">-->
          <!--<el-upload-->
            <!--class="avatar-uploader"-->
            <!--action="https://jsonplaceholder.typicode.com/posts-2"-->
            <!--:show-file-list="false"-->
            <!--:on-success="handleAvatarSuccess"-->
            <!--:before-upload="beforeAvatarUpload">-->
            <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
            <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
          <!--</el-upload>-->
        <!--</el-form-item>-->

        <el-form-item label="个性签名：">
          <el-input type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitData">添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addUsers",
    data() {
      return {
        imageUrl: '',

        formData: {
          username: '',
          password: '',
          checkPassword: '',
          sex: '',
          desc: '',
          // avatar: '',
        }
      }
    },
    methods: {
      // handleAvatarSuccess(res, file) {
      //   this.imageUrl = URL.createObjectURL(file.raw);
      // },
      // beforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      //
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
      // },


      submitData() {
        if (this.formData.password !== this.formData.checkPassword){
          this.$message.error('两次密码不一致！')
        } else {
          this.$axios.post('/adduser',this.formData).then(res => {
            this.$message.success(res.msg)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .form-wrap {
    width: 600px;
    margin-top: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
