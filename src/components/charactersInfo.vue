<template>
    <div class="container">
        <div class="row">
            <div class="col-6 border border-white mt-5">
                <h3 class="col-12 text-white mt-5 mb-5">STARSHIPS</h3>
                <div v-for="idIMG in idStashipCharacter" class="col-12">
                    <img v-bind:src="'https://starwars-visualguide.com/assets/img/starships/' + idIMG + '.jpg'" alt=""
                        @error="errorImg" class="img mb-5 text-start">
                </div>
            </div>
            <div class="col-6 border border-white mt-5">
                <h3 class="col-12 text-white mt-5 mb-5">MOVIES</h3>
                <div>
                    <ul v-for="movies in movie">
                        <p class="text-white mb-5">Episode {{ movies.episode_id }}: {{ movies.title }} </p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from "vue-router";
import { mapGetters } from '@/lib';

const route = useRoute();

let { peopleInfo, idStarship, idFilm } = mapGetters()

let starship = reactive([]);
let idStashipCharacter = reactive([])
let movie = reactive([]);
let idMovie = reactive([])


onMounted(() => {
    fetch(`https://swapi.dev/api/people/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
            peopleInfo = data;

            let valores = Object.values(peopleInfo.starships);

            let findStarship = valores.forEach(Starship => {
                fetch(Starship)
                    .then((res) => res.json())
                    .then((data) => {
                        idStarship = data;
                        starship.push(idStarship);

                    });
                idStashipCharacter.push(Starship.slice(-3, -1))
            });

            let valoresMovies = Object.values(peopleInfo.films);


            let findMovies = valoresMovies.forEach(film => {
                fetch(film)
                    .then((res) => res.json())
                    .then((data) => {
                        idFilm = data;
                        movie.push(idFilm);

                    });
                idMovie.push(film.slice(-3, -1))
            });
        });
});


</script>

<style scoped>
.img {
    border-radius: 50%;
    width: 10rem;

}
</style>