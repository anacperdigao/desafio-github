<template>
    <Card :dadosApi="dadosApi" />

</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue'


export default defineComponent({
    name: 'PageUser',

    data() {
        return{
            dadosApi: [] as any
        }
    },

    props: {
        dadosUsuario: {
            type: Object
        }
    },

    created () {
        this.dadosApi = this.dadosUsuario
        console.log(this.dadosApi)
    },

    components: {
        Card
    }
    
});
</script>


<style scoped>

</style>