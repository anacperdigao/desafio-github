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

    data() {
        return{
            dadosApi: [] as any
        }
    },

    created () {
        this.dadosApi = this.dadosRepositorio
        console.log(this.dadosApi)
    }

});
</script>


<style scoped>

</style>