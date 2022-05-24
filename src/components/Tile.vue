<template>
  <div class="tile">
    <div>Name: {{person.name}}</div>
    <div>Hair: {{person.hair_color}}</div>
    <div>Eyes: {{person.eye_color}}</div>
    <div>Gender: {{person.gender}}</div>
    <div> Planet: 
      <a class="tile__link" @click="handleClick()">Link</a>
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
      this.$router.push({name:'details', params: this.person})
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
  background: #afacac;

  &__link {
    cursor: pointer;

    &:link {
      color: rgb(87, 119, 206);
    } 
  }
}
</style>
