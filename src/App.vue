<template>

  <Header></Header>

  <Home v-if="setPages === 'Home'"/>
  <User v-if="setPages === 'User'"/>
  <Repository v-if="setPages === 'Repository'"/>
  <Favorites v-if="setPages === 'Favorites'"/>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Repository from './components/Repository.vue'
import Favorites from './components/Favorites.vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      setPages: 'Home'
    }
  },

  components: {
    Header,
    Home,
    User,
    Repository,
    Favorites
  },

});
</script>

<style>

*{
  margin: 0;
  text-decoration: none;
  font-family: 'Inter';
  box-sizing: border-box;
}


</style>
