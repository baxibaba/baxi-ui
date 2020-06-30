<template>
  <div class="baxi-select-group">
    <div class="baxi-select-group-label">{{text}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'baxiSelectGroup',
  props: {
    text: String
  }
}
</script>