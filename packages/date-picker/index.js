import Vue from 'vue'
import BaxiDialog from './src/main'
import CreateAPI from 'baxi-create-api'

BaxiDialog.install = function (Vue) {
  Vue.component(BaxiDialog.name, BaxiDialog)
}

Vue.use(CreateAPI, {
  componentPrefix: 'baxi'
})

Vue.createAPI(BaxiDialog)

export default BaxiDialog