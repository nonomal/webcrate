import Vue from 'vue'

import vSelect from 'vue-select'
import shortKey from 'vue-shortkey'
import VueTextareaAutosize from 'vue-textarea-autosize'
import VueToast from 'vue-toast-notification'
// import 'vue-toast-notification/dist/theme-default.css'

Vue.component('VSelect', vSelect)
Vue.use(shortKey)
Vue.use(VueTextareaAutosize)
Vue.use(VueToast, {
	type: 'success',
	position: 'bottom'
})