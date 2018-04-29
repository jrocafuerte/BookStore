<template>
<div>  
  <v-toolbar app dark color="secondary">
    <v-toolbar-side-icon @click="toggleDrawer" />
    
    <v-toolbar-title>
      <v-btn color="accent" to="/" >
        Desarrollo Aplicaciones con VUE
      </v-btn>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/About">{{ $t('navigation.about')}}</v-btn>
      <v-btn flat to="/Login">{{ $t('navigation.login')}}</v-btn>
      <v-btn flat to="/Register">{{ $t('navigation.register')}}</v-btn>
      
      
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer overlay v-model="drawer" absolute  value="" >
      <v-list class="pt-0" dense>
         <v-divider />
         <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.to)">
           <v-list-tile-action>
             <v-icon>{{item.icon}}</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title>{{item.title}}</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
         
         <v-divider/>

        <v-list-tile  @click="toggleDrawer">
           <v-list-tile-action>
             <v-icon>chevron_left</v-icon>
             <!-- <v-icon>arrow_back</v-icon> -->
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title>{{$t('navigation.close_menu')}}</v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>


</div>
</template>
<script>
// mixing son codigos externos que le dan funcionalidad a mi pantalla.
import navigationMixing from '@/mixing/navigation';

export default{
    name:'guest',
    mixins:[navigationMixing],
    data(){

      return{
        drawer:false,
        items:[
          {title: 'Inicio', icon: 'home', to:'/' },
          {title: 'Login', icon: 'forward', to:'/Login' },
          {title: 'Register', icon: 'account_circle', to:'/Register' },
          
          
        ]
      }
    }
}
</script>

