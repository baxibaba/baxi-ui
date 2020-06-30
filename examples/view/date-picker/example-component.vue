<template>
  <div>
    <p class="title">Component</p>
    <baxi-button @click="show">show</baxi-button>
    <baxi-date-picker :visible.sync="visible"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
</script>