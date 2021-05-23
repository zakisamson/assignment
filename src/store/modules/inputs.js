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
            vat_amount:'0',
            sub_total:'0',
            total:'0',
            charge_to:'',
            exchange_rate:''
        },
    ],
    // total_states:[
    //     {
    //         usd_vat_amount:'',
    //         usd_sub_total:'',
    //         usd_total:'',
    //         aed_vat_amount:'',
    //         aed_sub_total:'',
    //         aed_total:'',
    //     }
    // ]
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