<template>
  <Header headline="People"/>
  <div class="main">
    <Filter v-if="this.movies" :movieLinks="movies" @someEvent="this.selected = $event"/>
  <div class="main__tile">
    <Tile v-for="person in this.orderedPeople" :key="person" :person="person" />
  </div>
  </div>
</template>

<script>
import Tile from '../components/Tile.vue'
import Header from '../components/Header.vue'
import Filter from '../components/Filter.vue'

export default {
  name: 'HelloWorld',
   components: {
    Tile,
    Header,
    Filter
  },
  data() {
    return { 
      selected: [],
      movies: [],
    }
  },
  props: {
    people: Array
  },
  created() {
    let allMovies = this.people.map((person) => {
      const a = person.films.map((e) => e
      );
      return a
    }).flat(2)
    allMovies = allMovies.filter((el, i) => allMovies.indexOf(el) === i)

    Promise.all(allMovies.map(url =>
      fetch(url).then(resp => resp.json())
    )).then(texts => {
      this.movies = texts.map((el) => el)
    })    
    .catch((error) => {
      console.log("There was an error!", error);
    })
  },
  computed: {
    orderedPeople () {
      if(this.selected.length > 1) {
        return this.selected;
      }
      return this.people
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__tile{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
