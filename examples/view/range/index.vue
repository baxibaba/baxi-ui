<template>
  <baxi-page>
    <div class="range-example">
      <baxi-range v-model="val"
                 :disabled="disabled"
                 :show-stops="showStops"
                 :min="min"
                 :max="max"
                 :step="step"
                 :color="color"
                 @change="change"/>

      <p class="value-wrap">Value：{{val}}</p>

      <baxi-prop-switch name="disabled"
                       v-model="disabled"/>
      <baxi-prop-switch name="showStops"
                       v-model="showStops"/>
      <br>
      <baxi-input-group text="最小值">
        <baxi-input placeholder="请输入"
                   type="tel"
                   v-model="min"/>
      </baxi-input-group>
      <baxi-input-group text="最大值">
        <baxi-input placeholder="请输入"
                   type="tel"
                   v-model="max"/>
      </baxi-input-group>
      <baxi-input-group text="区间">
        <baxi-input placeholder="请输入"
                   type="tel"
                   v-model="step"/>
      </baxi-input-group>
      <br>
      <baxi-prop-color name="color"
                      v-model="color"/>
    </div>
  </baxi-page>
</template>

<script>
import baxiPropSwitch from '../../components/baxi-prop-switch'
import baxiPropColor from '../../components/baxi-prop-color'

export default {
  components: {
    baxiPropSwitch,
    baxiPropColor
  },
  data () {
    return {
      colors: {
        hex: '#FFF'
      },
      val: 20,
      disabled: false,
      showStops: false,
      min: 0,
      max: 100,
      step: 1,
      color: '#57a3f3'
    }
  },
  methods: {
    change (val) {
      console.log('change:', val)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../src/styles/common/border.less';

.range-example {
  padding: 20px 30px;
  .value-wrap {
    font-size: 28px;
    padding: 30px 0;
  }
  /deep/ .baxi-input-group-label {
    padding-left: 30px;
  }
  /deep/ .baxi-input-group {
    position: relative;
    .border-bottom-1px()
  }
}
</style>
