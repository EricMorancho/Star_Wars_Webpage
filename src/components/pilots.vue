<template>
<div class="container">
    <div class="row">
        <h3 class="col-12 text-center text-white mt-5 mb-5">PILOTS</h3>
        <div v-for="idIMG in idPilotos" class="col-3 mb-5">
            <router-link :to="{name: 'characters', params: {id: idIMG}}">
                <img v-bind:src="'https://starwars-visualguide.com/assets/img/characters/' + idIMG + '.jpg'" alt=""
                @error="errorImg" class="img">
            </router-link> 
        </div>
    </div>
</div>
    
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from "vue-router";
import { mapGetters } from '@/lib';

const route = useRoute();

let { starshipsInfo, iddGet } = mapGetters()


let pilotos = reactive([])
let idPilotos = reactive([])

onMounted(() => {
    fetch(`https://swapi.dev/api/starships/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            starshipsInfo = data;

            let valores = Object.values(starshipsInfo.pilots);
            


            let findPilotos = valores.forEach(piloto => {
                fetch(piloto)
                    .then((res) => res.json())
                    .then((data) => {
                        iddGet = data;
                        pilotos.push(iddGet);
                       
                    });
                idPilotos.push(piloto.slice(-3, -1))
                
                

            })
        });


})
</script>

<style scoped>
    .img{
        border-radius: 70%;
        width: 5rem;
    }

    .row{
        border: 1px solid white;
        margin-bottom: 4rem;
        margin-top: 3rem;
    }

</style>