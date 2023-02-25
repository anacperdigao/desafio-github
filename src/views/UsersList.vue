<template>

    <div class='cards'>
        <Card 
            v-for='user in usersData' 
            :key='user.id'
            :user='user'
            @aoAbrirModal="showModal = $event.showModalProps, userSelected = $event.userSelected"
        >
        </Card>

        <ModalUser 
            v-if="showModal" 
            :showModal="showModal" 
            @aoFecharModal="showModal = $event"
            :userSelected="userSelected" 
        />

    </div>

</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { store } from '@/store';
import Card from '../components/Card.vue'
import ModalUser from '../components/ModalUser.vue'

export default defineComponent({
    name: 'PageUserList',

    data () {
        return {
            showModal: false,
            userSelected: ""
        }
    },

    components: {
        Card,
        ModalUser
    },

    setup() {
        return {
            dataInput: computed(() => store.state.dataInput),
            usersData: computed(() => store.state.usersData),
        }
    }

})

</script>

<style scoped>

.cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 30px 0;
}
</style>