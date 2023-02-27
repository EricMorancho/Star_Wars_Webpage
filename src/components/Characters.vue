<template>
    <div>
        <h3 class="name mb-5"> {{ character.name }}</h3>

        <img v-bind:src="'https://starwars-visualguide.com/assets/img/characters/' + route.params.id + '.jpg'" alt=""
            @error="errorImg">

        <div class="container">
            <div class="row">
                <div class="col-4 mt-5 offset-2 positioning">
                    <p><span>HEIGHT:</span> {{ character.height }} cm</p> 
                    <p><span>WEIGHT:</span> {{ character.mass }} kg</p> 
                </div>
                <div class="col-4 offset-2 mt-5 positioning">
                    <p><span>HAIR:</span> {{ character.hair_color }} </p> 
                    <p><span>EYES:</span> {{ character.eye_color }} </p> 
                </div>
            </div>
            <charactersInfo />
        </div>
        <router-link class="btn btn-dark mt-5 mb-5" to="/CharactersList">back to Characters</router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router"
import img from '@/assets/img-placeholder.png'
import charactersInfo from './charactersInfo.vue';


const route = useRoute();

let character = ref('');


onMounted(() => {
    fetch(`https://swapi.dev/api/people/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            character.value = data;
        })
})

const errorImg = (e) => {
    e.target.src = img
}
</script>

<style scoped>

span {
    color: white;
}

.positioning {
    text-align: left;
}

.name {
    color: white;
}

</style>