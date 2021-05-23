import Vuex from 'vuex'
import Vue from 'vue'
import inputs from './modules/inputs'
import totals from './modules/totals'

//Load Vuex

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        inputs,
        totals
    }
});