<template>
    <div class="show-modal">
        <dialog class="dialog" @open="showModal">

            <div class='card'>
                <div class='profile'>
                    <img class='avatar' :src='user.avatar_url' />
                    <div class='info'>
                        <div class='data'>
                            <p>{{ userData.name }}</p>
                        </div>
                        <div class='data'>
                            <p>Seguidores:</p>
                            <p>{{ userData.followers }}</p>
                        </div>
                        <div class='data'>
                            <p>Local:</p>
                            <p>{{ userData.location }}</p>
                        </div>
                        <div class='data'>
                            <p>Repositórios:</p>
                            <p>{{ userData.public_repos }}</p>
                        </div>
                    </div>
                </div>
                <div class='repositories'>

                </div>
            </div>

            <button @click='closeModal' class='botao-fechar'>
                Voltar
            </button>

        </dialog>
    </div>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import api from '@/services/api'

export default defineComponent({
    name: 'ModalUser',

    props: ['showModal', 'userSelected'],

    data() {
        return {
            showModalProps: this.showModal,
            user: this.userSelected,
            userData: {}
        }
    },

    methods: {
        closeModal(): void {
            this.showModalProps = false
            this.$emit('aoFecharModal', this.showModalProps)
        }
    },

    mounted() {
        api
            .get(`/users/${this.user.login}`)
            .then((response) => {
                console.log(response.data)
                this.userData = response.data
            })
    }
});
</script>


<style scoped>
.show-modal {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.59);
    border: none;
    line-height: 26px;
}

.dialog {
    border: none;
    border-radius: 15px;
    width: 700px;
    height: 400px;
    padding: 20px;
    margin: auto;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}
.card{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    gap: 10px;
    width: 100%;
    height: 100%;
    margin: 0px 0px;
    background-color: #f3f0f0;
}

.profile{
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #e4e3e3;
    padding: 10px;
    border-radius: 5px 0 0 5px;
}

.avatar{
    width: 160px;
    height: 160px;
    border-radius: 5px;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    font-size: 14px;
    padding: 5px 5px;
}

.data{
    display: flex;
    flex-direction: row;
    gap: 5px
}

.botao-fechar {
    background-color: #FF0000;
    color: white;
    border: none;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
}

.botao-fechar:hover {
    opacity: 0.8;
}

</style>