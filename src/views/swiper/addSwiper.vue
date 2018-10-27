<template>
  <div>
    <el-card class="m20">
      <div slot="header">
        添加轮播图
      </div>
      <el-form size="small" :model="formData" label-width="100px" label-position="left">
        <el-form-item label="轮播图：">
          <uploadImg v-model="formData.imgUrl"></uploadImg>
        </el-form-item>
        <el-form-item label="标题：">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="新闻标题：">
          <el-select v-model="formData.newsID">
            <el-option
              v-for="(item ,index) in news"
              :key="index"
              :label="item.title"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="优先级：">
          <el-input-number v-model="formData.priority" :min="1" :max="10">
          </el-input-number>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch
            v-model="formData.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="显示"
            inactive-text="不显示">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="handleSwiper" v-if="!isEdit">添加</el-button>
          <el-button type="primary" size="medium" @click="handleSave" v-else>保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import uploadImg from '../../components/uploadImg'

  export default {
    components: {
      uploadImg
    },
    data() {
      return {
        formData: {
          imgUrl : '',
          title : '',
          newsID : '',
          priority : '',
          status : ''
        },
        news : [],
        isEdit : false
      }
    },
    methods: {
      getNews() {
        this.$axios.get('/news').then(res => {
          if (res.code === 200 ){
            this.news = res.data
          }
        })
      },
      handleSwiper() {
        this.$axios.post('/addSwiper', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success('添加轮播图成功')
            this.$router.push('/swiperList')
          }
        })
      },
      handleSave() {
        this.$axios.patch(`/swiper/${this.$route.query.id}`,this.formData).then(res => {
          if (res.code === 200 ) {
            this.$message.success(res.msg)
            this.$router.push('/swiperList')
          }
        })
      },
      getEditData() {
        this.$axios.get(`/swiper/${this.$route.query.id}`).then(res => {
          this.formData = res.data
        })
      }
    },
    created() {
      if (this.$route.name === 'editSwiper') {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
      this.getNews()
      if (this.isEdit) {
        this.getEditData()
      }
    },
    watch : {
      $route(to,form) {
        if (to.name == 'editSwiper') {
          this.isEdit = true
        } else {
          this.isEdit = false
          this.formData = {
            imgUrl : '',
              title : '',
              newsID : '',
              priority : '',
              status : ''
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
