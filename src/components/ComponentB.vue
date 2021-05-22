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
            <b-td><b-form-input v-model="text" placeholder="Description" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="Qty" size="lg"></b-form-input></b-td>
            <b-td>
                <b-dropdown class="dd-btn" id="dropdown-1" text="SHP" variant="Outline" size="sm">
                    <b-dropdown-item>SHP</b-dropdown-item>
                    <b-dropdown-item>SHP</b-dropdown-item>
                    <b-dropdown-item>SHP</b-dropdown-item>
                </b-dropdown>
            </b-td>
            <b-td><b-form-input v-model="text" placeholder="Unit Price" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="" size="lg"></b-form-input></b-td>
            <b-td>
                <b-dropdown class="dd-btn" id="dropdown-1" text="USD" variant="Outline" size="sm">
                    <b-dropdown-item>USD</b-dropdown-item>
                    <b-dropdown-item>IDR</b-dropdown-item>
                    <b-dropdown-item>AED</b-dropdown-item>
                </b-dropdown>
            </b-td>
            <b-td>{{ inputt.vat_amount }}</b-td>
            <b-td>{{ inputt.sub_total }}</b-td>
            <b-td>{{ inputt.total }}</b-td>
            <b-td colspan="2">
                <ChargeTo />
            </b-td>
        </b-tr>
        </b-tbody>
        <!-- <b-tbody>
        <b-tr>
            <b-td><b-form-input v-model="text" placeholder="Description" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="Qty" size="lg"></b-form-input></b-td>
            <b-td>
                <b-dropdown class="dd-btn" id="dropdown-1" text="SHP" variant="Outline" size="sm">
                    <b-dropdown-item>SHP</b-dropdown-item>
                    <b-dropdown-item>SHP</b-dropdown-item>
                    <b-dropdown-item>SHP</b-dropdown-item>
                </b-dropdown>
            </b-td>
            <b-td><b-form-input v-model="text" placeholder="Unit Price" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="" size="lg"></b-form-input></b-td>
            <b-td><b-form-input v-model="text" placeholder="" size="lg"></b-form-input></b-td>
            <b-td>
                <b-dropdown class="dd-btn" id="dropdown-1" text="AED" variant="Outline" size="sm">
                    <b-dropdown-item>USD</b-dropdown-item>
                    <b-dropdown-item>IDR</b-dropdown-item>
                    <b-dropdown-item>AED</b-dropdown-item>
                </b-dropdown>
            </b-td>
            <b-td>vat</b-td>
            <b-td>subtotal</b-td>
            <b-td>total</b-td>
            <b-td colspan="2">
                <ChargeTo />
            </b-td>
        </b-tr>
        </b-tbody> -->
        <b-tfoot class="table-footer">
        <b-tr>
            <b-td>Exchange rate 1 USD</b-td>
            <b-td><b-form-input v-model="text" placeholder="0" size="md"></b-form-input></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td></b-td>
            <b-td>USD Total</b-td>
            <b-td>qwe</b-td>
            <b-td>qwe</b-td>
            <b-td>dfg</b-td>
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
            <b-td>qwe</b-td>
            <b-td>qwe</b-td>
            <b-td>dfg</b-td>
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
        computed: mapGetters(['allInputs'])
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