<template>
  <div class="news">
    <el-card class="m20">
      <el-select v-model="select_cate" placeholder="请选择分类">
        <el-option key="1" label="信工新闻眼" value="信工新闻眼"></el-option>
        <el-option key="2" label="随时随地学" value="随时随地学"></el-option>
        <el-option key="3" label="党员云互动" value="党员云互动"></el-option>
        <!--<el-option v-for="(item,index) in categories"-->
                   <!--:key="index"-->
                   <!--:label="item.title"-->
                   <!--:value="item._id">-->
        <!--</el-option>-->
      </el-select>
      <el-input v-model="select_word"
                placeholder="搜索关键词"
                prefix-icon="el-icon-search"
                clearable
                size="medium"
                style="width: 30%;"
                @keyup.enter="search"
      ></el-input>
      <el-button type="primary" @click="search" size="medium">搜索</el-button>
      <el-table
        :data="data"
        style="width: 100%">
        <el-table-column
          label="头图">
          <template slot-scope="scope">
            <img :src="scope.row.header" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="author.nickname"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="type.title"
          :formatter="formatter"
          label="分类">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="newsDetail(scope.row._id)">查看详情
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="newsDelete(scope.row._id)">删除
            </el-button>
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
        newsData: [],
        page: 1,
        categories : [],
        select_cate: '',
        select_word: '',
        is_search: false,
      }
    },
    methods: {
      getNewsData() {
        this.$axios.get('/news', {page: this.page, page_size: 10}).then(res => {
          if (res.code === 200) {
            this.newsData = res.data
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
      search() {
        this.is_search = true;
      },
      formatter(row, column) {
        return row.type.title;
      },
      //查看详情
      newsDetail(id) {
        this.$router.push({path: 'newsDetail', query: {id}})
      },
      //删除操作
      newsDelete(id) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/news/delete', {_id: id}).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getNewsData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //分页
      pageChange(page) {
        this.page = page;
        this.getNewsData();
      }
    },
    //搜索功能
    computed: {
      data() {
        return this.newsData.filter((index) => {
          if (index.type.title.indexOf(this.select_cate) > -1 &&
            (index.author.nickname.indexOf(this.select_word) > -1 ||
              index.title.indexOf(this.select_word) > -1)
          ) {
            return index;
          }
        })
      }
    },
    created() {
      this.getNewsData()
      this.getCategory()
    }
  }
</script>

<style scoped>
  .el-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
</style>
