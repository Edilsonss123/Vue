import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Footer from '@/components/template/Footer.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Navigation from '@/components/template/Navigation.vue'

Vue.config.productionTip = false
Vue.component('app-footer', Footer)
Vue.component('app-carousel', Carousel)
Vue.component('app-toolbar', Toolbar)
Vue.component('app-navigation', Navigation)
new Vue({
  render: h => h(App),
}).$mount('#app')
