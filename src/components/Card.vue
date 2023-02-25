<template>
    
    <div class='card' @click="openModal">
        <img class='avatar' :src='user.avatar_url' />
        <div class='info'>
            <div class='login'>
                <p>Login:</p>
                <p>{{ user.login }}</p>
            </div>
            <div class='repositories'>
                <p>GitHub:</p>
                <a class='link' :href='user.html_url'>{{ user.html_url }}</a>
            </div>
        </div>
    </div>

</template>
  

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'CardComponent',

    props: ['user', 'showModal'],

    data() {
        return{
            showModalProps: this.showModal,
            userSelected: this.user
        }
    },

    methods: {
        openModal(): void {
            this.showModalProps = true
            this.$emit('aoAbrirModal', {
                showModalProps: this.showModalProps,
                userSelected: this.userSelected
            })
        }
    }
    
});

</script>


<style scoped>
.card{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    gap: 10px;
    width: 550px;
    margin: 0px 0px;
    background-color: #f3f0f0;
    cursor: pointer;
}

.card:hover{
    background-color: #e2e0e0;
}

.avatar{
    width: 130px;
    height: 130px;
    border-radius: 5px 0 0 5px;
}

.info{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.login, .repositories{
    display: flex;
    flex-direction: row;
    gap: 5px
}

.link{
    color: black;
    text-decoration: none;
}

.link:hover{
    color: grey
}

</style>