<template>
    <p>Página User</p>

</template>
  

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'PageUser',

    props: {
        dadosUsuario: {
            type: Object
        }
    },

    created () {
        console.log(this.dadosUsuario)
    }
    
});
</script>


<style scoped>

</style>