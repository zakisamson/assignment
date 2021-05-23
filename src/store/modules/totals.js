const state = { 
    totals:[
        {
            usd_vat_amount:'',
            usd_sub_total:'',
            usd_total:'',
            aed_vat_amount:'',
            aed_sub_total:'',
            aed_total:'',
        }
    ]
};

const getters = {
    allTotals: (state) => state.totals
 };

const actions = { };

const mutations = { };

export default{
    state,
    getters,
    actions,
    mutations,
};