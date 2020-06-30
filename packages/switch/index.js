import baxiSwitch from './src/main'

baxiSwitch.install = function (Vue) {
  Vue.component(baxiSwitch.name, baxiSwitch)
}
export default baxiSwitch