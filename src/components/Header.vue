<template>
  <div class="header">
    {{headline}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    headline() {
      return this.$route.fullPath === "/" ? 'People' : 'name'
    }
  },
  methods() {
    console.log(this.$router)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
    border: 1px solid #000000;
    margin-bottom: 16px;
    padding: 8px;
}
</style>
