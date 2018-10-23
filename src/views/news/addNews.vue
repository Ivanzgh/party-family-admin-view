<template>
  <div class="addNews">
    <el-button type="primary" @click="handleSend">发布</el-button>
    <div class="title">
      <el-input v-model="formData.title" placeholder="请输入标题" label="标题"></el-input>
    </div>
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="formData.content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
    <div class="category">
      <el-radio-group v-model="formData.category">
      <el-radio  label="信工新闻眼">信工新闻眼</el-radio>
      <el-radio  label="历史上的今天">历史上的今天</el-radio>
      <el-radio  label="党员云互动">党员云互动</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData : {
          title : '',
          content : '',
          category : '信工新闻眼',
        },
        editorOption: {
          // some quill options
        }
      }
    },
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },


      handleSend() {
        this.$axios.post('/addnews',this.formData).then(res => {
          if (res.code == 200 ) {
            this.$message.success('新闻发布成功')
            this.$router.push('/newsList')
          }
        })
      }

    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>

<style scoped lang="scss">
  .title{
    width: 400px;
  }
</style>
