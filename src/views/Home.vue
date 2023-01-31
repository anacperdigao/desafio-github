<template>

    <div class="home">
        <img class="logo" src="../assets/Vector.png" alt="Logo GitHub">
        <input class="input" type="text" placeholder="Buscar..." v-model="textoBusca" >
        
        <div class="buttons">
            <button @click="handleRepositories" class="button">Repositório</button>
            <button @click="handleUsers" class="button">Usuário</button>
        </div>
        

    </div>

    <Modal v-if="showModal" :showModal="showModal" @aoFecharModal="showModal = $event" />

</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from '../components/Modal.vue'
import axios from 'axios'


export default defineComponent({
    name: 'PageHome',

    data () {
        return {
            showModal: false,
            textoBusca: "",
            
            dadosRepositorio: [],
            dadosUsuario: {},
            isSelected: false,
        }
    },

    components: {
        Modal
    },

    methods: {

        handleRepositories() {
            axios
            .get(`https://api.github.com/users/${this.textoBusca}/repos`)
            .then((response: any) => {
                this.dadosRepositorio = response.data
                this.$emit('aoRepoSelecionado', {
                setPages: 'Repository',
                dadosRepositorio: this.dadosRepositorio
            })
            })
            .catch((erro) => {
                if (erro.response.status === 404) {
                    this.showModal = true
                }
            })
        },

        handleUsers() {
            axios
            .get(`https://api.github.com/users/${this.textoBusca}`)
            .then((response: any) => {
                this.dadosUsuario = response.data
                this.$emit('aoUsuarioSelecionado', {
                    setPages: 'User',
                    dadosUsuario: this.dadosUsuario
                })
            })
            .catch((erro) => {
                if (erro.response.status === 404) {
                    this.showModal = true
                }
            })
        },


    }
});


</script>


<style scoped>
.home{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px
}

.logo{
    width: 169px;
    height: 169px;
    margin-top: 50px;
}

.buttons{
    display: flex;
    flex-direction: row;
    gap: 30px
}

.button{
    width: 186px;
    height: 51px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    background-color: white;
    cursor: pointer;
}

.button:hover{
    transform: scale(1.03);
}

.input{
    width: 600px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    padding-left: 20px;
}

.input::placeholder{
    font-size: 20px;
}

</style>
  