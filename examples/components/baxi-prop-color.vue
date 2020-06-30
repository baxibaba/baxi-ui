<template>
  <div class="baxi-prop-color">
    <div>{{name}}</div>
    <div>
      <color-picker v-model="color"
                    @input="updateValue"/>
    </div>
  </div>
</template>

<script>
import ColorPicker from '../../src/common/components/color-picker'

export default {
  props: {
    value: String,
    name: String
  },
  components: {
    ColorPicker
  },
  data () {
    return {
      color: {
        hex: this.value
      }
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value.hex)
    }
  }
}
</script>

<style lang="less" scoped>
.baxi-prop-color {
  font-size: 34px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background: #FFF;
  height: 88px;
  line-height: 88px;
  border-radius: 2px;
  div {
    display: flex;
    vertical-align: middle;
    align-items: center;
  }
}
</style>