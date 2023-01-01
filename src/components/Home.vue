<template>
    <div class="home">
        <img class="logo" src="../assets/Vector.png" alt="Logo GitHub">
        <div class="botoes">
            <button @click="repoSelecionado" class="botao">Repositório</button>
            <button @click="usuarioSelecionado" class="botao">Usuário</button>
        </div>
        
        <input @keydown.enter="teste" class="input" type="text" placeholder="Buscar..." v-model="textoBusca" >
    </div>

    <Modal v-if="showModal" :showModal="showModal" @aoFecharModal="closeModal" />
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from './Modal.vue'
import axios from 'axios'


export default defineComponent({
    name: 'PageHome',

    data () {
        return {
            textoBusca: "",
            dadosRepositorio: [],
            dadosUsuario: {},
            showModal: false,
            showRepository: false,
            showUser: false,
        }
    },

    components: {
        Modal
    },

    methods: {

        teste () {
            console.log('entrei')
        },

        repoSelecionado(evento: any) {
            axios
            .get(`https://api.github.com/users/${this.textoBusca}/repos`)
            .then((response: any) => {
                this.dadosRepositorio = response.data
                this.showRepository = true
            })
            .catch((erro) => {
                if (erro.response.status === 404) {
                    this.showModal = true
                }
            })
        },

        usuarioSelecionado(evento: any) {
            axios
            .get(`https://api.github.com/users/${this.textoBusca}`)
            .then((response: any) => {
                this.dadosUsuario = response.data
                this.showUser = true
            })
            .catch((erro) => {
                if (erro.response.status === 404) {
                    this.showModal = true
                }
            })
        },

        closeModal () {
            this.showModal = false
        }

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

.botoes{
    display: flex;
    flex-direction: row;
    gap: 30px
}

.botao{
    width: 186px;
    height: 51px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    background-color: white;
    cursor: pointer;
}

.botao:hover{
    transform: scale(1.03);
}

.is-black{
    background-color: black;
    color: white;
}

.input{
    width: 780px;
    height: 71px;
    border-radius: 10px;
    font-size: 24px;
    padding-left: 20px;
}

.input::placeholder{
    font-size: 24px;
}

</style>
  