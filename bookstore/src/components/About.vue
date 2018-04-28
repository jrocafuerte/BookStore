<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <!-- <v-card-media src="@/assets/logo.png" height="200px"> -->
        <img src="@/assets/logo.png" />
        
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $t('personalInformation.name')}}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default{

    name: 'Acerca de'

}
</script>