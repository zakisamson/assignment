<template>
    <div class="input-ctn">
        <b-row>
            <b-col>
                <b-form-input v-model="text" :placeholder="description">0</b-form-input>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    
    export default {
        name:'Input1', 
        // props: ['plcholder']
    }
</script>

<style scoped>
.input-ctn{
    width: 150px;
}
</style>