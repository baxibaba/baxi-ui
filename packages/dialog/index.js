import Vue from 'vue'
import baxiDialog from './src/main'
import CreateAPI from 'baxi-create-api'

baxiDialog.install = function (Vue) {
  Vue.component(baxiDialog.name, baxiDialog)
}

Vue.use(CreateAPI, {
  componentPrefix: 'baxi'
})

Vue.createAPI(baxiDialog)

export default baxiDialog