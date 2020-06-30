<template>
  <div class="baxi-input-group">
    <div class="baxi-input-group-label">{{text}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'baxiInputGroup',
  props: {
    text: String
  }
}
</script>