<template>
    <p>Página Home</p>

    <p><router-link to="/user">Ir para User</router-link></p>
    <p><router-link to="/repository">Ir para Repository</router-link></p>
    <p><router-link to="/favorites">Ir para Favorites</router-link></p>
    <p><router-link to="/404">Ir para 404</router-link></p>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHome'
});
</script>


<style scoped>

</style>
  