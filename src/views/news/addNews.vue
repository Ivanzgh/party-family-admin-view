<template>
  <div class="addNews">
    <el-card class="m20">
      <el-form :model="formData" label-width="120px" label-position="left">
        <el-form-item label="标题:">
          <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="作者:">
          <el-select v-model="formData.author">
            <el-option
              v-for="(item ,index) in users"
              :key="index"
              :label="item.nickname"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="正文:">
          <div style="margin-top: 40px;">
            <quill-editor v-model="formData.content"
                          ref="myQuillEditor"
                          :options="editorOption"
                          @change="onEditorChange($event)">
            </quill-editor>
          </div>
        </el-form-item>
        <el-form-item label="新闻分类:">
          <el-select v-model="formData.type">
            <el-option v-for="(item,index) in categories"
                       :key="index"
                       :label="item.title"
                       :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻头图:">
          <uploadImg v-model="formData.header"></uploadImg>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSend">发布</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import uploadImg from '../../components/uploadImg'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)

  // require styles
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  export default {
    components: {
      uploadImg,
      quillEditor
    },
    data() {
      return {
        formData: {
          title: '',
          author : '',
          content: '',
          contentText: '',
          type: '',
          header: '',
        },
        users: [],
        categories : [],
        token: '',
      //富文本参数配置
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: 'https://upload-z1.qiniup.com',
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                formData.append('token', this.token)
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    methods: {
      getUsers() {
        this.$axios.get('/admin').then(res => {
          if (res.code === 200 ) {
            this.users = res.data
          }
        })
      },
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          if (res.data.code === 200) {
            this.token = res.data.data
          }
        })
      },
      getCategory() {
        this.$axios.get('/category').then(res => {
          if (res.code === 200 ) {
            this.categories = res.data
          }
        })
      },
      onEditorChange({ quill, html, text }) {
        this.formData.contentText = text
      },
      handleSend() {
        this.$axios.post('/addnews', this.formData).then(res => {
          if (res.code === 200) {
            this.$message.success('新闻发布成功')
            this.$router.push('/newsList')
          }
        })
      }
    },
    created() {
      this.getUsers()
      this.getToken()
      this.getCategory()
    }
  }
</script>

<style  lang="scss">
  .title {
    width: 400px;
    margin: 20px 0;
  }
  .ql-container {
    min-height: 200px;
  }

</style>
