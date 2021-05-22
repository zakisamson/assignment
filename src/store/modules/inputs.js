// import axios from 'axios'

const state = { 
    inputs:[
        {
            id:1,
            description:'',
            quantity:'',
            uom:'',
            unit_price:'',
            discount:'',
            vat:'',
            currency:'',
            vat_amount:'1',
            sub_total:'0',
            total:'0',
            charge_to:'',
            exchange_rate:''
        },
        {
            id:2,
            description:'',
            quantity:'',
            uom:'',
            unit_price:'',
            discount:'',
            vat:'',
            currency:'',
            vat_amount:'2',
            sub_total:'0',
            total:'0',
            charge_to:'',
            exchange_rate:''
        }
    ]
};

const getters = {
    allInputs: (state) => state.inputs
 };

const actions = { };

const mutations = { };

export default{
    state,
    getters,
    actions,
    mutations,
};