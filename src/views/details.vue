<template>
  <div class="details">
    <Header :headline="homeworldData.name"/>
    <div class="details__name">
      <div>Name: {{this.$route.params.name}}</div>
      <div>Population: {{homeworldData.population}}</div>
      <div>Terrain: {{homeworldData.terrain}}</div>
      <div>Climate: {{homeworldData.climate}}</div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'HelloWorld',
  components: {
    Header
  },
  created() {
    fetch(this.$route.params.homeworld)
    .then((res)=> res.json())
    .then((data) => {
      this.homeworldData = data
    }).catch((error) => {
      console.log("There was an error!", error);
    })
  },
  data() {
    return { 
      homeworldData: null
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.details__name {
  border: 1px solid #000000;
  padding: 8px;
  margin-bottom: 16px;
  margin-top: 32px;
  background: #afacac;
}

@media only screen and (min-width: 600px) {
  .details {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__name {
      width: 50%;
    }
  }
}
</style>
