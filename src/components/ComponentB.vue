<template>
    <b-container fluid>
        <h2>Cost Detail</h2>
        <b-table-simple fixed borderless>
        <b-thead class="table-header">
        <b-tr>
            <b-th>Description</b-th>
            <b-th>Qty</b-th>
            <b-th>UOM</b-th>
            <b-th>Unit price</b-th>
            <b-th>Discount (%)</b-th>
            <b-th>Vat (%)</b-th>
            <b-th>Currency</b-th>
            <b-th>VAT Amount</b-th>
            <b-th>Sub Total</b-th>
            <b-th>Total</b-th>
            <b-th colspan="2">Charge To</b-th>
        </b-tr>
        </b-thead>
        <b-tbody>
        <b-tr v-for="inputt in allInputs" :key="inputt.id">
            <b-td><b-form-input v-model="description" placeholder="Description" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="quantity" placeholder="Qty" @blur="calculate" size="lg"></b-form-input></b-td>
            <b-td>
                <b-form-select v-model="selected_uom" :options="options_uom" size="lg"></b-form-select>
            </b-td>
            <b-td><b-form-input v-model="unit_price" placeholder="Unit Price" @blur="calculate" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="discount" placeholder="0" @blur="calculate" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="vat" placeholder="0" @blur="calculate" size="lg"></b-form-input></b-td>
            <b-td>
                <b-form-select v-model="selected_currency" :options="options_currency" size="lg"></b-form-select>
            </b-td>
            <b-td>{{ vat_amount }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td colspan="2">
                <ChargeTo />
            </b-td>
        </b-tr>
        </b-tbody>
        <b-tfoot class="table-footer">
        <b-tr>
            <b-td>Exchange rate 1 USD</b-td>
            <b-td><b-form-input v-model="exchange_rt" placeholder="0" size="md"></b-form-input></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td>USD Total</b-td>
            <b-td>{{ vat_amount }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td></b-td>
            <b-td><b-button size="sm" class="btn-plus">+</b-button></b-td>
        </b-tr>
        <b-tr>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td>AED Total</b-td>
            <b-td>{{ vat_amount }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td>{{ total }}</b-td>
            <b-td></b-td>
            <b-td></b-td>
        </b-tr>
        </b-tfoot>
    </b-table-simple>
    </b-container>
</template>

<script>
    import ChargeTo from './ChargeTo'
    import { mapGetters } from 'vuex'

    export default {
        name:'componentB',
        components:{
            ChargeTo
        },
        mounted(){
            this.calculate();
        },
        computed: {
            ...mapGetters(['allInputs']),
        },
        data() {
            return {
                description: '',
                quantity: '',
                unit_price: '',
                discount: '',
                vat: '',
                selected_uom: 'SHP',
                options_uom: [
                { value: 'SHP', text: 'SHP' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'This is Second option' },
                ],
                selected_currency: 'USD',
                options_currency: [
                { value: 'USD', text: 'USD'},
                { value: 'AED', text: 'AED'}
                ],
                exchange_rt:'',
                vat_amount:'',
                total:''
            };
        },
        methods: {
            calculate(){
                let count1 = this.quantity * this.unit_price
                let dis_count = (count1 * this.discount) / 100
                let count2 = count1 - dis_count
                let vat_count = (count2 * this.vat) / 100
                let count3 = count2 - vat_count 
                this.total = count3
                this.vat_amount = vat_count
            }
        }
    }
</script>

<style scoped>
h2{
    text-align: left;
}

.table-header{
    background-color: #F6F7F9;
}

.table-footer{
    background-color: #F6F7F9;
    font-size: 14px;
}

.footer-ctn-left{
    text-align: left;
    float: left;
}

.dd-btn{
    height: 47px;
}

.btn-plus{
    width: 50px;
    height: 50px;
    background-color: #19BDBE;
    color: white;
}
</style>