import Vuex from 'vuex'
import Vue from 'vue'
import inputs from './modules/inputs'

//Load Vuex

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        inputs
    }
});