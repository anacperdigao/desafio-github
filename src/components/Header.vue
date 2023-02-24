<template>
    <header class="header">
        <h1>Github Search</h1>
        <div class="lista-header">
            <p @click="handleHome" class="inicio">Início</p>
        </div>
    </header>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',

    methods: {
        handleHome () {
            this.$router.push({ path: '/' })
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
    color: #000000;
    padding: 0px 100px 0px 50px;
}

.lista-header{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 500;
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