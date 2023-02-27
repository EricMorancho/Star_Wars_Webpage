<template>
    <div id="starships">
        <h3 class="name"> {{ starships.name }}</h3>

        <img v-bind:src="'https://starwars-visualguide.com/assets/img/starships/' + route.params.id + '.jpg'" alt=""
            @error="errorImg">

        <div class="container">
            <div class="row">
                <div class="col-12 mt-3">
                    <p> <span>MODEL:</span> {{ starships.model }}</p>
                    <p> <span>STARSHIP CLASS:</span> {{ starships.starship_class }}</p>
                    <p> <span>MANUFACTURER:</span> {{ starships.manufacturer }}</p>
                    <p> <span>PASSENGERS:</span> {{ starships.passengers }}</p>
                </div>
                <div class="col-4 mt-3 offset-2 positioning">
                    <p> <span>COST:</span> {{ starships.cost_in_credits }} CREDITS</p>
                    <p> <span>LENGTH:</span> {{ starships.length }} METERS</p>
                    <p> <span>MAX ATMOSPHERING SPEED:</span> {{ starships.max_atmosphering_speed }} </p>
                    <p> <span>CREW:</span> {{ starships.crew }} </p>
                </div>
                <div class="col-4 offset-2 mt-3 positioning">
                    <p> <span>HYPER DRIVE RATING:</span> {{ starships.hyperdrive_rating }} </p>
                    <p> <span>CARGO CAPACITY:</span> {{ starships.cargo_capacity }} TONS</p>
                    <p> <span>CONSUMABLES:</span> {{ starships.consumables }} </p>
                    <p> <span>MAXIMUM SPEED IN REALSPACE:</span> {{ starships.MGLT }} MGLT</p>
                </div>
        
                <pilots />
            </div>
        </div>
        
        <router-link class="btn btn-dark" to="/StarshipList">back to Starships</router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router"
import img from '@/assets/img-placeholder.png'
import pilots from '@/components/pilots.vue'

const route = useRoute();

let starships = ref('');


onMounted(() => {
    fetch(`https://swapi.dev/api/starships/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            starships.value = data;
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