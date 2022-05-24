<template>
  <div class="header">
    <div v-if="this.headline != 'People'">Planet: </div>
    {{headline}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    headline: String
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  border: 1px solid #000000;
  margin-bottom: 16px;
  padding: 8px;
  background: #afacac;
  width: 100%;
}
</style>
