import Vue from 'vue'
import baxiPicker from './src/main'
import CreateAPI from 'baxi-create-api'

baxiPicker.install = function (Vue) {
  Vue.component(baxiPicker.name, baxiPicker)
}

Vue.use(CreateAPI, {
  componentPrefix: 'baxi'
})

Vue.createAPI(baxiPicker)

export default baxiPicker
