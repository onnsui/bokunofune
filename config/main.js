import Footer from 'Footer.vue'
import App from './App'
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  el: '#app',
  components: {
    Footer,
  },
})
