<template>
  <baxi-page class="examples-switch">
    <ul>
      <li>
        <baxi-switch v-model="val"
                    :init-callback="false"
                    @callback="handle">
          {{val}}
        </baxi-switch>
      </li>
      <li>
        <baxi-switch v-model="val2" :color="color">{{this.color}}</baxi-switch>
      </li>
      <li>
        <baxi-switch v-model="val3" disabled>disabled</baxi-switch>
      </li>
      <li>
        <baxi-switch v-model="val4" disabled>disabled</baxi-switch>
      </li>
    </ul>
  </baxi-page>
</template>

<script>
export default {
  data () {
    return {
      val: false,
      val2: true,
      color: '#584628',
      val3: false,
      val4: true
    }
  },
  methods: {
    handle (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.examples-switch {
  ul {
    padding: 0 30px;
    li {
      padding-left: 10px;
      margin: 20px 0;
      height: 88px;
      line-height: 88px;
      background: #FFF;
    }
  }
}
</style>