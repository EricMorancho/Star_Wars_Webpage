<template>
    <div class="container" v-if="logged">
        <div class="row">
            <ul class="col-12 border border-white" v-for="(star, index) in starshipsInfo" :key=star.url>
                <router-link :to="{ name: 'starships', params: { id: star.url.slice(-3, -1) } }">
                    <li class="text-secondary mt-3 mb-3">{{ star.name.toUpperCase() }}</li>
                    <li class="text-secondary mt-3 mb-3">{{ star.model }} </li>

                </router-link>
            </ul>
        </div>
        <button class="btn btn-dark" @click="avanzar()">View More Starships</button>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import { mapState, mapMutations, mapGetters } from "@/lib";
import { useRouter } from 'vue-router';

let { logged } = mapState()
let { fetchStarships, fetchMoreStarships } = mapMutations()
let { starshipsInfo } = mapGetters()
const router = useRouter()

onMounted(() => {
    if (logged.value == false) {
        router.push({ path: '/Login' })
    }
    fetchStarships()

})

const avanzar = () => {
    fetchMoreStarships()
}

</script>

<style scoped>
a {
    text-decoration: none;
}
</style>