import Vue from 'vue'
import baxiDrawer from './src/main'
import CreateAPI from 'baxi-create-api'

baxiDrawer.install = function (Vue) {
  Vue.component(baxiDrawer.name, baxiDrawer)
}

Vue.use(CreateAPI, {
  componentPrefix: 'baxi'
})

Vue.createAPI(baxiDrawer)

export default baxiDrawer
