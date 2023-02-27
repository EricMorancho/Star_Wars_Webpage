import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    logged: false,
    starships: '',
    id: 1,
    valores: '',
    idd: '',
    people: '',
    idFilm: '',
    idStarship: ''

    
    
  },
  getters: {
    starshipsInfo( state ){
      return state.starships.results
    },
    iddGet(state){
      return state.idd
    },
    peopleInfo(state){
      return state.people.results
    },
    idFilm(state){
      return state.idFilm
    },
    idStarship(state){
      return state.idStarship
    }
  
    
  },
  mutations: {
    checkLog(state) {
      state.logged = true
    },

    fetchStarships(state) {
      fetch(`https://swapi.dev/api/starships?page=${state.id}`)
        .then((res) => res.json())
        .then((data) => {
          state.starships = data;
        })
    },

    fetchMoreStarships(state) {
      state.id++;
      if(state.id > 4){
        state.id = 1;
      }
      fetch(`https://swapi.dev/api/starships?page=${state.id}`)
      .then((res) => res.json())
      .then((data) => {
        state.starships = data;  
     });
    },

    fetchPeople(state) {
      fetch(`https://swapi.dev/api/people?page=${state.id}`)
        .then((res) => res.json())
        .then((data) => {
          state.people = data;
        })
    },

    fetchMorePeople(state) {
      state.id++;
      if(state.id > 9){
        state.id = 1;
      }
      fetch(`https://swapi.dev/api/people?page=${state.id}`)
      .then((res) => res.json())
      .then((data) => {
        state.people = data;  
     });
    }

   
   

    
  },
  actions: {},
  modules: {}
})