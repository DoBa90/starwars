<template>
  <div class="tile">
    <div>Name: {{person.name}}</div>
    <div>Hair: {{person.hair_color}}</div>
    <div>Eyes: {{person.eye_color}}</div>
    <div>Gender: {{person.gender}}</div>
    <div> Planet: 
      <div @click="handleClick()">Link</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    person: Object
  },
  methods: {
    handleClick() {
      console.log(this.$route.fullPath)
      this.$router.push({name:'details'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tile {
  border: 1px solid #000000;
  border-radius: 24px;
  padding: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
  text-align: left;
  width: 200px;

// @media only screen and (max-width: 600px) {
//   .tile {
//     width: calc(100% / 3);
//   }
// }
}
</style>
