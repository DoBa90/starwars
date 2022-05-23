<template>
<div class="select">
    <select @change="$emit('someEvent', $event.target.value)">
        <option value="">--SELECT--</option>
        <option v-for="movie in this.movieLinks" :key="movie" :value="movie.characters">{{movie.title}}</option>
    </select>
    <div class="select_arrow">
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    movieLinks: Array
  },
  data() {
    return { 
      movies: null
    }
  },
  methods() {
    // filter alle charakter 
  }
  // created() {
  //   if(this.movieLinks) {
  //     Promise.all(this.movieLinks.map(url =>
  //       fetch(url).then(resp => resp.json())
  //     )).then(texts => {
  //       this.movies = texts.map((el) => el.title)
  //     })
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.select {
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    width: 30%;
}    
.select select {
  font-family: 'Arial';
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 25px;
  background: #e6e6e6;
  color: #7b7b7b;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select select::-ms-expand {
  display: none;
}
.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}
.select_arrow {
  position: absolute;
  top: 16px;
  right: 15px;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0px 5px;
  border-color: #7b7b7b transparent transparent transparent;
}
.select select:hover ~ .select_arrow,
.select select:focus ~ .select_arrow {
  border-top-color: #000000;
}
.select select:disabled ~ .select_arrow {
  border-top-color: #cccccc;
}
</style>
