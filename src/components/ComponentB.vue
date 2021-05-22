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
            <b-th>Change To</b-th>
        </b-tr>
        </b-thead>
        <b-tbody>
        <b-tr>
            <b-td><Input1 plctext="Description"/></b-td>
            <b-td><Input1 /></b-td>
            <b-td>uom</b-td>
            <b-td><Input1 /></b-td>
            <b-td><Input1 /></b-td>
            <b-td><Input1 /></b-td>
            <b-td>Currency</b-td>
            <b-td>vat</b-td>
            <b-td>subtotal</b-td>
            <b-td>total</b-td>
            <b-td>charge to</b-td>
        </b-tr>
        </b-tbody>
        <b-tfoot>
        <b-tr>
            <b-td colspan="11" variant="secondary" class="text-right">
            Total Rows: <b>5</b>
            </b-td>
        </b-tr>
        </b-tfoot>
    </b-table-simple>
    </b-container>
</template>

<script>
    import Input1 from './Input1'
    export default {
        name:'componentB',
        components: {
            Input1
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
</style>