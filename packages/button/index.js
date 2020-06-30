import baxiButton from './src/main'

baxiButton.install = function (Vue) {
  Vue.component(baxiButton.name, baxiButton)
}
export default baxiButton