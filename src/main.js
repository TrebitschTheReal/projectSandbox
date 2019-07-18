import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Accordion from './components/Accordion'
import Carousel from './components/Carousel'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);
library.add(faAngleDown)
library.add(faAngleUp)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component('accordion', Accordion);
Vue.component('carousel', Carousel);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const sendAccordionData = new Vue();
export const sendCarouselData = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
