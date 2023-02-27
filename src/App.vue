<template>
  <div class="container back">
    <nav class="row">
      <div class="col-12 offset-5">
        <router-link to="/login">LOG IN // SIGN UP</router-link>
      </div>
    </nav>

    <img src="@/assets/star-wars-2.svg" alt="">
    
    <nav>
      <router-link to="/">Home</router-link> <span class="text-white">|</span>
      <router-link to="/StarshipList"> Starships</router-link> <span class="text-white">|</span>
      <router-link to="/CharactersList"> Characters</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
  

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  
}

nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
}

nav a:hover{
  color: yellow;
}

nav a.router-link-exact-active {
  color: greenyellow;
}

.back{
  background-color: black;
  
  min-width: 100vw;
  min-height: 100vh;
}

.login{
  object-position: right top;
}


</style>
