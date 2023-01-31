<template>
   <div class="show-modal">
      <dialog class="dialog" @open="showModal">

        <img src="../assets/Exclamacao.png" alt="Aviso" class="exclamacao">
        <p class="desculpe">Desculpe!</p>
        <p class="aviso">Não foi possível encontrar o repositório ou usuário desejado!</p>
        <button class="botao-fechar" @click="closeModal">Certo</button>
        
    </dialog>
    </div>
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalComponent',

    props: {
        showModal: { type: Boolean }
    },

    data () {
        return{
            showModalProps: this.showModal
        }
    },

    methods: {
        closeModal (): void {
            this.showModalProps = false
            this.$emit('aoFecharModal', this.showModalProps)
        }
    },
});
</script>


<style scoped>
.show-modal{
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

.dialog{
    border: none;
    border-radius: 15px;
    width: 444px;
    height: 500px;
    padding: 40px;
    margin: auto;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}

.exclamacao{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.botao-fechar{
    background-color: #FF0000;
    color: white;
    border: none;
    width: 194px;
    height: 72px;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
}

.botao-fechar:hover{
    opacity: 0.8;
}

.desculpe{
    font-size: 48px;
}

.aviso{
    font-size: 24px;
}


</style>