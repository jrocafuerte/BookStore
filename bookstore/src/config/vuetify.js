import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';


Vue.use(Vuetify,{
    theme:{
        primary:colors.red.darken4,
        secondary:colors.blue.lighten3,
        accent:colors.indigo.base,
        error:colors.red.accent4
    }
});


