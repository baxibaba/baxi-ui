import Vue from 'vue'
import baxiToast from './src/main'
import CreateAPI from 'baxi-create-api'

baxiToast.install = function (Vue) {
  Vue.component(baxiToast.name, baxiToast)
}

Vue.use(CreateAPI, {
  componentPrefix: 'baxi'
})

Vue.createAPI(baxiToast, true, true, true)

export default baxiToast