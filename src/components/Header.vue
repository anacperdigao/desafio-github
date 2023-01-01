<template>
    <header class="header">
        <h1><strong>Github</strong> <em>Search</em></h1>
        <div class="lista-header">
            <p @click="voltarInicio" class="inicio">INÍCIO</p>
            <p class="favoritos">FAVORITOS</p>
        </div>
    </header>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',

    emits: ['aoSelecionarInicio'],

    methods: {
        voltarInicio () {
            this.$emit('aoSelecionarInicio', {
                setPages: 'Home'
            })
        }
    }
});
</script>


<style scoped>
.header{
    background-color: #D9D9D9;
    height: 84px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #000000;
    padding: 0px 100px 0px 50px;
}

.lista-header{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 700;
    gap: 40px
}

.inicio{
    color: #FF0000;
    cursor: pointer;
}


.favoritos{
    cursor: pointer;
}

</style>