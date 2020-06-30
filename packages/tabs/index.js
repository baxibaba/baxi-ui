import baxiTabBar from './src/main'

baxiTabBar.install = function (Vue) {
  Vue.component(baxiTabBar.name, baxiTabBar)
}
export default baxiTabBar