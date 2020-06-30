import 'babel-polyfill'
import 'flexible'
import Vue from 'vue'
import App from './app'
import router from './router'
import baxiUI from '../src/index.js'
// import baxiUI from '../lib/baxi-ui.common.js'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import dragging from 'vue-directive-dragging'

Vue.use(baxiUI)
Vue.use(dragging)
const requireComponent = require.context('./components', false, /[a-zA-Z]*\.vue/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})