// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui样式
import $axios from './units/axios'
import VueQuillEditor from 'vue-quill-editor'  //富文本编辑器
import store from './vuex/store'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
