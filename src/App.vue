<template>
  <div v-if="peopleData">
    <router-view :people="this.peopleData.results"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return { 
      peopleData: null
    }
  },
  created() {
    fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      return this.peopleData = data})
    .then(() => {
      this.$router.push({name: 'home'})
    })
    .catch((error) => {
      console.log("There was an error!", error);
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}

html, 
body {
    margin: 0;
    padding: 0;
    background-color:#dfe0e0;
}
</style>
