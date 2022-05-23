<template>
  <div v-if="peopleData">
    <Header/>
    <Main :people="peopleData.results"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './views/home.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  data() {
    return { 
      peopleData: null
    }
  },
  created() {
    fetch("https://swapi.dev/api/people/?format=json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return this.peopleData = data})
    .catch((error) => {
      console.log("There was an error!", error);
    })
  },
  mounted() {
    this.$router.push({name:'home'})
  }
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
</style>
