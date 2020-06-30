<template>
  <transition name="fade">
    <div class="baxi-dialog"
         :style="{ zIndex }"
         v-show="isVisible">
      <popup-mask :mask-style="maskStyle"
                  :z-index="zIndex"
                  @click="handleMask"/>
      <div class="baxi-dialog-container"
           :style="{ ...containerStyle, zIndex }">
        <div class="baxi-dialog-content">
          <p v-if="content"
             v-html="content"></p>
          <slot></slot>
        </div>
        <div class="baxi-dialog-btns">
          <div v-for="(btn, index) in btns"
               :key="index"
               @click.stop="handleBtn(btn)"
               :style="[ btn.style, { color: btn.color } ]">{{btn.text}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import visibilityMixin from 'mixins/visibility'
import popupMask from 'components/popup-mask'

export default {
  name: 'baxiDialog',
  mixins: [visibilityMixin],
  components: { popupMask },
  props: {
    content: {
      type: String,
      default: null
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    btns: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleBtn ({ callback }) {
      !(callback && callback() === false) && this.hide()
    },
    handleMask () {
      this.maskClosable && this.hide()
    }
  }
}
</script>