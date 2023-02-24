<template>

    <div class='cards'>
        <Card 
            v-for='user in usersData' 
            :key='user.id'
            :user='user'
        >
        </Card>
    </div>

</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { store } from '@/store';
import Card from '../components/Card.vue'

export default defineComponent({
    name: 'PageUserList',

    components: {
        Card
    },

    setup() {
        return {
            dataInput: computed(() => store.state.dataInput),
            usersData: computed(() => store.state.usersData),
        }
    },

    created () {
        console.log(this.dataInput)
        console.log(this.usersData)
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