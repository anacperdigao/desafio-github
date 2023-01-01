<template>
  
    <Header @aoSelecionarInicio="inicioSelecionado"></Header>

    <Home 
      v-if="setPages === 'Home'" 
      @aoRepoSelecionado="repoSelecionado" 
      @aoUsuarioSelecionado="usuarioSelecionado"
    />
    
    <User 
      v-if="setPages === 'User'"
      :dadosUsuario = "dadosUsuario"
    />

    <Repository 
      v-if="setPages === 'Repository'" 
      :dadosRepositorio = "dadosRepositorio"
    />

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
      setPages: 'Home',
      dadosUsuario: [],
      dadosRepositorio: []
    }
  },

  components: {
    Header,
    Home,
    User,
    Repository,
    Favorites
  },

  methods: {
    usuarioSelecionado(dados: any) {
      this.setPages = dados.setPages
      this.dadosUsuario = dados.dadosUsuario
    },

    repoSelecionado(dados: any) {
      this.setPages = dados.setPages
      this.dadosRepositorio = dados.dadosRepositorio
    },

    inicioSelecionado(dados: any){
      this.setPages = dados.setPages
    }
  }

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
