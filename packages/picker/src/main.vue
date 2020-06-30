<template>
  <div class="baxi-picker">
    <baxi-drawer ref="drawer"
                :visible.sync="isVisible"
                :maskClosable="maskClosable"
                :lockScroll="lockScroll"
                :z-index="zIndex"
                :maskStyle="maskStyle"
                :containerStyle="containerStyle">
      <slot name="title">
        <div class="baxi-picker-choose">
            <div class="baxi-picker-cancel" @click="cancel">取消</div>
            <div class="baxi-picker-title">{{title}}</div>
            <div class="baxi-picker-confirm" @click="confirm">确定</div>
        </div>
      </slot>
      <slot name="wheel">
        <template v-if="count > 1">
          <div class="baxi-picker-wheel-wrap">
            <picker-wheel v-for="(item, index) in data"
                          :key="index"
                          ref=wheel
                          :data="item"/>
          </div>
        </template>
        <template v-else>
          <picker-wheel ref="wheel"
                        :data="data"/>
        </template>
      </slot>
    </baxi-drawer>
  </div>
</template>

<script>
import baxiDrawer from '../../drawer/src/main.vue'
import PickerWheel from 'components/picker-wheel'
import visibilityMixin from 'mixins/visibility'

const HANDLER_SHOW = 'show'
const HANDLER_CONFIRM = 'confirm'
const HANDLER_CANCEL = 'cancel'
const HANDLER_SET_DATA = 'setData'

export default {
  name: 'baxiPicker',
  mixins: [visibilityMixin],
  components: {
    baxiDrawer,
    PickerWheel
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: String,
    lockScroll: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    count () {
      if (this._getFirstDataIsArray()) {
        return this.data.length
      } else {
        return 1
      }
    }
  },
  methods: {
    _getFirstDataIsArray () {
      const firstData = this.data[0]
      return Object.prototype.toString.call(firstData) === '[object Array]'
    },
    _handler (instruction, val = []) {
      let data = null
      if (this._getFirstDataIsArray()) {
        let arr = []
        for (let i = 0, len = this.data.length; i < len; i++) {
          arr.push(this.$refs.wheel[i][instruction](val[i]))
        }
        data = arr
      } else {
        data = this.$refs.wheel[instruction](val)
      }
      return data
    },
    setData (val) {
      this._handler(HANDLER_SET_DATA, val)
      return this
    },
    confirm () {
      this.hide()
      const data = this._handler(HANDLER_CONFIRM)
      this.$emit(HANDLER_CONFIRM, data)
      return data
    },
    cancel () {
      this.hide()
      this._handler(HANDLER_CANCEL)
      this.$emit(HANDLER_CANCEL)
    },
    show () {
      this.isVisible = true
      this._handler(HANDLER_SHOW)
      return this
    }
  }
}
</script>