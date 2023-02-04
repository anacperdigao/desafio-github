<template>
    <p v-for='user in usersData' :key='user.id'> {{ user.login }} </p>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { store } from '@/store';

export default defineComponent({
    name: 'PageUserList',

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

</style>