import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Referente a un return
export default new Vuex.Store({
 // Variables de estado
    state :{
        processing : false,
        loaded:false,
        // Alerta siempre compuesta por 3 variables
        alert:{
            type:'success',
            show:false,
            message:''
        }
    },
    // Cambios que pueden tener las variables globales de estado
    mutations:{
        // mutations siempre llevan el prefijo "set"
                 // funcion
        setLoaded:(state,loaded)=>{
            state.loaded = loaded;
        },
        setAlertMessage:(state,data)=>{
            state.alert.type = data.type;
            state.alert.show = data.show;
            state.alert.message = data.message;
            setTimeout(()=>{
                state.alert.type = 'success';
                state.alert.show = false;
                state.alert.message = '';
            },data.timeout);
        }

    },
    // Modulos que se manejaran dentro del proyecto
    modules:{

    }

});