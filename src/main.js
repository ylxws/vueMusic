import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import ElementUI from 'element-ui'
import VueLazyLoad from 'vue-lazyload'
// import Vant from 'vant'
// import { Button, Select } from 'element-ui'
import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(ElementUI)
// Vue.use(Vant)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
