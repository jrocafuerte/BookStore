<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <img src="@/assets/logo.png" />
        <v-card-title primary-title>
            <h3 class="headline mb-0">{{ $t('personalLabel.title')}}</h3>
        </v-card-title>
        <v-card-content align-left>
            <v-layout row wrap>
                <!-- <v-flex xs4 dark align-rigth >
                    <strong> {{ $t('personalLabel.name')}} </strong>
                </v-flex> -->
                <v-flex xs6 align-left>
                    {{ $t('personalInformation.name')}}
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <!-- <v-flex xs4 dark>
                    <strong> {{ $t('personalLabel.profesion')}}</strong>
                </v-flex> -->
                <v-flex xs6 align-left>
                    {{ $t('personalInformation.profesion')}}
                </v-flex>
            </v-layout>
            <v-layout row>
                <!-- <v-flex xs4 dark>
                    <strong> {{ $t('personalLabel.mail')}}</strong>
                </v-flex> -->
                <v-flex xs6 align-left>
                    {{ $t('personalInformation.mail')}}
                </v-flex>
            </v-layout>
            <v-layout row>
                <!-- <v-flex xs4 dark>
                    <strong> {{ $t('personalLabel.age')}} </strong>
                </v-flex> -->
                <v-flex xs6 align-left >
                    {{ $t('personalInformation.age')}}
                </v-flex>
            </v-layout>
            <v-layout row>
                <!-- <v-flex xs4 dark>
                    <strong> {{ $t('personalLabel.hobby')}} </strong>
                </v-flex> -->
                <v-flex xs6 align-left>
                    {{ $t('personalInformation.hobby')}}
                </v-flex>
            </v-layout>
        </v-card-content>

        
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default{

    name: 'Acerca de'

}
</script>