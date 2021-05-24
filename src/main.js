import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 挂载element中引入的组件
import './plugins/element.js'
import './plugins/vcharts.js'
// 挂载echarts
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'

// 导入样式
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart',VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
