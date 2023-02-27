<template>
    <div class="container" v-if="logged">
        <div class="row">
            <ul class="col-12 border border-white" v-for="(character, index) in peopleInfo" :key=character.url>
                <router-link :to="{ name: 'characters', params: { id: character.url.slice(-3, -1) } }">
                    <li class="text-secondary mt-3 mb-3">{{ character.name.toUpperCase() }}</li>
                </router-link>
            </ul>
        </div>
        <button class="btn btn-dark" @click="avanzar()">View More Characters</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { mapState, mapMutations, mapGetters } from "@/lib";
import { useRouter } from 'vue-router';

let { logged } = mapState()
let { fetchPeople, fetchMorePeople } = mapMutations()
let { peopleInfo } = mapGetters()
const router = useRouter()

onMounted(() => {
    if (logged.value == false) {
        router.push({ path: '/Login' })
    }
    fetchPeople()
})

const avanzar = () => {
    fetchMorePeople()
}
</script>

    

<style scoped>
a {
    text-decoration: none;
}
</style>