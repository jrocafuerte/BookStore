<template>
<div>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <!-- Uso de Archivo de Traducciones 
           Se Utiliza $t siempre dentro de () se invoca a la variable que estamos invocando
          -->
          
          <h3 class="display-3">{{ $t('welcome.title',{ app:'APPJRO'})}}</h3>
          <span class="subheading">{{ $t('welcome.content')}}</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">{{ $t('welcome.call_to_action')}}</div>
          <v-btn large color="primary" href="https://www.blogdelfotografo.com/tag/paisajes/" class="mx-0">{{ $t('welcome.action_button')}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <v-divider />
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</div>  
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {  src: '/static/doc-images/carousel/paisaje_1.jpg' },
          {  src: '/static/doc-images/carousel/paisaje_2.jpg' },
          {  src: '/static/doc-images/carousel/paisaje_3.jpg' },
          {  src: '/static/doc-images/carousel/paisaje_4.jpg' }
        ]
      }
    }
  }
</script>