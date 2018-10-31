<template>
    <div>
      <h2 class="title">
        {{this.newsDetail.title}}
      </h2>
      <div class="content" v-html="this.newsDetail.content"></div>
      <div class="date fr">
        发布时间：{{this.newsDetail.createTime}}
      </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            newsDetail : {}
          }
        },
      methods : {
          getNewsDetail() {
            this.$axios.get(`/news/${this.$route.query.id}`).then(res => {
              if (res.code === 200 ) {
                this.newsDetail = res.data
                console.log(res.data)
              }
            })
          }
      },
      created() {
          this.getNewsDetail()
      }
    }
</script>

<style scoped lang="scss">
  .title{
    text-align: center;
  }
  .content{
    margin: 0 10px;
    /deep/ p{
      text-indent: 2em;
    }
  }
  .date{
    height: 40px;
    line-height: 40px;
    margin-right: 60px;
  }
</style>
