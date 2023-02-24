<template>

    <div class="home">
        <img class="logo" src="../assets/Vector.png" alt="Logo GitHub">
        <input class="input" type="text" placeholder="Digite o nome do usuário..." v-model="dataInput" >
        
        <div class="buttons">
            <button @click="handleUsers" class="button">Buscar</button>
        </div>
    </div>

    <Modal v-if="showModal" :showModal="showModal" @aoFecharModal="showModal = $event" />

</template>
  

<script lang="ts">
import { store } from '@/store';
import { defineComponent, computed } from 'vue';
import Modal from '../components/Modal.vue'
import api from '../services/api'

export default defineComponent({
    name: 'PageHome',

    data () {
        return {
            showModal: false,
        }
    },

    components: {
        Modal
    },

    computed: {
        dataInput: {
            get () {
                return store.state.dataInput
            },
            set(value: string) {
                store.commit('setDataInput', value)
            }
        },
    },

    setup () {
        return{
            usersData: computed(() => store.state.usersData),
        }
    },

    created () {
        store.commit('clearInput', "")
    },
    
    methods: {

        handleUsers() {
            api
            .get(`/search/users?q=${this.dataInput}`)
            .then((response) => {
                store.commit('setUsersData', response.data.items)
                if ( response.data.total_count === 0 ) {
                    this.showModal = true
                } else {
                    this.$router.push({ path: '/userslist' })
                }
            })
            .catch((erro) => {
                if (erro.response.status === 422) {
                    this.showModal = true
                }
            })
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
  