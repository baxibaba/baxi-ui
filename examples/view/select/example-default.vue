<template>
  <div>
    <p class="title">Default</p>
    <baxi-select v-model="result"
                :data="data"
                title="选择器"
                placeholder="请选择"/>
    <params :data="paramsData"/>
  </div>
</template>

<script>
import params from '../../components/params'
export default {
  components: {
    params
  },
  data () {
    return {
      data: [1, 2, 3, 4, 5, 6],
      paramsData: [],
      result: null
    }
  },
  methods: {
    load () {
      this.paramsData = Object.entries({
        data: this.data,
        result: this.result
      })
    }
  },
  watch: {
    result: 'load'
  },
  created () {
    this.load()
  }
}
</script>

<style lang="less" scoped>
.title {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  padding: 20px 0 20px 20px;
}
</style>