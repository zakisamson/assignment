<template>
    <div class="flex">
        <b-dropdown class="dd-btn" id="dropdown-1" text="Select An Option" variant="Outline" size="sm">
                <b-dropdown-item>Option 1</b-dropdown-item>
                <b-dropdown-item>Option 2</b-dropdown-item>
                <b-dropdown-item>Option 3</b-dropdown-item>
        </b-dropdown>
        <b-button size="sm" class="btn-minus">-</b-button>
    </div>
</template>

<script>
    export default {
        name:'ChargeTo'
    }
</script>

<style scoped>
.flex{
    display: flex;
}

.btn-minus{
    background-color: whitesmoke;
    width: 50px;
    height: 50px;
    color: gray;
}
</style>