<template>
  <baxi-page>
    <div class="button-wrap">
      <baxi-button @click="handle">Default Button</baxi-button>

      <baxi-button type="disabled">Disabled Button</baxi-button>

      <baxi-button type="light">Light Button</baxi-button>

      <baxi-button :inline="true">Inline Button</baxi-button>

      <baxi-button :outline="true">Outline Button</baxi-button>

      <baxi-button-group>
        <baxi-button type="light"
                    :outline="true"
                    :inline="true">Inline Button</baxi-button>
        <baxi-button type="light"
                    :inline="true">Light Button</baxi-button>
      </baxi-button-group>

      <baxi-button :btnStyle="btnStyle">Custom Button</baxi-button>
    </div>
  </baxi-page>
</template>

<script>
export default {
  data () {
    return {
      btnStyle: {
        border: '1px solid #090A0D',
        background: '#584628',
        color: '#F1D024'
      }
    }
  },
  methods: {
    handle (event) {
      console.log('event', event)
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  text-align: center;
  padding: 0 30px;
}
button {
  margin: 20px 0;
}
</style>