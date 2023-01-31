<template>
  
  <Header></Header>

  <RouterView></RouterView>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',

  components: {
    Header
  },

});
</script>

<style>

*{
  margin: 0;
  text-decoration: none;
  font-family: 'Inter';
  box-sizing: border-box;
  user-select: none;
}


</style>
