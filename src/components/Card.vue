<template>
    
    <div>
        <img :src='user.avatar_url' />
        <div class='info'>
            <div>
                <p>Login:</p>
                <p>{{ user.login }}</p>
            </div>
            <div>
                <p>Link repositórios:</p>
                <p>{{ user.repos_url }}</p>
            </div>
        </div>
    </div>

</template>
  

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'CardComponent',

    props: ['user']
    
});

</script>


<style scoped>

</style>