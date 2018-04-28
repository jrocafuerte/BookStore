<template>
  <main>
    <v-app>
      <v-content>
        <app-navigation/>
        <v-container class="mt-3 mb-3">
          <router-view/> 
        </v-container>
        <app-footer />
      </v-content>
    </v-app>
    
  </main>

</template>

<script>
// Importando pagina
import AppFooter from "@/components/Footer";
import AppNavigation from "@/navigation/guess";


export default {
  // Agregar componentes a la plantilla
  components:{
    AppFooter,
    AppNavigation
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
