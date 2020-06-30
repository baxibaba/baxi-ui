<template>
  <baxi-page>
    <example-default/>
    <example-not-use-line/>
    <example-multiple/>
    <example-object/>
    <example-custom/>
  </baxi-page>
</template>

<script>
import ExampleDefault from './example-default'
import ExampleNotUseLine from './example-notuseline'
import ExampleMultiple from './example-multiple'
import ExampleObject from './example-object'
import ExampleCustom from './example-custom'

export default {
  components: {
    ExampleDefault,
    ExampleNotUseLine,
    ExampleMultiple,
    ExampleObject,
    ExampleCustom
  }
}
</script>