<template>
    <div class="back">
        <div>
        <h1 class="text-white mt-5 mb-5">Log in you must, if looking for a Starship you are...</h1>
        </div>
        <form @submit.prevent="submit">
            <input type="text" name="username" v-model="email" placeholder="Username" class="mb-5 me-2" required>
            <input type="password" name="password" v-model="password" placeholder="Password" required>
            <button class="btn btn-outline-light ms-3 me-1" @click="login">Log in</button>
            <button class="btn btn-outline-light ms-1" @click="signup">Sign up</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import { mapState, mapMutations } from '@/lib';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    let email = ref('');
    let password = ref('');
    let users = [];
    
    
    
    let { logged } = mapState()
    let { checkLog } = mapMutations()

    const login = () => {
       let find = users.find((e) =>{
        if(e.email === email.value && e.pass === password.value && email.value != ''){
            checkLog();
            router.push({path: '/starshipList'})
        } 
       }) 
       if(logged.value == true){
        console.log('You are logged')
       } else {
        console.log('error')
       }
    }

    const signup = () => {

        if(users.some(e => e.email === email.value) ){
            console.log('This user already exist')
        } else {
            users.push({email: email.value, pass: password.value});
            localStorage.setItem('users', JSON.stringify(users))
            console.log('you are now registerd!')
            email.value = '';
            password.value = '';
        }   
    }

    let data = localStorage.getItem('users')
    users = JSON.parse(data);
    

    
</script>



<style scoped>
    .back{
        background: black;
        min-width: 100vw;
        min-height: 100vh;
    }
</style>