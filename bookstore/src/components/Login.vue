<template>
  <auth-form action="login" v-on:process="login($event)" /> 
</template>
<script>
import AuthForm from '@/forms/Auth';
export default {
  components:{
      AuthForm
  },
  name:"Register",
  methods:{
      login(user){
          console.log(user);
      }
  }
}
</script>

