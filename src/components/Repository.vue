<template>
    <p>Página Repository</p>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
// import { useRoute } from 'vue-router'


export default defineComponent({
    name: 'PageRepository',

    props: {
        dadosRepositorio: {
            type: Array
        }
    },

    created () {
        console.log(this.dadosRepositorio)
    }
    
});
</script>


<style scoped>

</style>