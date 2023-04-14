import Vue from 'vue'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import Buefy from 'buefy'
import router from './router/index'


Vue.use(Buefy)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App),
}).$mount('#app')