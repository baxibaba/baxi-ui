<template>
  <button :class="['baxi-button', typeClass]"
          :style="btnStyle"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'baxiButton',
  props: {
    type: { // default、disabled、light
      type: String,
      default: 'default'
    },
    inline: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    typeClass () {
      return {
        'baxi-button-default': this.type === 'default',
        'baxi-button-disabled': this.type === 'disabled',
        'baxi-button-light': this.type === 'light',
        'baxi-button-inline': this.inline,
        'baxi-button-outline': this.outline
      }
    }
  },
  methods: {
    handleClick (event) {
      if (this.type !== 'disabled') {
        this.$emit('click', event)
      }
    }
  }
}
</script>